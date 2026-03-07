import { useState } from 'react';
import { Filter, CodeSquare } from 'lucide-react';
import styles from './Simulations.module.css';

const PandasFilterDragDrop = () => {
  const [slots, setSlots] = useState({ s1: null, s2: null, s3: null, s4: null });

  const blocks = [
    { id: 'df', text: 'df', color: '#9cdcfe' },
    { id: 'equals', text: '==', color: '#d4d4d4' },
    { id: 'col', text: "['bioma']", color: '#ce9178' },
    { id: 'val', text: "'Amazônia'", color: '#ce9178' }
  ];

  const handleDrop = (e, slotId) => {
    e.preventDefault();
    const blockId = e.dataTransfer.getData("blockId");
    setSlots(prev => ({ ...prev, [slotId]: blockId }));
  };

  const handleDragStart = (e, blockId) => {
    e.dataTransfer.setData("blockId", blockId);
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
            <div 
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, 's1')}
              style={{ minWidth: '40px', height: '40px', borderBottom: slots.s1 ? 'none' : '2px dashed #555', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {slots.s1 ? <span style={{ color: blocks.find(b=>b.id===slots.s1)?.color }}>{blocks.find(b=>b.id===slots.s1)?.text}</span> : ''}
            </div>

            <div 
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, 's2')}
              style={{ minWidth: '60px', height: '40px', borderBottom: slots.s2 ? 'none' : '2px dashed #555', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {slots.s2 ? <span style={{ color: blocks.find(b=>b.id===slots.s2)?.color }}>{blocks.find(b=>b.id===slots.s2)?.text}</span> : ''}
            </div>

            <div 
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, 's3')}
              style={{ minWidth: '30px', height: '40px', borderBottom: slots.s3 ? 'none' : '2px dashed #555', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 0.5rem' }}
            >
              {slots.s3 ? <span style={{ color: blocks.find(b=>b.id===slots.s3)?.color }}>{blocks.find(b=>b.id===slots.s3)?.text}</span> : ''}
            </div>

            <div 
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, 's4')}
              style={{ minWidth: '80px', height: '40px', borderBottom: slots.s4 ? 'none' : '2px dashed #555', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {slots.s4 ? <span style={{ color: blocks.find(b=>b.id===slots.s4)?.color }}>{blocks.find(b=>b.id===slots.s4)?.text}</span> : ''}
            </div>

            ]
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {blocks.map(b => (
              <div 
                key={b.id}
                draggable
                onDragStart={(e) => handleDragStart(e, b.id)}
                style={{
                  backgroundColor: '#2d2d2d',
                  color: b.color,
                  padding: '1rem 1.5rem',
                  borderRadius: '4px',
                  fontFamily: 'monospace',
                  fontSize: '1rem',
                  cursor: 'grab',
                  border: '1px solid #444',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
              >
                {b.text}
              </div>
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
