import React, { useState, useEffect } from 'react';
import { Plane, Maximize, AlertCircle } from 'lucide-react';

const DroneForestScanner = () => {
  const [scanActive, setScanActive] = useState(false);
  const [detections, setDetections] = useState([]);

  useEffect(() => {
     let interval;
     if (scanActive) {
         interval = setInterval(() => {
             // Randomly detect an event every X seconds, max 4 events.
             if (Math.random() > 0.4 && detections.length < 4) {
                 const issues = [
                     { x: Math.random()*80 + 10, y: Math.random()*80 + 10, type: 'Deforest', label: 'Corte Raso', color: '#ef4444' },
                     { x: Math.random()*80 + 10, y: Math.random()*80 + 10, type: 'Fire', label: 'Foco de Calor Irregular', color: '#f97316' },
                     { x: Math.random()*80 + 10, y: Math.random()*80 + 10, type: 'Pest', label: 'Stress Hídrico/Praga', color: '#eab308' }
                 ];
                 const newEvent = issues[Math.floor(Math.random() * issues.length)];
                 setDetections(prev => [...prev, newEvent]);
             }
         }, 1500);
     }
     return () => clearInterval(interval);
  }, [scanActive, detections]);

  return (
    <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: '12px', border: '1px solid var(--color-border)', margin: '2rem 0' }}>
      <h3 style={{ margin: '0 0 1rem 0', color: 'var(--color-text-main)', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Plane size={20} color="#3b82f6" />
        Vigilância Digital MRV (Edge AI)
      </h3>
      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
        Atuando na linha de frente florestal, VANTs voam autonomamente identificando stress na vegetação e invasões semanas antes que os fiscais a pé percebam, utilizando Redes Neurais localmente na câmera.
      </p>

      <div style={{ position: 'relative', width: '100%', height: '300px', backgroundColor: '#0f172a', borderRadius: '8px', overflow: 'hidden', border: '2px solid #334155' }}>
          {/* Background Map layer */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.6, backgroundImage: 'radial-gradient(#166534 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          {/* Scanning Animation */}
          {scanActive && (
              <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  width: '100%',
                  background: 'linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.4))',
                  animation: 'scanLine 3s linear infinite',
                  pointerEvents: 'none',
              }}>
                  <style>{`
                      @keyframes scanLine {
                          0% { transform: translateY(-100%); }
                          100% { transform: translateY(100%); }
                      }
                  `}</style>
              </div>
          )}

          {/* Detections Overlay */}
          {detections.map((det, i) => (
              <div key={i} style={{ position: 'absolute', left: `${det.x}%`, top: `${det.y}%`, transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
                  <div style={{
                      width: '24px', height: '24px', 
                      backgroundColor: det.color, 
                      borderRadius: '50%', border: '2px solid white',
                      display: 'flex', justifyContent: 'center', alignItems: 'center',
                      boxShadow: `0 0 15px ${det.color}`,
                      animation: 'pulseFast 1s infinite'
                  }}>
                      <AlertCircle size={14} color="white" />
                  </div>
                  <span style={{ backgroundColor: 'rgba(0,0,0,0.8)', color: 'white', fontSize: '0.65rem', padding: '0.2rem 0.5rem', borderRadius: '4px', whiteSpace: 'nowrap' }}>
                      {det.label}
                  </span>
              </div>
          ))}

          <style>{`
            @keyframes pulseFast {
                0% { transform: scale(0.9); opacity: 1; }
                50% { transform: scale(1.1); opacity: 0.8; }
                100% { transform: scale(0.9); opacity: 1; }
            }
          `}</style>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' }}>
          <button 
             onClick={() => { setScanActive(!scanActive); if(!scanActive) setDetections([]); }}
             style={{ padding: '0.75rem 1.5rem', backgroundColor: scanActive ? '#ef4444' : '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', gap: '0.5rem', alignItems: 'center' }}
          >
              <Maximize size={16} /> {scanActive ? 'Abortar Patrulha' : 'Lançar Drone AI'}
          </button>
          
          <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem' }}>
              <div style={{ color: 'var(--color-text-main)' }}><strong>{detections.length}</strong> Ameaças</div>
              <div style={{ color: '#10b981' }}>Latência Web3: 45ms</div>
          </div>
      </div>
    </div>
  );
};

export default DroneForestScanner;
