import { useState } from 'react';
import { Filter, CodeSquare } from 'lucide-react';
import { useDrag, useDrop } from 'react-dnd';
import styles from './Simulations.module.css';

const ItemTypes = {
  FILTER_BLOCK: 'filter_block'
};

const DraggableBlock = ({ block }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.FILTER_BLOCK,
    item: { id: block.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return (
    <div 
      ref={drag}
      style={{
        backgroundColor: '#2d2d2d',
        color: block.color,
        padding: '1rem 1.5rem',
        borderRadius: '4px',
        fontFamily: 'monospace',
        fontSize: '1rem',
        cursor: 'grab',
        opacity: isDragging ? 0.5 : 1,
        border: '1px solid #444',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}
    >
      {block.text}
    </div>
  );
};

const DropSlot = ({ slots, slotId, blocks, onDrop, styleProps }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.FILTER_BLOCK,
    drop: (item) => onDrop(item.id, slotId),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }));

  return (
    <div 
      ref={drop}
      style={{ 
        ...styleProps, 
        borderBottom: slots[slotId] ? 'none' : (isOver ? '2px dashed #3498db' : '2px dashed #555'),
        backgroundColor: isOver && !slots[slotId] ? '#333' : 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center' 
      }}
    >
      {slots[slotId] && (
        <span style={{ color: blocks.find(b=>b.id===slots[slotId])?.color }}>
          {blocks.find(b=>b.id===slots[slotId])?.text}
        </span>
      )}
    </div>
  );
};

const PandasFilterDragDrop = () => {
  const [slots, setSlots] = useState({ s1: null, s2: null, s3: null, s4: null });

  const blocks = [
    { id: 'df', text: 'df', color: '#9cdcfe' },
    { id: 'equals', text: '==', color: '#d4d4d4' },
    { id: 'col', text: "['bioma']", color: '#ce9178' },
    { id: 'val', text: "'Amazônia'", color: '#ce9178' }
  ];

  const handleDrop = (blockId, slotId) => {
    setSlots(prev => ({ ...prev, [slotId]: blockId }));
  };

  const isComplete = slots.s1 === 'df' && slots.s2 === 'col' && slots.s3 === 'equals' && slots.s4 === 'val';

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <Filter size={24} color="#e74c3c" /> 
          Prática 8.2: Filtrando Linhas
        </h3>
        <p className={styles.simDesc}>
          Nosso objetivo: Queremos criar um novo DataFrame chamado <code>amazon_df</code> onde só sobram as fazendas localizadas na Amazônia!
          Monte o filtro lógico arrastando as caixas.
        </p>
      </div>

      <div className={styles.simContent}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', backgroundColor: '#1e1e1e', padding: '2rem', borderRadius: '8px', fontFamily: 'monospace', fontSize: '1.2rem', color: '#d4d4d4', overflowX: 'auto' }}>
            <span style={{ color: '#4fc1ff' }}>amazon_df</span> = <span style={{ color: '#9cdcfe' }}>df</span>[
            {/* Slots for: df['bioma'] == 'Amazônia' */}
            <DropSlot slots={slots} slotId="s1" blocks={blocks} onDrop={handleDrop} styleProps={{ minWidth: '40px', height: '40px' }} />
            <DropSlot slots={slots} slotId="s2" blocks={blocks} onDrop={handleDrop} styleProps={{ minWidth: '60px', height: '40px' }} />
            <DropSlot slots={slots} slotId="s3" blocks={blocks} onDrop={handleDrop} styleProps={{ minWidth: '30px', height: '40px', margin: '0 0.5rem' }} />
            <DropSlot slots={slots} slotId="s4" blocks={blocks} onDrop={handleDrop} styleProps={{ minWidth: '80px', height: '40px' }} />

            ]
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {blocks.map(b => (
              <DraggableBlock key={b.id} block={b} />
            ))}
          </div>

        </div>

        {isComplete && (
          <div className={`${styles.successBox} animate-fade-in`} style={{ marginTop: '2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <CodeSquare size={24} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong>BINGO!</strong> A sintaxe parece esquisita no início: <code>df[df['bioma'] == 'Amazônia']</code>. Lê-se de fora para dentro: "Me traga o DataFrame (df), filtrando onde a coluna 'bioma' do próprio DataFrame seja exatamente igual a 'Amazônia'".
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default PandasFilterDragDrop;
