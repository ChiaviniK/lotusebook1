import { useState, useEffect } from 'react';
import { Eraser, ArrowRight } from 'lucide-react';
import styles from './Simulations.module.css';

const ImputationSim = () => {
  const defaultData = [12.5, null, 14.2, 11.8, null, 15.1];
  const [data, setData] = useState(defaultData);
  const [method, setMethod] = useState('');

  const handleImputation = (type) => {
    setMethod(type);
    if (type === 'delete') {
      setData(defaultData.filter(val => val !== null));
    } else if (type === 'mean') {
      const validVals = defaultData.filter(v => v !== null);
      const mean = (validVals.reduce((a, b) => a + b, 0) / validVals.length).toFixed(1);
      setData(defaultData.map(val => val === null ? Number(mean) : val));
    } else {
      setData(defaultData);
    }
  };

  const calculateMean = (arr) => {
    const valid = arr.filter(v => v !== null);
    if (valid.length === 0) return 0;
    return (valid.reduce((a, b) => a + b, 0) / valid.length).toFixed(2);
  };

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <Eraser size={24} color="#e67e22" /> 
          Prática 3.2: O Dilema do "Dado Faltante"
        </h3>
        <p className={styles.simDesc}>
          Temos sensores de temperatura da água. Dois deles falharam (Null). Como você vai lidar com isso para fechar as estatísticas?
        </p>
      </div>

      <div className={styles.simContent}>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {data.map((val, idx) => (
            <div key={idx} style={{ 
              flex: 1, 
              minWidth: '60px',
              padding: '1rem 0', 
              textAlign: 'center',
              backgroundColor: val === null ? '#f8d7da' : 'var(--color-bg)',
              color: val === null ? '#842029' : 'var(--color-primary-dark)',
              border: `2px solid ${val === null ? '#f5c2c7' : 'var(--color-border)'}`,
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '1.25rem'
            }}>
              {val === null ? 'NULL' : `${val}°C`}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <button 
            className={method === 'mean' ? styles.btnPrimary : styles.btnSecondary} 
            onClick={() => handleImputation('mean')}
          >
            Imputar com a Média
          </button>
          <button 
            className={method === 'delete' ? styles.btnPrimary : styles.btnSecondary} 
            onClick={() => handleImputation('delete')}
          >
            Deletar Sensores Falhos
          </button>
          <button 
            className={method === '' ? styles.btnPrimary : styles.btnSecondary} 
            onClick={() => handleImputation('')}
          >
            Resetar (Manter Nulls)
          </button>
        </div>

        <div style={{ backgroundColor: 'var(--color-surface-hover)', padding: '1.5rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--color-text-main)' }}>Média Final Calculada:</h4>
            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
              {method === 'delete' ? 'N=4 sensores' : method === 'mean' ? 'N=6 (2 valores inventados matematicamente)' : 'N=4 sensores válidos'}
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <ArrowRight color="var(--color-text-muted)" />
            <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)' }}>
              {calculateMean(data)}°C
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImputationSim;
