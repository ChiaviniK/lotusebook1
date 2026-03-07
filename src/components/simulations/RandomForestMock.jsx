import { useState } from 'react';
import { Cpu, TreePine, Flame, CloudRain } from 'lucide-react';
import styles from './Simulations.module.css';

const RandomForestMock = () => {
  const [samples, setSamples] = useState([]);
  const [modelScore, setModelScore] = useState(0); // Accuracy

  // Fictitious data stream to classify
  const incomingImages = [
    { id: 1, type: 'forest', icon: <TreePine size={40} color="#27ae60" />, features: 'Verde Elevado, NDVI Alto, Textura Rugosa' },
    { id: 2, type: 'fire', icon: <Flame size={40} color="#e74c3c" />, features: 'Vermelho Intenso, Temperatura Anômala, Fumaça' },
    { id: 3, type: 'cloud', icon: <CloudRain size={40} color="#95a5a6" />, features: 'Branco Brilhante, Sombra Detectada, NDVI Baixo' },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [isTraining, setIsTraining] = useState(false);

  const handleClassify = (guess) => {
    const isCorrect = guess === incomingImages[currentIdx].type;
    setSamples([...samples, { ...incomingImages[currentIdx], correct: isCorrect }]);
    
    // Recalculate accuracy Score (1 to 100)
    const newCorrectCount = samples.filter(s => s.correct).length + (isCorrect ? 1 : 0);
    const totalCount = samples.length + 1;
    setModelScore(Math.round((newCorrectCount / totalCount) * 100));

    // Next image (looping)
    setCurrentIdx((prev) => (prev + 1) % incomingImages.length);
    
    // Animate Tree Ensemble
    setIsTraining(true);
    setTimeout(() => setIsTraining(false), 500);
  };

  const resetModel = () => {
    setSamples([]);
    setModelScore(0);
    setCurrentIdx(0);
  };

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <Cpu size={24} color="#e67e22" /> 
          Prática 7.2: Treinando um "Random Forest"
        </h3>
        <p className={styles.simDesc}>
          Uma árvore de decisão aprende com exemplos. Classifique os pixels que o satélite está enviando para "ensinar" o algoritmo a identificar Fogo ou Floresta.
        </p>
      </div>

      <div className={styles.simContent}>
        
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          
          {/* Classification Area */}
          <div style={{ flex: '1', minWidth: '300px', backgroundColor: 'var(--color-bg)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--color-border)', textAlign: 'center' }}>
            <h4 style={{ margin: '0 0 1rem 0', color: 'var(--color-text-main)' }}>O que o Satélite vê agora:</h4>
            
            <div style={{ 
              width: '120px', height: '120px', margin: '0 auto 1.5rem', 
              backgroundColor: 'white', borderRadius: '12px', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              border: '2px solid var(--color-border)'
            }}>
              {incomingImages[currentIdx].icon}
            </div>

            <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontFamily: 'monospace' }}>
              Features: [{incomingImages[currentIdx].features}]
            </div>

            <p style={{ fontWeight: 600, marginBottom: '1rem' }}>Qual a classificação humana (Ground Truth)?</p>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
              <button className={styles.btnSecondary} onClick={() => handleClassify('forest')}>Floresta</button>
              <button className={styles.btnSecondary} onClick={() => handleClassify('fire')}>Fogo</button>
              <button className={styles.btnSecondary} onClick={() => handleClassify('cloud')}>Nuvem</button>
            </div>
          </div>

          {/* Machine Learning Model Dashboard */}
          <div style={{ flex: '1', minWidth: '300px', backgroundColor: '#1e1e2f', color: 'white', padding: '2rem', borderRadius: '8px' }}>
            <h4 style={{ margin: '0 0 1.5rem 0', color: '#a5b1c2', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Status do Algoritmo</span>
              <span style={{ fontSize: '0.75rem', backgroundColor: '#e67e22', color: 'white', padding: '2px 8px', borderRadius: '12px' }}>Random Forest Classifier</span>
            </h4>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
              <div>
                <div style={{ fontSize: '0.875rem', color: '#747d8c' }}>Amostras Analisadas (Epoch):</div>
                <div style={{ fontSize: '2rem', fontWeight: 800 }}>{samples.length}</div>
              </div>
              
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.875rem', color: '#747d8c' }}>Acurácia do Modelo:</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: modelScore > 70 ? '#2ed573' : (modelScore > 0 ? '#ffa502' : 'white') }}>
                  {modelScore}%
                </div>
              </div>
            </div>

            <div style={{ margin: '2rem 0', position: 'relative' }}>
               <p style={{ fontSize: '0.875rem', color: '#a5b1c2', marginBottom: '0.5rem' }}>Conjunto de Árvores (Ensemble):</p>
               <div style={{ display: 'flex', gap: '0.5rem', opacity: samples.length === 0 ? 0.3 : 1, transition: 'all 0.3s' }}>
                 {[1, 2, 3, 4, 5].map(tree => (
                   <div key={tree} style={{ 
                     flex: 1, height: '40px', backgroundColor: '#2f3542', borderRadius: '4px',
                     display: 'flex', alignItems: 'center', justifyContent: 'center',
                     transform: isTraining ? 'scale(1.1)' : 'scale(1)',
                     transition: 'all 0.2s',
                     boxShadow: isTraining ? '0 0 10px rgba(46, 213, 115, 0.5)' : 'none',
                     color: isTraining ? '#2ed573' : '#a5b1c2'
                   }}>
                     <TreePine size={20} />
                   </div>
                 ))}
               </div>
               {isTraining && <div style={{ position: 'absolute', top: '-10px', right: 0, color: '#2ed573', fontSize: '0.75rem', fontWeight: 'bold' }}>Updating Weights...</div>}
            </div>

            {samples.length > 5 && (
              <div style={{ padding: '1rem', backgroundColor: '#2ed57320', border: '1px solid #2ed573', borderRadius: '8px', fontSize: '0.875rem' }}>
                <span style={{ display: 'block', fontWeight: 'bold', color: '#2ed573', marginBottom: '0.5rem' }}>✓ Modelo Treinado</span>
                A IA agora reconhece padrões matemáticos suficientes para rodar a inferência nas próximas 10.000 fotos de satélite sozinha.
              </div>
            )}
            
            <button onClick={resetModel} style={{ marginTop: '1.5rem', width: '100%', padding: '0.5rem', backgroundColor: 'transparent', border: '1px solid #747d8c', color: '#747d8c', borderRadius: '4px', cursor: 'pointer' }}>
               Resetar Pesos (Retreinar)
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RandomForestMock;
