import React, { useState } from 'react';
import { Activity, MoveRight } from 'lucide-react';
import confetti from 'canvas-confetti';

const TimeTrendPlot = () => {
  const [windowSize, setWindowSize] = useState(1);

  // Generate fake noisy data for 50 days
  const baseData = Array.from({ length: 50 }, (_, i) => {
    const trend = i * 0.5; // Upward trend
    const noise = (Math.random() - 0.5) * 40; // High noise
    const seasonality = Math.sin(i * 0.5) * 20; // Wavy
    return Math.max(0, trend + noise + seasonality + 50);
  });

  // Calculate Moving Average based on slider
  const smoothedData = baseData.map((val, idx, arr) => {
    if (idx < windowSize - 1) return null; // Not enough data
    const slice = arr.slice(idx - windowSize + 1, idx + 1);
    const sum = slice.reduce((a, b) => a + b, 0);
    return sum / windowSize;
  });

  const checkAchievement = (e) => {
    setWindowSize(parseInt(e.target.value));
    if (parseInt(e.target.value) >= 14) {
      if (document.body.getAttribute('data-smoothed') !== 'true') {
         confetti({ particleCount: 30, spread: 80, origin: { y: 0.7 } });
         document.body.setAttribute('data-smoothed', 'true');
      }
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
           Domando o Caos da Série Temporal
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
          Variáveis ambientais (Umidade, Poluição) flutuam descontroladamente de hora em hora. Arraste o Slider para aumentar o parâmetro `rolling(window=X)` do Pandas e revelar a **tendência real**.
        </p>
      </div>

      {/* Tweak Panel */}
      <div style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', color: 'white' }}>
         <div style={{ fontFamily: '"Fira Code", monospace', fontSize: '1.1rem', color: '#38bdf8' }}>
            df['Temperatura'].rolling(window={<span style={{ color: '#fba918', fontWeight: 'bold' }}>{windowSize}</span>}).mean()
         </div>
         
         <div style={{ width: '100%', maxWidth: '400px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Ruído Máximo (1 dia)</span>
            <input 
              type="range" 
              min="1" 
              max="20" 
              value={windowSize} 
              onChange={checkAchievement}
              style={{ flex: 1, accentColor: '#fba918' }}
            />
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Tendência (20 dias)</span>
         </div>
         
         {windowSize > 12 && (
            <div style={{ color: '#a7f3d0', fontSize: '0.9rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <Activity size={16} /> Tendência de Aquecimento Revelada! (Linha Ciana)
            </div>
         )}
      </div>

      {/* SVG Fake Chart */}
      <div style={{ position: 'relative', height: '240px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem' }}>
         
         {/* Y Axis markings */}
         <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', color: '#94a3b8', fontSize: '0.75rem' }}>0 (Dias)</div>
         <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', color: '#94a3b8', fontSize: '0.75rem' }}>50 (Dias)</div>
         <div style={{ position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)', color: '#64748b', fontSize: '0.8rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Timeline <MoveRight size={14} />
         </div>

         <svg width="100%" height="180" viewBox="0 0 500 180" preserveAspectRatio="none" style={{ overflow: 'visible', marginTop: '10px' }}>
             {/* Noisy Base Data (Light Gray) */}
             <polyline 
               points={baseData.map((val, i) => `${i * 10},${180 - val}`).join(' ')} 
               fill="none" 
               stroke="#cbd5e1" 
               strokeWidth="1.5" 
               strokeDasharray="4 2"
             />

             {/* Smoothed Data (Vibrant Cyan) */}
             <polyline 
               points={smoothedData.map((val, i) => val !== null ? `${i * 10},${180 - val}` : '').filter(Boolean).join(' ')} 
               fill="none" 
               stroke="#06b6d4" 
               strokeWidth="3" 
               strokeLinecap="round"
               strokeLinejoin="round"
             />
         </svg>
      </div>

    </div>
  );
};

export default TimeTrendPlot;
