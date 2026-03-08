import React, { useRef, useState, useEffect } from 'react';
import { Target, ScanLine } from 'lucide-react';

const LidarPointScanner = () => {
  const canvasRef = useRef(null);
  const [scannedArea, setScannedArea] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [biomassData, setBiomassData] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Draw raw forest map (Top-down green blobs)
    ctx.fillStyle = '#064e3b'; // very dark green background representing ground
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw some tree canopies
    for (let i = 0; i < 40; i++) {
        ctx.beginPath();
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = 10 + Math.random() * 25; // different tree sizes
        
        // gradient for canopy
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, '#22c55e'); // bright green top
        gradient.addColorStop(1, '#14532d'); // dark green edge
        
        ctx.fillStyle = gradient;
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
        
        // save tree positions for fake interaction
        biomassData.push({ x, y, r: radius, scanned: false });
    }
    setBiomassData(biomassData);
  }, []);

  const handleMouseMove = (e) => {
    if (!isScanning) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const ctx = canvas.getContext('2d');
    
    // Simulate LiDAR Laser pulse
    ctx.beginPath();
    ctx.fillStyle = 'rgba(239, 68, 68, 0.4)'; // Red scanner laser
    ctx.arc(mouseX, mouseY, 30, 0, Math.PI * 2);
    ctx.fill();

    // Check overlaps
    let newScanCount = scannedArea;
    const newData = biomassData.map(tree => {
        if (!tree.scanned) {
            const dist = Math.sqrt(Math.pow(mouseX - tree.x, 2) + Math.pow(mouseY - tree.y, 2));
            if (dist < 30 + tree.r) { // Overlap! Tree scanned!
                
                // Draw 3D point cloud dots over the tree!
                ctx.fillStyle = '#67e8f9'; // cyan lidar points
                for(let p=0; p<15; p++) {
                    ctx.fillRect(tree.x + (Math.random()*tree.r*2 - tree.r), tree.y + (Math.random()*tree.r*2 - tree.r), 2, 2);
                }

                newScanCount += Math.round(tree.r);
                return { ...tree, scanned: true };
            }
        }
        return tree;
    });

    setBiomassData(newData);
    setScannedArea(newScanCount);
  };

  const progress = Math.min(100, Math.round((scannedArea / 600) * 100));

  return (
    <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: '12px', border: '1px solid var(--color-border)', margin: '2rem 0' }}>
      <h3 style={{ margin: '0 0 1rem 0', color: 'var(--color-text-main)', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Target size={20} color="#0ea5e9" />
        Simulador LiDAR: Inventário Florestal Remoto
      </h3>
      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
        O sobrevoo de drones e satélites LiDAR dispara feixes de luz que penetram as folhas e estimam o volume exato da madeira 3D. <br/>
        <strong>Ação:</strong> Clique, segure e arraste o mouse sobre o mapa para atirar o laser LiDAR e capturar a Nuvem de Pontos e Biomassa Seca!
      </p>

      <div style={{ position: 'relative', width: '100%', height: '300px', cursor: 'crosshair', borderRadius: '8px', overflow: 'hidden', border: '2px solid #334155' }}>
        <canvas 
            ref={canvasRef}
            width={700}
            height={300}
            style={{ width: '100%', height: '100%', display: 'block' }}
            onMouseDown={() => setIsScanning(true)}
            onMouseUp={() => setIsScanning(false)}
            onMouseLeave={() => setIsScanning(false)}
            onMouseMove={handleMouseMove}
        />
        {!isScanning && scannedArea === 0 && (
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(0,0,0,0.7)', padding: '0.5rem 1rem', borderRadius: '99px', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', pointerEvents: 'none' }}>
                <ScanLine size={16} /> Arraste o Mouse Aqui
            </div>
        )}
      </div>

      <div style={{ marginTop: '1.5rem', backgroundColor: 'var(--color-bg)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold' }}>
            <span style={{ color: 'var(--color-text-main)' }}>Varredura de Inventário M³</span>
            <span style={{ color: '#0ea5e9' }}>{progress}% Escaneado</span>
        </div>
        <div style={{ width: '100%', height: '12px', backgroundColor: '#e2e8f0', borderRadius: '99px', overflow: 'hidden' }}>
            <div style={{ width: `${progress}%`, height: '100%', backgroundColor: '#0ea5e9', transition: 'width 0.2s' }}></div>
        </div>
        
        {progress >= 100 && (
            <div style={{ marginTop: '1rem', color: '#16a34a', fontSize: '0.85rem', fontWeight: 'bold', textAlign: 'center' }}>
                Mapeamento Concluído! O processamento fotogramétrico em nuvem atesta: 450 Toneladas Biométricas por Hectare. Relatório Pronto para o VVB!
            </div>
        )}
      </div>
    </div>
  );
};

export default LidarPointScanner;
