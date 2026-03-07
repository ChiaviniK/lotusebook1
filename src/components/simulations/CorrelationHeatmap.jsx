import React, { useState } from 'react';
import { Network, SearchAlert } from 'lucide-react';
import confetti from 'canvas-confetti';

const CorrelationHeatmap = () => {
  const [activeCell, setActiveCell] = useState(null);

  // Correlation Matrix Data (-1 to 1)
  const vars = ['Desmatamento', 'Temperatura', 'Chuva', 'Fiscalização'];
  const matrix = [
    [1.0, 0.85, -0.65, -0.92], // Desmatamento vs Todos
    [0.85, 1.0, -0.45, -0.70], // Temperatura vs Todos
    [-0.65, -0.45, 1.0, 0.30], // Chuva vs Todos
    [-0.92, -0.70, 0.30, 1.0]  // Fiscalização vs Todos
  ];

  const getColor = (val) => {
    // Red for strong positive (+), Blue for strong negative (-)
    if (val === 1) return '#f8fafc'; // Neutral diagonal
    if (val > 0.7) return '#ef4444'; // Dark Red
    if (val > 0.4) return '#fca5a5'; // Light Red
    if (val > -0.4 && val <= 0.4) return '#f1f5f9'; // Gray/Neutral
    if (val > -0.8) return '#93c5fd'; // Light Blue
    return '#3b82f6'; // Dark Blue
  };

  const handleCellClick = (r, c, val) => {
    if (r === c) return;
    setActiveCell({ r, c, val });
    
    // Focus on the biggest problem (Desmatamento vs Temp)
    if ((r === 0 && c === 1) || (r === 1 && c === 0)) {
        confetti({ particleCount: 40, spread: 30, origin: { y: 0.6 } });
    }
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
           Mapa de Calor de Correlação (sns.heatmap)
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
          O Seaborn coloriza correlações matemáticas. Vermelho (Crescem Juntas) e Azul (Gangorra Inversa). Clique nos quadrados coloridos para investigar as causas ambientais.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '2rem', alignItems: 'start' }}>
        
        {/* Heatmap Grid */}
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '100px repeat(4, 1fr)', gap: '2px', backgroundColor: '#e2e8f0', border: '2px solid #cbd5e1', padding: '2px' }}>
            {/* Top Headers */}
            <div style={{ backgroundColor: 'white' }}></div>
            {vars.map(v => <div key={`th-${v}`} style={{ backgroundColor: '#f8fafc', padding: '0.5rem', fontSize: '0.65rem', fontWeight: 'bold', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{v}</div>)}
            
            {/* Rows */}
            {matrix.map((row, rIndex) => (
              <React.Fragment key={`r-${rIndex}`}>
                <div style={{ backgroundColor: '#f8fafc', padding: '0.5rem', fontSize: '0.7rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '1rem' }}>{vars[rIndex]}</div>
                {row.map((val, cIndex) => (
                  <div 
                    key={`c-${rIndex}-${cIndex}`}
                    onClick={() => handleCellClick(rIndex, cIndex, val)}
                    style={{ 
                      backgroundColor: getColor(val), 
                      height: '60px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: val === 1 ? '#cbd5e1' : (Math.abs(val) > 0.6 ? 'white' : '#334155'),
                      fontWeight: 'bold',
                      fontSize: '0.9rem',
                      cursor: rIndex === cIndex ? 'default' : 'pointer',
                      border: activeCell?.r === rIndex && activeCell?.c === cIndex ? '3px solid #0f172a' : 'none',
                      transition: 'transform 0.1s'
                    }}
                    onMouseOver={(e) => { if(rIndex !== cIndex) e.target.style.transform = 'scale(0.95)' }}
                    onMouseOut={(e) => { e.target.style.transform = 'scale(1)' }}
                  >
                    {val.toFixed(2)}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.75rem', color: '#64748b', padding: '0 4rem' }}>
             <span style={{color: '#3b82f6', fontWeight:'bold'}}>-1 (Inverso)</span>
             <span style={{color: '#ef4444', fontWeight:'bold'}}>+1 (Reto)</span>
          </div>
        </div>

        {/* Insight Panel */}
        <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.5rem', minHeight: '260px', display: 'flex', flexDirection: 'column' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1e293b', fontWeight: 'bold', marginBottom: '1rem', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.5rem' }}>
              <SearchAlert size={20} /> Inspeção do Algoritmo
           </div>
           
           {activeCell ? (
             <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                <div style={{ fontSize: '1.2rem', color: '#334155' }}>
                   <strong>{vars[activeCell.r]}</strong> ✖️ <strong>{vars[activeCell.c]}</strong>
                </div>
                
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: getColor(activeCell.val) }}>
                   {activeCell.val.toFixed(2)}
                </div>
                
                <div style={{ fontSize: '0.9rem', color: '#475569', backgroundColor: 'white', padding: '1rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                   {activeCell.val > 0.7 && "Forte Correlação POSITIVA: Quando um sobe, o outro sobe violentamente junto. Um é provavelmente o causador do outro."}
                   {activeCell.val < -0.7 && "Forte Correlação NEGATIVA: Estão numa gangorra. O aumento maciço de um representa a supressão sistemática do outro (Ex: Fiscalização vs Desmatamento)."}
                   {(activeCell.val > -0.7 && activeCell.val <= 0.7) && "Correlação Fraca ou Inexistente: O aumento de um não altera o outro estatisticamente de forma perfeita."}
                </div>
             </div>
           ) : (
             <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', textAlign: 'center', gap: '1rem' }}>
                <Network size={48} opacity={0.3} />
                <span>Clique em qualquer quadrado colorido forte (Vermelho ou Azul) do quadro ao lado para ler o contexto.</span>
             </div>
           )}
        </div>

      </div>
    </div>
  );
};

export default CorrelationHeatmap;
