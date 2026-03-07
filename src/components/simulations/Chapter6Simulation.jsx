import { useState } from 'react';
import { Palette } from 'lucide-react';
import styles from './Simulations.module.css';

const Chapter6Simulation = () => {
  const [colorblind, setColorblind] = useState(false);

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <Palette size={24} color="var(--color-primary)" /> 
          Prática: Escolha de Cores Inclusivas
        </h3>
        <p className={styles.simDesc}>
          Veja como uma escala de mapa equivocada pode esconder dados de pessoas com daltonismo.
        </p>
      </div>

      <div className={styles.simContent}>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2rem' }}>
          
          <div style={{ flex: '1', minWidth: '200px', textAlign: 'center' }}>
            <h4 style={{ marginBottom: '1rem', color: 'var(--color-text-main)' }}>Escala Arco-Íris (Ruim)</h4>
            <div style={{ 
              height: '40px', 
              width: '100%', 
              background: colorblind 
                ? 'linear-gradient(to right, #666, #aaa, #888, #555)' 
                : 'linear-gradient(to right, blue, green, yellow, red)',
              borderRadius: '4px',
              transition: 'all var(--transition-normal)'
            }}></div>
            <p style={{ fontSize: '0.75rem', marginTop: '0.5rem', color: 'var(--color-text-muted)' }}>
              {colorblind ? "As cores se misturam. Vermelho e Verde parecem cinza." : "Muito comum, mas cria falsos limites visuais."}
            </p>
          </div>

          <div style={{ flex: '1', minWidth: '200px', textAlign: 'center' }}>
            <h4 style={{ marginBottom: '1rem', color: 'var(--color-text-main)' }}>Escala Viridis (Excelente)</h4>
            <div style={{ 
              height: '40px', 
              width: '100%', 
              background: colorblind 
                ? 'linear-gradient(to right, #444, #777, #aaa, #ddd)' 
                : 'linear-gradient(to right, #440154, #31688e, #35b779, #fde725)',
              borderRadius: '4px',
              transition: 'all var(--transition-normal)'
            }}></div>
            <p style={{ fontSize: '0.75rem', marginTop: '0.5rem', color: 'var(--color-text-muted)' }}>
              {colorblind ? "O degradê claro/escuro continua perfeitamente legível!" : "Acessível e linear. Baseada em luminosidade."}
            </p>
          </div>

        </div>

        <div style={{ textAlign: 'center' }}>
          <button 
            className={colorblind ? styles.btnSecondary : styles.btnPrimary}
            onClick={() => setColorblind(!colorblind)}
          >
            {colorblind ? "Desativar Filtro de Daltonismo" : "Simular Daltonismo (Deuteranopia)"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chapter6Simulation;
