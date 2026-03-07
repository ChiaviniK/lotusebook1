import { useState } from 'react';
import { Terminal, Lightbulb, CheckCircle2 } from 'lucide-react';
import { useDrag, useDrop } from 'react-dnd';
import styles from './Simulations.module.css';

const ItemTypes = {
  CODE_BLOCK: 'code_block'
};

const DraggableBlock = ({ block }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CODE_BLOCK,
    item: { id: block.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return (
    <div 
      ref={drag}
      style={{
        backgroundColor: '#1e1e1e',
        color: block.color,
        padding: '0.75rem',
        borderRadius: '4px',
        fontFamily: 'monospace',
        fontSize: '0.85rem',
        cursor: 'grab',
        opacity: isDragging ? 0.5 : 1,
        border: '1px solid #333'
      }}
    >
      {block.text}
    </div>
  );
};

const DropSlot = ({ slots, slotId, blocks, onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.CODE_BLOCK,
    drop: (item) => onDrop(item.id, slotId),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }));

  return (
    <div 
      ref={drop}
      style={{ 
        flex: 1, height: '40px', 
        backgroundColor: slots[slotId] ? 'transparent' : (isOver ? '#333' : '#2d2d2d'), 
        border: slots[slotId] ? 'none' : (isOver ? '1px dashed #3498db' : '1px dashed #555'), 
        borderRadius: '4px', display: 'flex', alignItems: 'center', 
        paddingLeft: slots[slotId] ? '0' : '1rem' 
      }}
    >
      {slots[slotId] && (
        <div style={{ color: blocks.find(b=>b.id===slots[slotId])?.color }}>
          {blocks.find(b=>b.id===slots[slotId])?.text}
        </div>
      )}
    </div>
  );
};

const PandasDragDrop = () => {
  const [slots, setSlots] = useState({ s1: null, s2: null, s3: null });

  const blocks = [
    { id: 'import', text: 'import pandas as pd', color: '#c586c0' },
    { id: 'read', text: "df = pd.read_csv('amazonia.csv')", color: '#dcdcaa' },
    { id: 'head', text: 'print(df.head())', color: '#4ec9b0' }
  ];

  const handleDrop = (blockId, slotId) => {
    setSlots(prev => ({ ...prev, [slotId]: blockId }));
  };

  const isComplete = slots.s1 === 'import' && slots.s2 === 'read' && slots.s3 === 'head';

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <Terminal size={24} color="#3498db" /> 
          Prática 8.1: Lendo Dados no Python
        </h3>
        <p className={styles.simDesc}>
          Um analista não memoriza códigos na primeira semana, ele entende a <strong>Ordem Lógica</strong>. Monte o script arrastando e soltando os comandos na ordem em que o computador deve lê-los.
        </p>
      </div>

      <div className={styles.simContent}>
        
        <div className={styles.responsiveFlex} style={{ alignItems: 'flex-start' }}>
          
          {/* Blocks Palette */}
          <div style={{ flex: 1, minWidth: '200px', backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ fontSize: '0.9rem', marginBottom: '1rem', color: '#475569' }}>Comandos Disponíveis:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {blocks.map(b => (
                <DraggableBlock key={b.id} block={b} />
              ))}
            </div>
          </div>

          {/* Script Editor Area */}
          <div style={{ flex: 2, minWidth: '300px', backgroundColor: '#1e1e1e', padding: '1.5rem', borderRadius: '8px', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: '#858585', fontSize: '0.8rem', fontFamily: 'monospace' }}>
              <span>script.py</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontFamily: 'monospace', width: '100%', overflowX: 'auto', paddingBottom: '0.5rem' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: '#858585', width: '20px' }}>1</span>
                <span style={{ color: '#6a9955' }}># Passo 1: Trazer a biblioteca para o projeto</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <span style={{ color: '#858585', width: '20px' }}>2</span>
                <DropSlot slots={slots} slotId="s1" blocks={blocks} onDrop={handleDrop} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: '#858585', width: '20px' }}>3</span>
                <span style={{ color: '#6a9955' }}># Passo 2: Ler o arquivo CSV e alocar na variável 'df' (DataFrame)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <span style={{ color: '#858585', width: '20px' }}>4</span>
                <DropSlot slots={slots} slotId="s2" blocks={blocks} onDrop={handleDrop} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: '#858585', width: '20px' }}>5</span>
                <span style={{ color: '#6a9955' }}># Passo 3: Imprimir as 5 primeiras linhas no terminal para visualizar</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: '#858585', width: '20px' }}>6</span>
                <DropSlot slots={slots} slotId="s3" blocks={blocks} onDrop={handleDrop} />
              </div>

            </div>
          </div>
        </div>

        {isComplete && (
          <div className={`${styles.successBox} animate-fade-in`} style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <CheckCircle2 size={24} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong>Lógica Perfeita!</strong> O Python é altamente procedural. Diferente de um gráfico pronto num Excel onde tudo carrega de uma vez, aqui você explicitamente chama a calculadora (<em>pandas</em>), coloca os dados na mesa (<em>read_csv</em>) e pede para o computador falar o resultado (<em>print</em>).
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default PandasDragDrop;
