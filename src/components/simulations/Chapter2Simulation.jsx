import { useState } from 'react';
import { Map, Eye } from 'lucide-react';
import styles from './Simulations.module.css';

const Chapter2Simulation = () => {
  const [view, setView] = useState('real'); // 'real' or 'ndvi'

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <Map size={24} color="var(--color-primary)" /> 
          Prática: O "Óculos" do Analista Ambiental
        </h3>
        <p className={styles.simDesc}>
          Alterne entre a visão a olho nu (fotografia real) e o índice NDVI (satélite) para um pedaço de floresta.
        </p>
      </div>

      <div className={styles.simContent}>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', justifyContent: 'center' }}>
          <button 
            className={view === 'real' ? styles.btnPrimary : styles.btnSecondary}
            onClick={() => setView('real')}
          >
            Visão Real (RGB)
          </button>
          <button 
            className={view === 'ndvi' ? styles.btnPrimary : styles.btnSecondary}
            onClick={() => setView('ndvi')}
          >
            Visão NDVI (Infravermelho)
          </button>
        </div>

        <div style={{ 
          position: 'relative', 
          width: '100%', 
          height: '250px', 
          borderRadius: '8px', 
          overflow: 'hidden',
          transition: 'all var(--transition-normal)'
        }}>
          {view === 'real' ? (
            <div style={{
              width: '100%', height: '100%', 
              background: 'linear-gradient(45deg, #2e5926 0%, #3e6d33 50%, #765c48 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.8)'
            }}>
              Floresta Densa (Verde) e Solo Criado (Marrom)
            </div>
          ) : (
            <div style={{
              width: '100%', height: '100%', 
              background: 'linear-gradient(45deg, #00ff00 0%, #a4de02 50%, #ff0000 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(0,0,0,0.7)', fontWeight: 'bold'
            }}>
              Árvores Vigorosas (Verde Neon) e Solo Exposto (Vermelho)
            </div>
          )}
        </div>

        <div style={{ marginTop: '1.5rem', backgroundColor: 'var(--color-bg)', padding: '1rem', borderRadius: '4px', fontSize: '0.875rem' }}>
          <strong>O que aprendemos:</strong> A olho nu, um gramado ralo e uma floresta densa parecem ambos verde-escuros. O satélite capta infravermelho (NDVI), pintando a fotossíntese intensa de verde vivo e expondo em vermelho onde há clareiras escondidas.
        </div>
      </div>
    </div>
  );
};

export default Chapter2Simulation;
