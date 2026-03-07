import { useState } from 'react';
import { Sigma, CheckCircle2, XCircle } from 'lucide-react';
import styles from './Simulations.module.css';

const StatsBasic = () => {
  const [selectedFunc, setSelectedFunc] = useState('none');
  const [result, setResult] = useState(null);

  // Amostras de Turbidez Diária do Rio
  const data = [15, 22, 18, 120, 20];

  const handleFunction = (funcName) => {
    setSelectedFunc(funcName);
    
    switch(funcName) {
      case 'MEDIA':
        const sum = data.reduce((a, b) => a + b, 0);
        setResult((sum / data.length).toFixed(1));
        break;
      case 'MAXIMO':
        setResult(Math.max(...data));
        break;
      case 'MINIMO':
        setResult(Math.min(...data));
        break;
      case 'SOMA':
        setResult(data.reduce((a, b) => a + b, 0));
        break;
      default:
        setResult(null);
    }
  };

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <Sigma size={24} color="#8b5cf6" /> 
          Prática 1.3: As Fórmulas Mágicas
        </h3>
        <p className={styles.simDesc}>
          O Meio Ambiente gera milhares de números por hora. Você não vai somar tudo na mão. Teste as funções nativas do Excel clicando nos botões abaixo e veja como elas engolem intervalos de dados da nossa "Coluna B" e as cospem em formato de inteligência.
        </p>
      </div>

      <div className={styles.simContent}>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          
          {/* Tabela de Dados */}
          <div style={{ flex: 1, minWidth: '200px', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ padding: '0.75rem', backgroundColor: '#e2e8f0', fontWeight: 'bold', textAlign: 'center', borderBottom: '1px solid var(--color-border)' }}>
              Amostragens (Coluna B)
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', borderBottom: '1px solid #f1f5f9' }}>
                <div style={{ width: '40px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.8rem', color: '#64748b' }}>2</div>
                <div style={{ padding: '0.5rem 1rem', flex: 1 }}>{data[0]} NTU</div>
              </div>
              <div style={{ display: 'flex', borderBottom: '1px solid #f1f5f9' }}>
                <div style={{ width: '40px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.8rem', color: '#64748b' }}>3</div>
                <div style={{ padding: '0.5rem 1rem', flex: 1 }}>{data[1]} NTU</div>
              </div>
              <div style={{ display: 'flex', borderBottom: '1px solid #f1f5f9' }}>
                <div style={{ width: '40px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.8rem', color: '#64748b' }}>4</div>
                <div style={{ padding: '0.5rem 1rem', flex: 1 }}>{data[2]} NTU</div>
              </div>
              <div style={{ display: 'flex', borderBottom: '1px solid #f1f5f9', backgroundColor: selectedFunc === 'MAXIMO' ? '#fee2e2' : 'transparent' }}>
                <div style={{ width: '40px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.8rem', color: selectedFunc === 'MAXIMO' ? '#dc2626' : '#64748b' }}>5</div>
                <div style={{ padding: '0.5rem 1rem', flex: 1, fontWeight: selectedFunc === 'MAXIMO' ? 'bold' : 'normal', color: selectedFunc === 'MAXIMO' ? '#991b1b' : 'inherit' }}>{data[3]} NTU</div>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ width: '40px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.8rem', color: '#64748b' }}>6</div>
                <div style={{ padding: '0.5rem 1rem', flex: 1 }}>{data[4]} NTU</div>
              </div>
            </div>
            
            {/* Célula do Resultado */}
            <div style={{ marginTop: '1rem', padding: '1rem', borderTop: '2px dashed var(--color-border)', backgroundColor: '#f8fafc' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>B7 (Resultado)</div>
              <div style={{ 
                height: '40px', backgroundColor: 'white', border: '2px solid #3b82f6', borderRadius: '4px', 
                display: 'flex', alignItems: 'center', paddingLeft: '0.5rem', fontWeight: 'bold', fontSize: '1.1rem',
                color: result ? 'var(--color-text-main)' : '#94a3b8'
              }}>
                {result !== null ? result : '...'}
              </div>
            </div>
          </div>

          {/* Painel de Fórmulas */}
          <div style={{ flex: 1.5, minWidth: '250px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h4 style={{ margin: 0, paddingBottom: '0.5rem', borderBottom: '1px solid var(--color-border)' }}>Automação Estatística</h4>
            
            <button 
              onClick={() => handleFunction('MEDIA')}
              className={styles.btnSecondary}
              style={{ textAlign: 'left', padding: '1rem', backgroundColor: selectedFunc === 'MEDIA' ? '#eff6ff' : 'white', border: selectedFunc === 'MEDIA' ? '1px solid #3b82f6' : '1px solid var(--color-border)' }}
            >
              <div style={{ fontFamily: 'monospace', fontWeight: 'bold', color: '#2563eb' }}>=MÉDIA(B2:B6)</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>Soma tudo e divide por 5 dias. Descobre o comportamento "típico" da semana.</div>
            </button>

            <button 
              onClick={() => handleFunction('MAXIMO')}
              className={styles.btnSecondary}
              style={{ textAlign: 'left', padding: '1rem', backgroundColor: selectedFunc === 'MAXIMO' ? '#fef2f2' : 'white', border: selectedFunc === 'MAXIMO' ? '1px solid #ef4444' : '1px solid var(--color-border)' }}
            >
              <div style={{ fontFamily: 'monospace', fontWeight: 'bold', color: '#dc2626' }}>=MÁXIMO(B2:B6)</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>Caça o maior pico. Essencial para multas ambientais: houve um estupro do limite de turbidez!</div>
            </button>

            <button 
              onClick={() => handleFunction('MINIMO')}
              className={styles.btnSecondary}
              style={{ textAlign: 'left', padding: '1rem', backgroundColor: selectedFunc === 'MINIMO' ? '#f0fdf4' : 'white', border: selectedFunc === 'MINIMO' ? '1px solid #22c55e' : '1px solid var(--color-border)' }}
            >
               <div style={{ fontFamily: 'monospace', fontWeight: 'bold', color: '#16a34a' }}>=MÍNIMO(B2:B6)</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>Acha o dia mais limpo (menor índice de poluição da lista).</div>
            </button>
            
            <button 
              onClick={() => handleFunction('SOMA')}
              className={styles.btnSecondary}
              style={{ textAlign: 'left', padding: '1rem', backgroundColor: selectedFunc === 'SOMA' ? '#f8fafc' : 'white' }}
            >
               <div style={{ fontFamily: 'monospace', fontWeight: 'bold', color: '#475569' }}>=SOMA(B2:B6)</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>Adiciona tudo junto. Excelente para "Resíduos" ou "Emissões CO2", mas inútil para pH ou Turbidez (não faz sentido somar pureza da água).</div>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default StatsBasic;
