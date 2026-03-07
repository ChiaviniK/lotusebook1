import { useState } from 'react';
import { Network, Plus } from 'lucide-react';
import styles from './Simulations.module.css';

const ScatterCorrelation = () => {
  // Inicializamos com algums pontos ruidosos
  const [points, setPoints] = useState([
    { x: 10, y: 15 }, { x: 20, y: 35 }, { x: 30, y: 25 }, 
    { x: 40, y: 55 }, { x: 50, y: 45 }, { x: 60, y: 65 }
  ]);

  const addPoint = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;
    
    // Convert to percentage (0 - 100)
    const xPct = Math.round((xPos / rect.width) * 100);
    const yPct = Math.round(100 - (yPos / rect.height) * 100); // Invert Y
    
    setPoints([...points, { x: Math.max(0, Math.min(100, xPct)), y: Math.max(0, Math.min(100, yPct)) }]);
  };

  const resetPoints = () => {
    setPoints([]);
  };

  // Pearson Correlation Coefficient calculation
  const calculateCorrelation = () => {
    if (points.length < 2) return { r: 0, slope: 0, intercept: 50 };

    const n = points.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0;

    points.forEach(p => {
      sumX += p.x;
      sumY += p.y;
      sumXY += p.x * p.y;
      sumX2 += p.x * p.x;
      sumY2 += p.y * p.y;
    });

    const numerator = (n * sumXY) - (sumX * sumY);
    const denominator = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));
    
    const r = denominator === 0 ? 0 : numerator / denominator;
    
    // Linear regression line: y = mx + b
    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    return { r, slope, intercept };
  };

  const stats = calculateCorrelation();
  
  // Calculate line endpoints logic
  const y1 = stats.slope * 0 + stats.intercept;
  const y2 = stats.slope * 100 + stats.intercept;

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <Network size={24} color="#8e44ad" /> 
          Prática 5.2: Gerador de Correlação Linear
        </h3>
        <p className={styles.simDesc}>
          Clique na área do gráfico para adicionar medições (ex: Eixo X = Fertilizante, Eixo Y = Produtividade). 
          A linha vermelha é o modelo matemático tentando achar a tendência (R²).
        </p>
      </div>

      <div className={styles.simContent}>
        
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          
          <div style={{ flex: '1', minWidth: '300px' }}>
            <div 
              onClick={addPoint}
              style={{ 
                width: '100%', 
                height: '300px', 
                backgroundColor: 'var(--color-bg)', 
                border: '1px solid var(--color-border)', 
                position: 'relative',
                cursor: 'crosshair',
                overflow: 'hidden',
                borderRadius: '8px'
              }}
            >
              {/* Grid Lines */}
              {[20, 40, 60, 80].map(val => (
                <div key={`h-${val}`} style={{ position: 'absolute', left: 0, right: 0, bottom: `${val}%`, height: '1px', backgroundColor: 'var(--color-border)', opacity: 0.5 }} />
              ))}
              {[20, 40, 60, 80].map(val => (
                <div key={`v-${val}`} style={{ position: 'absolute', top: 0, bottom: 0, left: `${val}%`, width: '1px', backgroundColor: 'var(--color-border)', opacity: 0.5 }} />
              ))}
              
              <div style={{ position: 'absolute', bottom: '8px', right: '12px', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Eixo X (Causa) &rarr;</div>
              <div style={{ position: 'absolute', top: '12px', left: '12px', fontSize: '0.75rem', color: 'var(--color-text-muted)', transform: 'rotate(-90deg)', transformOrigin: 'top left' }}>Eixo Y (Efeito) &rarr;</div>

              {/* Data Points */}
              {points.map((p, i) => (
                <div 
                  key={i} 
                  style={{
                    position: 'absolute',
                    left: `${p.x}%`,
                    bottom: `${p.y}%`,
                    width: '12px',
                    height: '12px',
                    backgroundColor: 'var(--color-primary)',
                    borderRadius: '50%',
                    transform: 'translate(-50%, 50%)',
                    boxShadow: '0 0 0 2px rgba(255,255,255,0.8)'
                  }}
                />
              ))}

              {/* Regression Line */}
              {points.length > 1 && (
                <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                  <line 
                    x1="0%" 
                    y1={`${100 - y1}%`} 
                    x2="100%" 
                    y2={`${100 - y2}%`} 
                    stroke="var(--color-secondary)" 
                    strokeWidth="3" 
                    strokeDasharray="5,5"
                  />
                </svg>
              )}
            </div>

            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
              <button className={styles.btnSecondary} onClick={resetPoints} style={{ fontSize: '0.75rem', padding: '0.5rem 1rem' }}>
                Limpar Gráfico
              </button>
            </div>
          </div>

          <div style={{ width: '250px', backgroundColor: '#f9fbf9', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
            <h4 style={{ margin: '0 0 1rem 0', color: 'var(--color-text-main)' }}>Métricas do Modelo</h4>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Amostras(N):</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{points.length}</div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Correlação (r):</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: Math.abs(stats.r) > 0.7 ? 'var(--color-secondary)' : 'var(--color-text-main)' }}>
                {stats.r.toFixed(2)}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                {Math.abs(stats.r) > 0.7 ? 'Forte correlação! Quase uma reta.' : 'Fraca correlação. Muito ruído.'}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Coef. de Determinação (R²):</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                {Math.pow(stats.r, 2).toFixed(2)}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                {Math.round(Math.pow(stats.r, 2) * 100)}% da variável Y é explicada pela variável X.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ScatterCorrelation;
