import { useState } from 'react';
import { Terminal } from 'lucide-react';
import styles from './Simulations.module.css';

const Chapter7Simulation = () => {
  const [output, setOutput] = useState([]);
  const [inputVal, setInputVal] = useState('');

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;
    
    const newOutput = [...output, `> ${cmd}`];
    
    if (cmd === 'run_model()') {
      newOutput.push('Carregando imagens de satélite...');
      newOutput.push('Aplicando Rede Neural Convolucional...');
      newOutput.push('[SUCESSO] Desmatamento previsto na área X: 85% de probabilidade.');
    } else if (cmd === 'clear') {
      setOutput([]);
      setInputVal('');
      return;
    } else {
      newOutput.push(`Comando não reconhecido: '${cmd}'. Tente 'run_model()'.`);
    }

    setOutput(newOutput);
    setInputVal('');
  };

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <Terminal size={24} color="var(--color-primary)" /> 
          Prática: Mãos no Código
        </h3>
        <p className={styles.simDesc}>
          Um terminal python falso! Digite o comando mágico <code>run_model()</code> para ver a IA "pensar".
        </p>
      </div>

      <div className={styles.simContent} style={{ backgroundColor: '#1e1e1e', color: '#00ff00', fontFamily: 'monospace', padding: '1rem' }}>
        <div style={{ minHeight: '150px', marginBottom: '1rem' }}>
          <p style={{ color: '#ccc', marginBottom: '1rem' }}>Ambiental_ML v1.0. Pronto para execução.</p>
          {output.map((line, idx) => (
            <p key={idx} style={{ 
              color: line.includes('Erro') || line.includes('não reconhecido') ? '#ff5555' : 
                     line.includes('SUCESSO') ? '#55ff55' : 
                     line.startsWith('>') ? '#fff' : '#aaa',
              marginBottom: '0.5rem',
              lineHeight: '1.4'
            }}>
              {line}
            </p>
          ))}
        </div>
        
        <form onSubmit={handleCommand} style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '0.5rem', color: '#fff' }}>$</span>
          <input 
            type="text" 
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            style={{ 
              flex: 1, 
              backgroundColor: 'transparent', 
              border: 'none', 
              color: '#00ff00', 
              fontFamily: 'monospace',
              fontSize: '1rem',
              outline: 'none'
            }}
            placeholder="Digite run_model() e pressione Enter"
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
};

export default Chapter7Simulation;
