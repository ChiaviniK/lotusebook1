import { useState } from 'react';
import { AlertTriangle, PaintBucket, CheckCircle2 } from 'lucide-react';
import styles from './Simulations.module.css';

const ExcelStats = () => {
  const [data, setData] = useState([
    { id: 1, sample: 'Ponto A', turbidity: 45, dbo: 12 },
    { id: 2, sample: 'Ponto B', turbidity: 52, dbo: 15 },
    { id: 3, sample: 'Ponto C', turbidity: 140, dbo: 60 },
    { id: 4, sample: 'Ponto D', turbidity: 48, dbo: 14 }
  ]);
  
  const [ruleApplied, setRuleApplied] = useState(false);
  const [errorHighlight, setErrorHighlight] = useState(false);

  // Limits legally allowed
  const limitTurbidity = 100;
  const limitDBO = 30;

  const handleApplyRule = () => {
    setRuleApplied(true);
  };

  const handleValueChange = (id, field, value) => {
    const num = parseInt(value, 10);
    if(isNaN(num)) return;
    
    setData(prev => prev.map(row => {
      if(row.id === id) {
        return { ...row, [field]: num };
      }
      return row;
    }));
  };

  const isOutlier = (field, val) => {
    if (!ruleApplied) return false;
    if (field === 'turbidity' && val > limitTurbidity) return true;
    if (field === 'dbo' && val > limitDBO) return true;
    return false;
  };

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <AlertTriangle size={24} color="#e74c3c" /> 
          Prática 3.2: Identificando Outliers do CONAMA
        </h3>
        <p className={styles.simDesc}>
          O cérebro humano falha ao procurar erros no meio de milhares de números. Aplique a <strong>Formatação Condicional</strong> para que a máquina grite quando um limite de poluição estourar.
        </p>
      </div>

      <div className={styles.simContent}>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          
          <div style={{ flex: 1, minWidth: '300px', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ padding: '1rem', backgroundColor: '#f1f5f9', borderBottom: '1px solid var(--color-border)', fontWeight: 'bold' }}>
              Base: Monitoramento Rio Seco
            </div>
            <div style={{ padding: '1rem', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                    <th style={{ padding: '0.5rem' }}>Amostra</th>
                    <th style={{ padding: '0.5rem' }}>Turbidez (NTU)</th>
                    <th style={{ padding: '0.5rem' }}>DBO (mg/L)</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row) => (
                    <tr key={row.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '0.5rem' }}>{row.sample}</td>
                      <td style={{ 
                        padding: '0.5rem', 
                        backgroundColor: isOutlier('turbidity', row.turbidity) ? '#fee2e2' : 'transparent',
                        color: isOutlier('turbidity', row.turbidity) ? '#b91c1c' : 'inherit',
                        fontWeight: isOutlier('turbidity', row.turbidity) ? 'bold' : 'normal',
                        transition: 'all 0.3s'
                      }}>
                        <input 
                          type="number" 
                          value={row.turbidity} 
                          onChange={(e) => handleValueChange(row.id, 'turbidity', e.target.value)}
                          style={{ width: '60px', textAlign: 'center', border: 'none', backgroundColor: 'transparent', color: 'inherit', fontWeight: 'inherit', outline: 'none' }}
                        />
                      </td>
                      <td style={{ 
                        padding: '0.5rem', 
                        backgroundColor: isOutlier('dbo', row.dbo) ? '#fee2e2' : 'transparent',
                        color: isOutlier('dbo', row.dbo) ? '#b91c1c' : 'inherit',
                        fontWeight: isOutlier('dbo', row.dbo) ? 'bold' : 'normal',
                        transition: 'all 0.3s'
                      }}>
                        <input 
                          type="number" 
                          value={row.dbo} 
                          onChange={(e) => handleValueChange(row.id, 'dbo', e.target.value)}
                          style={{ width: '60px', textAlign: 'center', border: 'none', backgroundColor: 'transparent', color: 'inherit', fontWeight: 'inherit', outline: 'none' }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ fontSize: '0.75rem', marginTop: '1rem', color: 'var(--color-text-muted)' }}>
                *Dica: Você pode digitar e alterar os valores nas células acima.
              </div>
            </div>
          </div>

          <div style={{ flex: 1, minWidth: '250px', backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>Regras de Destaque</h4>
            
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
              Limites CONAMA Classe 2:
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li>Turbidez &gt; {limitTurbidity} NTU</li>
                <li>DBO &gt; {limitDBO} mg/L</li>
              </ul>
            </div>

            <button 
              onClick={handleApplyRule}
              disabled={ruleApplied}
              className={styles.btnPrimary}
              style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', opacity: ruleApplied ? 0.5 : 1 }}
            >
              <PaintBucket size={16} /> 
              {ruleApplied ? "Regra Aplicada!" : "Aplicar Formatação de Vermelho"}
            </button>
            
            {ruleApplied && (
              <button 
                onClick={() => setRuleApplied(false)}
                className={styles.btnSecondary}
                style={{ backgroundColor: 'transparent', border: '1px solid var(--color-border)' }}
              >
                Limpar Regras
              </button>
            )}

          </div>

        </div>

        {ruleApplied && (
          <div className={`${styles.successBox} animate-fade-in`} style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <CheckCircle2 size={24} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong>Alarmes Visuais:</strong> O "Ponto C" acabou de estourar a paleta de cores! Quando usamos Formatação Condicional, garantimos que a física dos limites biológicos nunca passe despercebida numa tabela chata.
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ExcelStats;
