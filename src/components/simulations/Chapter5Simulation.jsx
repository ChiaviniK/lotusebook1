import { useState } from 'react';
import { BarChart3 } from 'lucide-react';
import styles from './Simulations.module.css';

const Chapter5Simulation = () => {
  const [showAnomaly, setShowAnomaly] = useState(false);

  const defaultData = [12, 14, 13, 15, 14, 12, 13, 15, 14];
  const anomalyData = [12, 14, 13, 15, 14, 38, 14, 15, 13];

  const currentData = showAnomaly ? anomalyData : defaultData;
  const maxVal = 40;

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <BarChart3 size={24} color="var(--color-primary)" /> 
          Prática: Detectando uma Anomalia
        </h3>
        <p className={styles.simDesc}>
          Analise a série temporal de chuvas (mm) para uma cidade. O que acontece quando há um evento climático extremo?
        </p>
      </div>

      <div className={styles.simContent}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '200px', padding: '1rem 0', borderBottom: '2px solid var(--color-border)', marginBottom: '1rem' }}>
          {currentData.map((val, idx) => (
            <div key={idx} style={{ 
              flex: 1, 
              backgroundColor: showAnomaly && val > 30 ? '#e74c3c' : 'var(--color-primary)', 
              height: `${(val / maxVal) * 100}%`,
              borderRadius: '4px 4px 0 0',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              paddingTop: '4px',
              color: 'white',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              transition: 'all var(--transition-normal)'
            }}>
              {val > 20 ? `${val}!` : ''}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <button 
            className={!showAnomaly ? styles.btnPrimary : styles.btnSecondary} 
            onClick={() => setShowAnomaly(false)}
          >
            Padrão Normal
          </button>
          <button 
            className={showAnomaly ? styles.btnPrimary : styles.btnSecondary} 
            onClick={() => setShowAnomaly(true)}
          >
            Injetar Extremo Climático
          </button>
        </div>

        {showAnomaly && (
          <div style={{ backgroundColor: '#fcf0ed', color: '#d9381e', padding: '1rem', borderRadius: '4px', fontSize: '0.875rem' }}>
            <strong>Anomalia Detectada!</strong> A coluna vermelha (38mm) foge da média histórica (12-15mm) em mais de 3 desvios padrões. Em estatística ambiental, chamamos isso de "Outlier".
          </div>
        )}
      </div>
    </div>
  );
};

export default Chapter5Simulation;
