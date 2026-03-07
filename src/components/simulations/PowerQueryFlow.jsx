import { useState } from 'react';
import { Database, Filter, ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import styles from './Simulations.module.css';

const PowerQueryFlow = () => {
  const [step, setStep] = useState(0);
  const [dataState, setDataState] = useState([
    { id: 1, date: '12/03/24', location: ' Rio', value: '45.2 ' },
    { id: 2, date: '12-03-2024', location: 'rio ', value: '45.2' }, 
    { id: 3, date: '13/03/24', location: 'Lago', value: 'null' }
  ]);
  const [logs, setLogs] = useState([]);

  const executeStep = () => {
    if (step === 0) {
      // Step 1: Trim Text
      setDataState(prev => prev.map(row => ({
        ...row,
        location: row.location.trim().toUpperCase(),
        value: row.value.trim()
      })));
      setLogs(prev => [...prev, "Transformação 1: Espaços removidos (Trim) e Texto Padronizado (Upper)."]);
      setStep(1);
    } else if (step === 1) {
      // Step 2: Fix Dates
      setDataState(prev => prev.map(row => ({
        ...row,
        date: row.date.replace(/-/g, '/').replace('2024', '24') // Simplification for mock
      })));
      setLogs(prev => [...prev, "Transformação 2: Datas padronizadas no formato DD/MM/AA."]);
      setStep(2);
    } else if (step === 2) {
      // Step 3: Remove Duplicates
      const unique = [];
      const seen = new Set();
      dataState.forEach(row => {
        const key = `${row.date}-${row.location}-${row.value}`;
        if (!seen.has(key)) {
          seen.add(key);
          unique.push(row);
        }
      });
      setDataState(unique);
      setLogs(prev => [...prev, "Transformação 3: Linhas Duplicadas Removidas."]);
      setStep(3);
    } else if (step === 3) {
      // Step 4: Deal with null/errors
      setDataState(prev => prev.filter(row => row.value !== 'null'));
      setLogs(prev => [...prev, "Transformação 4: Erros e Nulos de leitura descartados."]);
      setStep(4);
    }
  };

  const reset = () => {
    setStep(0);
    setLogs([]);
    setDataState([
      { id: 1, date: '12/03/24', location: ' Rio', value: '45.2 ' },
      { id: 2, date: '12-03-2024', location: 'rio ', value: '45.2' }, 
      { id: 3, date: '13/03/24', location: 'Lago', value: 'null' }
    ]);
  };

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <Filter size={24} color="#16a085" /> 
          Prática 2.2: Magia do Power Query
        </h3>
        <p className={styles.simDesc}>
          O erro comum no Excel é consertar a célula "na mão". Com o Power Query, nós gravamos uma fita de vídeo dos <strong>passos de transformação</strong>. Assim, se chegar um arquivo novo amanhã, basta apertar "Atualizar".
        </p>
      </div>

      <div className={styles.simContent}>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          
          {/* Tabela de Dados */}
          <div style={{ flex: 1, minWidth: '300px', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ padding: '1rem', backgroundColor: '#f1f5f9', borderBottom: '1px solid var(--color-border)', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Tabela Suja de Campo.csv</span>
              <Database size={16} color="var(--color-text-muted)" />
            </div>
            <div style={{ overflowX: 'auto', padding: '1rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                    <th style={{ padding: '0.5rem' }}>Data</th>
                    <th style={{ padding: '0.5rem' }}>Local</th>
                    <th style={{ padding: '0.5rem' }}>Índice</th>
                  </tr>
                </thead>
                <tbody>
                  {dataState.map((row) => (
                    <tr key={row.id} style={{ borderBottom: '1px solid #e2e8f0', transition: 'all 0.3s' }}>
                      <td style={{ padding: '0.5rem' }}>{row.date}</td>
                      <td style={{ padding: '0.5rem', backgroundColor: (row.location.startsWith(' ') || row.location.endsWith(' ')) ? '#fee2e2' : 'transparent' }}>
                        {row.location.replace(/ /g, '·')} {/* Show spaces as dots */}
                      </td>
                      <td style={{ padding: '0.5rem', color: row.value === 'null' ? 'red' : 'inherit' }}>{row.value}</td>
                    </tr>
                  ))}
                  {dataState.length === 0 && <tr><td colSpan="3" style={{ padding: '1rem', textAlign: 'center' }}>Tabela Vazia</td></tr>}
                </tbody>
              </table>
            </div>
          </div>

          {/* Painel do Power Query (Etapas Aplicadas) */}
          <div style={{ flex: 1, minWidth: '250px', backgroundColor: '#f8fafc', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--color-text-main)', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>Configurações da Consulta</h4>
            <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Etapas Aplicadas:</div>
            
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <div style={{ padding: '0.5rem', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '4px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={14} color="var(--color-secondary)" /> Fonte (Origem)
              </div>
              {logs.map((log, index) => (
                <div key={index} className="animate-slide-in" style={{ padding: '0.5rem', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '4px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderLeft: '3px solid var(--color-primary)' }}>
                  <CheckCircle2 size={14} color="var(--color-secondary)" /> {log}
                </div>
              ))}
            </div>

            {step < 4 ? (
              <button 
                onClick={executeStep} 
                className={styles.btnPrimary} 
                style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}
              >
                <Play size={16} /> Próxima Transformação
              </button>
            ) : (
              <button 
                onClick={reset} 
                className={styles.btnSecondary} 
                style={{ width: '100%', backgroundColor: 'transparent', border: '1px solid var(--color-border)', padding: '0.75rem', borderRadius: '6px', cursor: 'pointer' }}
              >
                Resetar Query
              </button>
            )}
          </div>

        </div>

        {step === 4 && (
          <div className={`${styles.successBox} animate-fade-in`} style={{ marginTop: '1.5rem' }}>
            <strong>Entropia Reduzida!</strong> Os dados agora estão perfeitos ("Higiene de Dados"). Se no mês que vem o pesquisador te mandar outro arquivo bagunçado, o Excel rodará esses exatos mesmos passos automaticamente.
          </div>
        )}

      </div>
    </div>
  );
};

export default PowerQueryFlow;
