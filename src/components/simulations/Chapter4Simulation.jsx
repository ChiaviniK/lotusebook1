import { useState } from 'react';
import { Network, Database, Filter, Map as MapIcon, ArrowRight } from 'lucide-react';
import styles from './Simulations.module.css';

const Chapter4Simulation = () => {
  const [pipeline, setPipeline] = useState([]);

  const tools = [
    { id: 'data', name: 'Dados GPS', icon: Database, color: '#4c9a2a' },
    { id: 'filter', name: 'Filtro (Remover Erros)', icon: Filter, color: '#f39c12' },
    { id: 'map', name: 'Gerar Mapa', icon: MapIcon, color: '#3498db' }
  ];

  const addToPipeline = (tool) => {
    if (pipeline.length < 3) {
      setPipeline([...pipeline, tool]);
    }
  };

  const resetPipeline = () => setPipeline([]);

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <Network size={24} color="#f39c12" /> 
          Prática: Construindo um Pipeline Visual
        </h3>
        <p className={styles.simDesc}>
          Simule uma ferramenta "No-Code". Clique nos blocos abaixo na ordem correta para criar um fluxo: (1) Ler Dados, (2) Limpar, (3) Visualizar.
        </p>
      </div>

      <div className={styles.simContent}>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
          {tools.map(tool => (
            <button 
              key={tool.id} 
              className={styles.btnSecondary} 
              onClick={() => addToPipeline(tool)}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderColor: tool.color, color: tool.color }}
            >
              <tool.icon size={18} /> {tool.name}
            </button>
          ))}
        </div>

        <div style={{ 
          minHeight: '120px', 
          backgroundColor: 'var(--color-bg)', 
          border: '2px dashed var(--color-border)', 
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          padding: '1rem'
        }}>
          {pipeline.length === 0 ? (
            <span style={{ color: 'var(--color-text-muted)' }}>Sua área de trabalho está vazia. Adicione blocos!</span>
          ) : (
            pipeline.map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  backgroundColor: 'white', 
                  border: `2px solid ${item.color}`, 
                  padding: '1rem', 
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  minWidth: '120px'
                }}>
                  <item.icon size={24} color={item.color} style={{ marginBottom: '0.5rem' }} />
                  <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{item.name}</span>
                </div>
                {index < pipeline.length - 1 && <ArrowRight color="var(--color-text-muted)" />}
              </div>
            ))
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem', gap: '1rem' }}>
          <button className={styles.btnSecondary} onClick={resetPipeline}>Recomeçar</button>
          {pipeline.length === 3 && pipeline[0].id === 'data' && pipeline[1].id === 'filter' && pipeline[2].id === 'map' && (
            <span className={`${styles.resultBadge} ${styles.success}`}>
              Fluxo Perfeito! Dados {"->"} Filtro {"->"} Mapa.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chapter4Simulation;
