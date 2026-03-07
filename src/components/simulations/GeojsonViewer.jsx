import React, { useState } from 'react';
import { Map, Code, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';

const GeojsonViewer = () => {
  const [view, setView] = useState('code');
  const [isProcessing, setIsProcessing] = useState(false);

  const triggerPlot = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setView('map');
      setIsProcessing(false);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#2ea14f']
      });
    }, 800);
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
           A Magia do GeoJSON (.plot)
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
          Arquivos de mapa (Geometrias) são apenas listas infinitas de coordenadas de GPS. Mande o `geopandas` interpretar esse texto puro para materializar a fazenda embargada.
        </p>
      </div>

      <div style={{
        backgroundColor: '#1e293b',
        borderRadius: '8px',
        border: '1px solid #0f172a',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {/* Fake Window Header */}
        <div style={{ backgroundColor: '#0f172a', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', color: '#94a3b8', fontSize: '0.8rem', gap: '0.5rem' }}>
           <Code size={14} /> <span>fazenda_alvo.geojson</span>
        </div>

        {/* Content Area */}
        <div style={{ padding: '1.5rem', minHeight: '300px', display: 'flex', flexDirection: 'column' }}>
          {view === 'code' ? (
            <pre style={{ margin: 0, color: '#a7f3d0', fontSize: '0.9rem', lineHeight: '1.5', whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
{jsonCode}
            </pre>
          ) : (
            <div style={{ flex: 1, backgroundColor: '#f0fdf4', borderRadius: '6px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               {/* Map Fake Mockup */}
               <div style={{ width: '100%', height: '100%', position: 'absolute', opacity: 0.2, backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M 20 0 L 0 0 0 20\' fill=\'none\' stroke=\'%2315803d\' stroke-width=\'1\'/%3E%3C/svg%3E")' }}></div>
               
               {/* Central Polygon (The Farm) */}
               <svg width="200" height="200" viewBox="0 0 100 100" style={{ zIndex: 1, filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.2))' }}>
                  <polygon points="20,10 80,20 90,70 50,90 10,60" fill="rgba(239, 68, 68, 0.4)" stroke="#ef4444" strokeWidth="2" />
                  
                  {/* Satelite Pin */}
                  <circle cx="50" cy="50" r="3" fill="#b91c1c" />
               </svg>
               
               <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', backgroundColor: '#fef2f2', border: '1px solid #fca5a5', color: '#b91c1c', padding: '0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  Área Desmatada (Geometria Lida)
               </div>
            </div>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
        {view === 'code' ? (
          <button 
            onClick={triggerPlot}
            disabled={isProcessing}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.75rem 2rem',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: isProcessing ? 'wait' : 'pointer',
              transition: 'all 0.2s',
              boxShadow: '0 4px 6px rgba(16, 185, 129, 0.3)'
            }}
          >
            {isProcessing ? 'Lendo Coordenadas...' : 'Executar gpd.plot()'}
          </button>
        ) : (
          <button 
            onClick={() => setView('code')}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.75rem 2rem',
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-text-main)',
              border: '1px solid var(--color-border)',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <Layers size={18} />
            Voltar para Visão Textual
          </button>
        )}
      </div>

    </div>
  );
};

const jsonCode = `{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "id": "FAZ-992",
        "status": "EMBARGADA",
        "bioma": "AMAZONIA"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-54.12, -10.45],
            [-54.08, -10.42],
            [-54.05, -10.48],
            [-54.09, -10.51],
            [-54.12, -10.45]
          ]
        ]
      }
    }
  ]
}`;

export default GeojsonViewer;
