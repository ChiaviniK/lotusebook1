import React, { useState } from 'react';
import { Terminal, Map as MapIcon, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const SpatialPlot = () => {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const executePlot = () => {
    if (!code.includes('.plot()')) {
       setStatus('error');
       return;
    }

    setStatus('loading');
    setTimeout(() => {
       setStatus('success');
       confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }, 1500);
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
           A Magia da Plotagem Geoespacial
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
          O arquivo Shapefile `br_biomas.shp` foi carregado na variável `mapa_base`. Digite o comando <code style={{ backgroundColor: '#e2e8f0', padding: '2px 4px', borderRadius: '4px' }}>mapa_base.plot()</code> para renderizar as malhas geográficas.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '1.5rem' }}>
        
        {/* Fake Terminal */}
        <div style={{ backgroundColor: '#0f172a', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
           <div style={{ backgroundColor: '#1e293b', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.8rem' }}>
              <Terminal size={14} /> Terminal Python Interativo
           </div>
           <div style={{ padding: '1.5rem', flex: 1, fontFamily: '"Fira Code", monospace', fontSize: '0.9rem', color: '#a7f3d0' }}>
              <div style={{ color: '#64748b', marginBottom: '1rem' }}>
                 # Ambiente Geopandas Iniciado<br/>
                 # Lendo arquivo C://shapefiles/brasil_2024.shp...<br/>
                 <span style={{ color: '#10b981' }}>[OK] CRS EPSG:4326 Ativo.</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                 <span style={{ color: '#38bdf8' }}>In [1]:</span>
                 <input 
                   type="text" 
                   value={code} 
                   onChange={(e) => setCode(e.target.value)}
                   onKeyDown={(e) => e.key === 'Enter' && executePlot()}
                   placeholder="mapa_base..." 
                   style={{ backgroundColor: 'transparent', border: 'none', color: '#f8fafc', outline: 'none', flex: 1, fontFamily: 'inherit', fontSize: 'inherit' }}
                 />
              </div>

              {status === 'error' && (
                 <div style={{ color: '#ef4444', marginTop: '1rem' }}>
                    AttributeError: Você esqueceu do método matemático que desenha (plot).
                 </div>
              )}
           </div>

           <button 
             onClick={executePlot}
             disabled={status === 'loading'}
             style={{ backgroundColor: '#3b82f6', color: 'white', border: 'none', padding: '0.75rem', fontWeight: 'bold', cursor: status === 'loading' ? 'wait' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
           >
             {status === 'loading' ? <><Loader2 size={16} className="lucide-spin" /> Renderizando Polígonos...</> : 'Executar >'}
           </button>
        </div>

        {/* Map Rendering Area */}
        <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', position: 'relative', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           
           {status === 'idle' && (
              <div style={{ color: '#94a3b8', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                 <MapIcon size={32} opacity={0.5} />
                 <span>Aguardando comando de plotagem...</span>
              </div>
           )}

           {status === 'success' && (
              <div style={{ position: 'relative', width: '100%', height: '100%', padding: '1rem' }}>
                 <svg viewBox="0 0 200 200" width="100%" height="100%" style={{ filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.1))' }}>
                    {/* Mocked Brazil Shape (Simplified) */}
                    <path d="M 60 20 L 100 10 L 140 30 L 180 60 L 190 100 L 160 160 L 100 190 L 50 160 L 20 100 Z" fill="#22c55e" stroke="#166534" strokeWidth="2" />
                    <path d="M 60 20 L 100 10 L 140 30 L 120 70 L 80 80 Z" fill="#10b981" /> {/* Amazonia block */}
                    <path d="M 100 190 L 160 160 L 130 110 L 90 140 Z" fill="#84cc16" /> {/* Sul block */}
                 </svg>
                 <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', backgroundColor: 'white', padding: '0.3rem 0.6rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.7rem', color: '#475569', fontWeight: 'bold' }}>
                    Matplotlib GeoAxes Subplot
                 </div>
              </div>
           )}

        </div>

      </div>
    </div>
  );
};

export default SpatialPlot;
