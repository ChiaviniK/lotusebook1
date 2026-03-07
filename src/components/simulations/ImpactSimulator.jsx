import { useState, useEffect } from 'react';
import { Activity, Droplets, Wind, Leaf } from 'lucide-react';
import styles from './Simulations.module.css';

const ImpactSimulator = () => {
  const [production, setProduction] = useState(50);
  const [efficiency, setEfficiency] = useState(20);
  
  // Calculated metrics
  const carbonTokens = Math.max(0, 100 - (production * 1.5) + (efficiency * 2));
  const waterSaved = Math.max(0, (efficiency * 50) - (production * 5));
  const penaltyRisk = production > 75 && efficiency < 40 ? 'ALTO' : 'BAIXO';

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <Activity size={24} color="var(--color-primary)" /> 
          Prática 1.1: Simulador de Impacto e ESG
        </h3>
        <p className={styles.simDesc}>
          Ajuste o volume de produção e o investimento em eficiência para ver como os indicadores de sustentabilidade da empresa fictícia reagem.
        </p>
      </div>

      <div className={styles.simContent}>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <div style={{ flex: 1, minWidth: '250px' }}>
            <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 500 }}>
              Volume de Produção (Escala 1-100) <span>{production}</span>
            </label>
            <input 
              type="range" 
              min="1" max="100" 
              value={production} 
              onChange={(e) => setProduction(Number(e.target.value))}
              style={{ width: '100%', cursor: 'pointer', accentColor: '#ff5c5c' }}
            />
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>Aumenta o lucro bruto, mas gera mais resíduos.</p>
          </div>

          <div style={{ flex: 1, minWidth: '250px' }}>
            <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 500 }}>
              Filtros e Eficiência (Escala 1-100) <span>{efficiency}</span>
            </label>
            <input 
              type="range" 
              min="1" max="100" 
              value={efficiency} 
              onChange={(e) => setEfficiency(Number(e.target.value))}
              style={{ width: '100%', cursor: 'pointer', accentColor: 'var(--color-secondary)' }}
            />
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>Custa caro no curto prazo, mas reduz impostos ambientais.</p>
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
          gap: '1rem',
          backgroundColor: 'var(--color-bg)',
          padding: '1.5rem',
          borderRadius: '8px',
          border: '1px solid var(--color-border)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <Wind color="#7f8c8d" size={32} style={{ margin: '0 auto 0.5rem' }} />
            <h4 style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', margin: 0 }}>Créditos de Carbono</h4>
            <span style={{ fontSize: '1.5rem', fontWeight: 700, color: carbonTokens > 50 ? 'var(--color-secondary)' : '#e74c3c' }}>
              {Math.round(carbonTokens)} pts
            </span>
          </div>

          <div style={{ textAlign: 'center', borderLeft: '1px solid var(--color-border)', borderRight: '1px solid var(--color-border)' }}>
            <Droplets color="#3498db" size={32} style={{ margin: '0 auto 0.5rem' }} />
            <h4 style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', margin: 0 }}>Água Poupada</h4>
            <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#3498db' }}>
              {Math.round(waterSaved)} m³
            </span>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Leaf color={penaltyRisk === 'BAIXO' ? 'var(--color-primary)' : '#e74c3c'} size={32} style={{ margin: '0 auto 0.5rem' }} />
            <h4 style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', margin: 0 }}>Risco de Multa (ESG)</h4>
            <span style={{ fontSize: '1.25rem', fontWeight: 700, color: penaltyRisk === 'BAIXO' ? 'var(--color-primary)' : '#e74c3c' }}>
              {penaltyRisk}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSimulator;
