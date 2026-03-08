import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const ItemTypes = {
  ELEMENT: 'element'
};

const DraggableItem = ({ id, content, color, index, isDropped }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ELEMENT,
    item: { id, index },
    canDrag: !isDropped,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  if (isDropped) return null;

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: color,
        color: 'white',
        padding: '0.75rem 1rem',
        margin: '0.5rem',
        borderRadius: '8px',
        cursor: isDropped ? 'default' : 'grab',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        fontWeight: 'bold',
        fontSize: '0.85rem'
      }}
    >
      {content}
    </div>
  );
};

const DropZone = ({ category, acceptId, label, children, onDrop, droppedItem }) => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ItemTypes.ELEMENT,
    drop: (item) => onDrop(item.id, category),
    canDrop: (item) => item.id === acceptId,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const backgroundColor = isOver ? (canDrop ? '#dcfce7' : '#fee2e2') : '#f8fafc';
  const borderColor = isOver ? (canDrop ? '#22c55e' : '#ef4444') : '#cbd5e1';

  return (
    <div
      ref={drop}
      style={{
        backgroundColor,
        border: `2px dashed ${borderColor}`,
        borderRadius: '12px',
        padding: '1rem',
        minHeight: '120px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s ease',
        textAlign: 'center'
      }}
    >
      <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem', fontWeight: 'bold' }}>{label}</span>
      {droppedItem ? (
        <div style={{ backgroundColor: droppedItem.color, color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.85rem' }}>
          {droppedItem.content}
        </div>
      ) : (
        <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Arraste aqui</span>
      )}
    </div>
  );
};

const CarbonCycleDragDrop = () => {
    const [elements] = useState([
        { id: 'co2', content: 'CO2 Atmosférico', color: '#64748b' },
        { id: 'photosynthesis', content: 'Fotossíntese', color: '#16a34a' },
        { id: 'biomass', content: 'Biomassa (Madeira)', color: '#854d0e' },
        { id: 'respiration', content: 'Respiração / Decomposição', color: '#ef4444' }
    ]);

    const [zones, setZones] = useState({
        source: null,
        process_in: null,
        storage: null,
        process_out: null
    });

    const handleDrop = (itemId, zoneName) => {
        setZones(prev => ({ ...prev, [zoneName]: itemId }));
    };

    const isComplete = zones.source === 'co2' && zones.process_in === 'photosynthesis' && zones.storage === 'biomass' && zones.process_out === 'respiration';

    return (
        <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: '12px', border: '1px solid var(--color-border)', margin: '2rem 0' }}>
            <h3 style={{ margin: '0 0 1rem 0', color: 'var(--color-text-main)', fontSize: '1.1rem' }}>Laboratório: O Ciclo do Carbono Florestal</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                Para entender a geração de créditos, ordene as etapas biológicas. Arraste as caixas para o diagrama correto para formar o ciclo de sequestro e emissão natural da floresta.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2rem', minHeight: '60px' }}>
                {elements.map((el, i) => (
                    <DraggableItem 
                        key={el.id} 
                        {...el} 
                        index={i} 
                        isDropped={Object.values(zones).includes(el.id)} 
                    />
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                <DropZone category="source" acceptId="co2" label="1. Origem Primária" onDrop={handleDrop} droppedItem={elements.find(e => e.id === zones.source)} />
                <DropZone category="process_in" acceptId="photosynthesis" label="2. Motor Biológico" onDrop={handleDrop} droppedItem={elements.find(e => e.id === zones.process_in)} />
                <DropZone category="storage" acceptId="biomass" label="3. Armazém (O Crédito)" onDrop={handleDrop} droppedItem={elements.find(e => e.id === zones.storage)} />
                <DropZone category="process_out" acceptId="respiration" label="4. Retorno à Atmosfera" onDrop={handleDrop} droppedItem={elements.find(e => e.id === zones.process_out)} />
            </div>

            {isComplete && (
                <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: 'var(--color-success-bg, #ecfdf5)', borderRadius: '8px', border: '1px solid var(--color-success, #10b981)', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-success, #047857)' }}>
                    <CheckCircle2 size={20} />
                    <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Excelente! Você mapeou a Adicionalidade! O Carbono é sugado (2) e vira Tronco (3). Se houver fogo, o passo 4 acelera e você perde os créditos gerados.</span>
                </div>
            )}
        </div>
    );
};

export default CarbonCycleDragDrop;
