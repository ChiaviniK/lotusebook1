import React, { useState, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { CheckCircle, AlertTriangle, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

const ItemTypes = {
  BLOCK: 'logicBlock'
};

const DraggableBlock = ({ id, text, type, isUsed }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BLOCK,
    item: { id, text, type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  if (isUsed) return null;

  let bgColor = '#f1f5f9';
  let color = '#334155';
  let borderColor = '#cbd5e1';

  if (type === 'keyword') {
    bgColor = '#e0e7ff';
    color = '#4338ca';
    borderColor = '#a5b4fc';
  } else if (type === 'condition') {
    bgColor = '#fef08a';
    color = '#854d0e';
    borderColor = '#fde047';
  } else if (type === 'action') {
    bgColor = '#fecdd3';
    color = '#be123c';
    borderColor = '#fda4af';
  }

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: bgColor,
        color: color,
        border: `2px solid ${borderColor}`,
        padding: '0.75rem 1rem',
        borderRadius: '6px',
        fontWeight: 'bold',
        cursor: 'grab',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        userSelect: 'none',
        display: 'inline-block',
        margin: '0.5rem',
        fontSize: '1rem',
        touchAction: 'none'
      }}
    >
      {text}
    </div>
  );
};

const DropZoneSlot = ({ index, droppedItem, onDrop, onRemove }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BLOCK,
    drop: (item) => onDrop(item, index),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      onClick={() => droppedItem && onRemove(index)}
      style={{
        minWidth: '120px',
        height: '50px',
        backgroundColor: isOver ? '#e2e8f0' : droppedItem ? 'transparent' : '#f8fafc',
        border: `2px dashed ${isOver ? '#3b82f6' : droppedItem ? 'transparent' : '#cbd5e1'}`,
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '4px',
        cursor: droppedItem ? 'pointer' : 'default',
        transition: 'all 0.2s ease',
        position: 'relative'
      }}
      title={droppedItem ? "Clique para remover" : "Solte o bloco aqui"}
    >
      {droppedItem ? (
        <div style={{
          backgroundColor: droppedItem.type === 'keyword' ? '#e0e7ff' : droppedItem.type === 'condition' ? '#fef08a' : '#fecdd3',
          color: droppedItem.type === 'keyword' ? '#4338ca' : droppedItem.type === 'condition' ? '#854d0e' : '#be123c',
          border: `2px solid ${droppedItem.type === 'keyword' ? '#a5b4fc' : droppedItem.type === 'condition' ? '#fde047' : '#fda4af'}`,
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          fontWeight: 'bold',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          {droppedItem.text}
        </div>
      ) : (
        <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Espaço {index + 1}</span>
      )}
    </div>
  );
};

const LogicBuilder = () => {
  const initialBlocks = [
    { id: 'b1', text: 'IF', type: 'keyword' },
    { id: 'b2', text: 'pH Efluente < 5', type: 'condition' },
    { id: 'b3', text: 'THEN', type: 'keyword' },
    { id: 'b4', text: 'Multar Empresa', type: 'action' },
    { id: 'b5', text: 'pH Efluente == 7', type: 'condition' },
    { id: 'b6', text: 'Aprovar Laudo', type: 'action' }
  ];

  const targetSequence = ['b1', 'b2', 'b3', 'b4'];
  const altTargetSequence = ['b1', 'b5', 'b3', 'b6']; // Both making sense logic wise

  const [availableBlocks, setAvailableBlocks] = useState(initialBlocks);
  const [slots, setSlots] = useState([null, null, null, null]);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleDrop = (item, slotIndex) => {
    // If slot is already occupied, return the occupied item to available blocks first
    setSlots(prev => {
      const newSlots = [...prev];
      if (newSlots[slotIndex]) {
         // item already there, we override it (the old item becomes un-used implicitly by slot change)
      }
      
      // Remove item from any other slot if it was already placed somewhere else
      const existingIdx = newSlots.findIndex(s => s && s.id === item.id);
      if (existingIdx !== -1) {
        newSlots[existingIdx] = null;
      }
      
      newSlots[slotIndex] = item;
      return newSlots;
    });
    setErrorMsg('');
  };

  const handleRemove = (slotIndex) => {
    setSlots(prev => {
      const newSlots = [...prev];
      newSlots[slotIndex] = null;
      return newSlots;
    });
    setErrorMsg('');
    setSuccess(false);
  };

  const handleVerify = () => {
    const currentSequence = slots.map(s => s ? s.id : null);
    
    if (currentSequence.includes(null)) {
      setErrorMsg('Preencha todos os espaços primeiro!');
      return;
    }

    const isMatch1 = currentSequence.every((val, index) => val === targetSequence[index]);
    const isMatch2 = currentSequence.every((val, index) => val === altTargetSequence[index]);

    if (isMatch1 || isMatch2) {
      setSuccess(true);
      setErrorMsg('');
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#22c55e', '#3b82f6', '#eab308']
      });
    } else {
      setSuccess(false);
      setErrorMsg('Lógica incorreta! A estrutura clássica é: [IF] [Condição] [THEN] [Ação]. O pH < 5 deve gerar multa. pH == 7 deve aprovar.');
    }
  };

  const reset = () => {
    setSlots([null, null, null, null]);
    setSuccess(false);
    setErrorMsg('');
  };

  // Determine which blocks are currently in slots to hide them from the palette
  const usedBlockIds = slots.filter(s => s !== null).map(s => s.id);

  return (
    <div style={{
      backgroundColor: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: '8px',
      padding: '2rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          Construindo um Robô Fiscal (If / Then)
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto' }}>
          O CONAMA exige pH neutro (próximo a 7). Arraste os blocos lógicos até as lacunas para criar uma rotina de código que multe a empresa infratora automaticamente.
        </p>
      </div>

      <div style={{
        backgroundColor: '#f8fafc',
        padding: '1rem',
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
        minHeight: '80px',
        marginBottom: '2rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {availableBlocks.map(block => (
          <DraggableBlock 
            key={block.id} 
            {...block} 
            isUsed={usedBlockIds.includes(block.id)} 
          />
        ))}
        {availableBlocks.filter(b => !usedBlockIds.includes(b.id)).length === 0 && (
          <span style={{ color: '#94a3b8', fontStyle: 'italic' }}>Todos os blocos foram usados.</span>
        )}
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '2rem',
        padding: '1rem',
        backgroundColor: '#1e293b', // Dark background framing the code
        borderRadius: '8px'
      }}>
        {slots.map((slot, index) => (
          <DropZoneSlot 
            key={`slot-${index}`} 
            index={index} 
            droppedItem={slot} 
            onDrop={handleDrop} 
            onRemove={handleRemove}
          />
        ))}
      </div>

      {errorMsg && (
        <div style={{ backgroundColor: '#fef2f2', color: '#b91c1c', padding: '1rem', borderRadius: '6px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', justifyContent: 'center' }}>
          <AlertTriangle size={18} />
          {errorMsg}
        </div>
      )}

      {success && (
        <div style={{ backgroundColor: '#f0fdf4', color: '#15803d', padding: '1rem', borderRadius: '6px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', justifyContent: 'center', fontWeight: 'bold' }}>
          <CheckCircle size={20} />
          Script Lógico Compilado! O cérebro do PC agora entende a ordem de fiscalização.
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button 
          onClick={handleVerify}
          disabled={success}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: success ? '#a7f3d0' : 'var(--color-primary)',
            color: success ? '#065f46' : 'white',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: success ? 'default' : 'pointer',
            transition: 'all 0.2s'
          }}
        >
          {success ? 'Validado' : 'Rodar Algoritmo'}
        </button>

        <button 
          onClick={reset}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: 'transparent',
            color: 'var(--color-text-muted)',
            border: '1px solid var(--color-border)',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          <RefreshCw size={16} />
          Limpar
        </button>
      </div>
    </div>
  );
};

export default LogicBuilder;
