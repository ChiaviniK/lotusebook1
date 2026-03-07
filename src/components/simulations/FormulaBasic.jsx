import { useState, useRef } from 'react';
import { Calculator, CheckCircle2, AlertCircle } from 'lucide-react';
import styles from './Simulations.module.css';

const FormulaBasic = () => {
  const [formula, setFormula] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Mocked grid Data representing trash generation
  const grid = {
    B2: 1500, // Lixo Misto
    C2: 800   // Lixo Orgânico
  };

  const calculate = () => {
    setError(null);
    setSuccess(false);

    let cleanFormula = formula.trim().toUpperCase();
    
    // Check if starts with '='
    if (!cleanFormula.startsWith('=')) {
      setError("Toda fórmula no Excel deve começar com o símbolo de igual '='.");
      return;
    }

    cleanFormula = cleanFormula.substring(1).replace(/\s/g, ''); // Remove '=' and spaces

    // Extremely basic parser just for this simulation (=B2+C2)
    const match = cleanFormula.match(/^([A-Z][0-9])\+([A-Z][0-9])$/);
    if (match) {
      const cell1 = match[1];
      const cell2 = match[2];

      if (grid[cell1] !== undefined && grid[cell2] !== undefined) {
          const val1 = grid[cell1];
          const val2 = grid[cell2];
          setResult(val1 + val2);

          // Win condition: Add B2 and C2
          if ((cell1 === 'B2' && cell2 === 'C2') || (cell1 === 'C2' && cell2 === 'B2')) {
            setSuccess(true);
          } else {
             setError("Cálculo realizado, mas você não somou as células corretas dos resíduos.");
          }
      } else {
        setError(`Uma das células (${cell1} ou ${cell2}) está vazia ou não existe neste exercício.`);
      }
    } else {
      setError("Formato não reconhecido para este exercício básico. Tente somar as células, ex: =A1+B1");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      calculate();
    }
  };

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <Calculator size={24} color="#f59e0b" /> 
          Prática 1.2: A Calculadora Ambiental
        </h3>
        <p className={styles.simDesc}>
          Um analista nunca digita "1500 + 800". Ele manda o Excel somar a "Célula de Misto" com a "Célula de Orgânico". Digite a fórmula correta usando o símbolo de igual (<strong>=</strong>) para somar os resíduos abaixo.
        </p>
      </div>

      <div className={styles.simContent}>
        
        <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '8px', overflow: 'hidden' }}>
          
          {/* Excel Grid Simulation */}
          <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr 1fr 1fr', gridAutoRows: '40px', backgroundColor: '#f1f5f9', gap: '1px' }}>
            {/* Header */}
            <div style={{ backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
            <div style={{ backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>A</div>
            <div style={{ backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>B</div>
            <div style={{ backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>C</div>

            {/* Row 1 Headers */}
            <div style={{ backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>1</div>
            <div style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', paddingLeft: '0.5rem', fontWeight: 'bold', fontSize: '0.85rem' }}>Aterro Sul</div>
            <div style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', paddingLeft: '0.5rem', fontWeight: 'bold', fontSize: '0.85rem' }}>Lixo Misto (ton)</div>
            <div style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', paddingLeft: '0.5rem', fontWeight: 'bold', fontSize: '0.85rem' }}>Lixo Orgânico (ton)</div>

            {/* Row 2 Data */}
            <div style={{ backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>2</div>
            <div style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', paddingLeft: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Mês Jan</div>
            <div style={{ backgroundColor: '#fef3c7', display: 'flex', alignItems: 'center', paddingLeft: '0.5rem', fontSize: '0.9rem', color: '#b45309', borderLeft: '2px solid #f59e0b' }}>{grid.B2}</div>
            <div style={{ backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', paddingLeft: '0.5rem', fontSize: '0.9rem', color: '#15803d', borderLeft: '2px solid #22c55e' }}>{grid.C2}</div>
          </div>

          {/* Formula Bar */}
          <div style={{ padding: '1.5rem', backgroundColor: '#f8fafc', borderTop: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ fontWeight: 'bold', color: 'var(--color-text-muted)', width: '2rem', textAlign: 'center' }}><em>fx</em></div>
              <input 
                type="text" 
                value={formula}
                onChange={(e) => setFormula(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Exemplo: =A1+A2"
                style={{ flex: 1, padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', outline: 'none', fontSize: '1rem', fontFamily: 'monospace' }}
              />
              <button 
                onClick={calculate}
                className={styles.btnPrimary} style={{ padding: '0.75rem 1.5rem' }}
              >
                Enter
              </button>
            </div>

            {/* Realtime Output */}
            <div style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '4px', border: '1px solid #e2e8f0', minHeight: '60px', display: 'flex', alignItems: 'center' }}>
              <strong style={{ color: 'var(--color-text-muted)', marginRight: '1rem', fontSize: '0.9rem' }}>Resultado da Célula:</strong>
              {result !== null && (
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-text-main)' }}>{result}</span>
              )}
            </div>

            {/* Feedbacks */}
            {error && (
              <div style={{ color: '#ef4444', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AlertCircle size={16} /> {error}
              </div>
            )}

            {success && (
              <div className="animate-fade-in" style={{ backgroundColor: '#dcfce7', padding: '1rem', borderRadius: '6px', border: '1px solid #bbf7d0', color: '#166534', fontSize: '0.9rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} style={{ flexShrink: 0 }} />
                <span>
                  <strong>Genial!</strong> A fórmula <code>=B2+C2</code> gerou o total de <strong>2300 ton</strong>. A magia é que, se amanhã a prefeitura atualizar o Lixo Misto de 1500 para 2000, o seu total vai mudar sozinho para 2800! Isso é pensamento analítico.
                </span>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};

export default FormulaBasic;
