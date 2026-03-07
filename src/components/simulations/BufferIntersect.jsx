import React, { useState } from 'react';
import { ScanFace, LocateIcon } from 'lucide-react';
import confetti from 'canvas-confetti';

const BufferIntersect = () => {
  const [bufferRadius, setBufferRadius] = useState(10);
  const [hasIntersected, setHasIntersected] = useState(false);

  const riverX = 150;
  const targetX = 240; // Factory location X

  const handleBufferChange = (e) => {
    const radius = parseInt(e.target.value);
    setBufferRadius(radius);
    
    // Check collision (River X + Radius >= Factory X)
    if (riverX + radius >= targetX && !hasIntersected) {
       setHasIntersected(true);
       confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    } else if (riverX + radius < targetX) {
       setHasIntersected(false);
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
           Colisões Geométricas (Buffer & Intersect)
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
          O Geopandas pode expandir geometrias (`.buffer(metros)`) e verificar se elas encostam em outros alvos (`.intersects()`). Expanda o raio da Zona do Rio para verificar se a fábrica clandestina está dentro de uma APP ilegal.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 300px', gap: '2rem', alignItems: 'center' }}>
        
        {/* SVG Intersect Map */}
        <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '1rem', position: 'relative', height: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           
           <svg width="100%" height="100%" viewBox="0 0 400 200" style={{ overflow: 'visible' }}>
              {/* Target (Factory) */}
              <rect x={targetX - 10} y="85" width="20" height="20" fill="#64748b" />
              <circle cx={targetX} cy="95" r="4" fill="#ef4444" />
              <text x={targetX} y="120" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155">Fábrica (Target)</text>

              {/* Buffer Zone (Transparent Circle representing expansion from the river line) */}
              <circle cx={riverX} cy="95" r={bufferRadius} fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 2" />
              
              {/* River Line / Origin */}
              <line x1={riverX} y1="20" x2={riverX} y2="180" stroke="#0ea5e9" strokeWidth="6" strokeLinecap="round" />
              <text x={riverX - 20} y="195" textAnchor="middle" fontSize="10" fill="#0284c7">Rio X</text>
           </svg>

           {/* Feedback Modal absolute */}
           {hasIntersected && (
             <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#fee2e2', border: '2px solid #ef4444', padding: '0.5rem 1rem', borderRadius: '20px', color: '#b91c1c', fontWeight: 'bold', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ScanFace size={16} /> Intersecção Detectada (APP Invadida)!
             </div>
           )}
        </div>

        {/* Controller Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
           <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px', color: '#e2e8f0' }}>
             <div style={{ fontFamily: '"Fira Code", monospace', fontSize: '0.85rem', marginBottom: '1rem', color: '#8b5cf6' }}>
               area_app = rio.buffer(<span style={{ color: '#fbbf24' }}>{bufferRadius * 10}</span>) <br/>
               area_app.intersects(fabrica)
             </div>
           </div>

           <div>
              <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 'bold', color: '#475569', marginBottom: '0.5rem' }}>
                 <span>0m</span>
                 <span>Raio de Expansão (Buffer)</span>
                 <span>1200m</span>
              </label>
              <input 
                type="range" 
                min="10" 
                max="120" 
                value={bufferRadius} 
                onChange={handleBufferChange}
                style={{ width: '100%', accentColor: hasIntersected ? '#ef4444' : '#3b82f6' }}
              />
           </div>

           <div style={{ border: '1px solid #e2e8f0', padding: '1rem', borderRadius: '6px', backgroundColor: hasIntersected ? '#fef2f2' : '#f8fafc', transition: 'background-color 0.3s' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Status Lógico (.intersects)</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: hasIntersected ? '#b91c1c' : '#334155', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <LocateIcon size={20} color={hasIntersected ? '#b91c1c' : '#94a3b8'} />
                {hasIntersected ? 'TRUE (Ilegal)' : 'FALSE (Seguro)'}
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default BufferIntersect;
