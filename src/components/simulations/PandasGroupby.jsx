import React, { useState } from 'react';
import { Group, ArrowDownToLine, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

const PandasGroupby = () => {
  const [stage, setStage] = useState('raw'); // 'raw', 'animating', 'grouped'

  const rawData = [
    { id: 1, mes: 'Jan', tipo: 'Plástico', peso: 120 },
    { id: 2, mes: 'Jan', tipo: 'Papel', peso: 80 },
    { id: 3, mes: 'Jan', tipo: 'Plástico', peso: 150 },
    { id: 4, mes: 'Fev', tipo: 'Papel', peso: 90 },
    { id: 5, mes: 'Fev', tipo: 'Plástico', peso: 210 },
    { id: 6, mes: 'Fev', tipo: 'Plástico', peso: 95 }
  ];

  const groupedData = [
    { mes: 'Jan', plastico: 270, papel: 80 },
    { mes: 'Fev', plastico: 305, papel: 90 }
  ];

  const triggerGroupby = () => {
    setStage('animating');
    setTimeout(() => {
      setStage('grouped');
      confetti({ particleCount: 60, spread: 50, origin: { y: 0.6 } });
    }, 1500);
  };

  const reset = () => {
    setStage('raw');
  };

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
        <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--color-text-main)' }}>
           O Liquidificador de Dados: GroupBy
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
          O GroupBy esmaga milhares de linhas repetidas (Ex: vários caminhões de plástico no mesmo mês) condensando-os em uma única linha agregada (A Soma Total do Mês).
        </p>
      </div>

      <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px', color: '#38bdf8', fontFamily: '"Fira Code", monospace', fontSize: '0.95rem', marginBottom: '1.5rem', textAlign: 'center' }}>
        df.groupby(["Mes", "Tipo"])["Peso"].sum()
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', minHeight: '300px', position: 'relative' }}>
        
        {/* Raw View */}
        <div style={{
          width: '100%', maxWidth: '400px', 
          opacity: stage === 'raw' ? 1 : 0, 
          transform: stage === 'animating' ? 'scale(0.8) translateY(50px)' : 'scale(1) translateY(0)',
          transition: 'all 1s ease-in-out',
          position: 'absolute'
        }}>
           <div style={{ textAlign: 'center', fontWeight: 'bold', color: '#64748b', marginBottom: '0.5rem' }}>Coletas Individuais Brutas (Muitas linhas)</div>
           {rawData.map((row) => (
             <div key={`raw-${row.id}`} style={{
               display: 'flex', justifyContent: 'space-between', padding: '0.75rem 1rem', 
               backgroundColor: row.mes === 'Jan' ? '#f1f5f9' : '#e2e8f0', 
               borderBottom: '1px solid #cbd5e1', fontSize: '0.9rem'
             }}>
                <span>#{row.id}</span>
                <span style={{ fontWeight: 'bold', color: row.mes === 'Jan' ? '#2563eb' : '#059669' }}>{row.mes}</span>
                <span>{row.tipo}</span>
                <span style={{ color: '#b91c1c', fontWeight: 'bold' }}>{row.peso} kg</span>
             </div>
           ))}
        </div>

        {/* Grouped View */}
        <div style={{
          width: '100%', maxWidth: '500px', 
          opacity: stage === 'grouped' ? 1 : 0, 
          transform: stage === 'animating' ? 'scale(1.2)' : 'scale(1)',
          transition: 'all 1s ease-in-out',
          position: 'absolute', pointerEvents: stage === 'grouped' ? 'auto' : 'none'
        }}>
           <div style={{ textAlign: 'center', fontWeight: 'bold', color: '#0ea5e9', marginBottom: '0.5rem' }}>DataFrame Resumido e Analítico (Agregado)</div>
           
           <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
              <thead style={{ backgroundColor: '#0f172a', color: 'white' }}>
                 <tr>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Mês (Index)</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Soma Plástico</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Soma Papel</th>
                 </tr>
              </thead>
              <tbody>
                 {groupedData.map((row, i) => (
                   <tr key={`grp-${i}`} style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '1rem', fontWeight: 'bold', color: row.mes === 'Jan' ? '#2563eb' : '#059669' }}>{row.mes}</td>
                      <td style={{ padding: '1rem', color: '#b91c1c', fontWeight: 'bold' }}>{row.plastico} kg</td>
                      <td style={{ padding: '1rem', color: '#b91c1c', fontWeight: 'bold' }}>{row.papel} kg</td>
                   </tr>
                 ))}
              </tbody>
           </table>
           
           <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#475569', textAlign: 'center', backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '6px' }}>
              <strong>Visão do Analista:</strong> O Pandas aglomerou os 3 lançamentos de plástico de Janeiro (120+150) em uma única célula master (270). A entropia desaparece!
           </div>
        </div>

      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
         {stage === 'raw' ? (
           <button 
             onClick={triggerGroupby}
             style={{
               display: 'flex', alignItems: 'center', gap: '0.5rem',
               padding: '1rem 2rem',
               backgroundColor: '#6366f1',
               color: 'white',
               border: 'none',
               borderRadius: '6px',
               fontWeight: 'bold',
               cursor: 'pointer',
               boxShadow: '0 4px 6px rgba(99, 102, 241, 0.3)',
               transition: 'transform 0.1s'
             }}
           >
             <ArrowDownToLine size={20} /> Esmagar Dados (Executar .sum)
           </button>
         ) : stage === 'grouped' ? (
           <button 
             onClick={reset}
             style={{
               display: 'flex', alignItems: 'center', gap: '0.5rem',
               padding: '0.75rem 1.5rem',
               backgroundColor: 'var(--color-surface)',
               color: 'var(--color-text-main)',
               border: '1px solid var(--color-border)',
               borderRadius: '6px',
               fontWeight: 'bold',
               cursor: 'pointer'
             }}
           >
             <RefreshCw size={18} /> Ver Dados Brutos Novamente
           </button>
         ) : null}
      </div>

    </div>
  );
};

export default PandasGroupby;
