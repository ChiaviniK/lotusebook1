import React, { useState } from 'react';
import { Factory, Leaf, AlertTriangle, ArrowRightLeft, DollarSign } from 'lucide-react';
import styles from '../ebook/Chapter.module.css';

const CapAndTradeSim = () => {
  const [budget, setBudget] = useState(500000); // R$
  const [emissions, setEmissions] = useState(120); // Toneladas Emitidas pela Fabrica
  const [allowances, setAllowances] = useState(100); // Toneladas Permitidas por Lei (Cota CBE)
  const [logs, setLogs] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const marketPrice = 1500; // Preço do crédito extra (CRVE/CBE)
  const filterCost = 250000; // Investimento para abater emissoes local
  const penalty = 5000; // Multa POR TONELADA excedente se chegar no fim do ano acima do teto

  const addLog = (msg) => {
    setLogs(prev => [msg, ...prev].slice(0, 4));
  };

  const buyAllowance = () => {
    if (budget >= marketPrice) {
      setBudget(prev => prev - marketPrice);
      setAllowances(prev => prev + 1);
      addLog(`Mercado: Comprou 1 Permissão Extra (CBE) por R$ ${marketPrice}`);
    } else {
      addLog('Erro: Orçamento insuficiente para comprar no mercado.');
    }
  };

  const investInTech = () => {
    if (budget >= filterCost) {
      setBudget(prev => prev - filterCost);
      setEmissions(prev => Math.max(0, prev - 30)); // Filtro reduz emissão da chaminé
      addLog('Tecnologia: Comprou Filtro Industrial! Reduziu 30 tCO2e da Chaminé.');
    } else {
      addLog('Erro: Orçamento insuficiente para retrofit da fábrica.');
    }
  };

  const endYear = () => {
    let finalBudget = budget;
    const deficit = emissions - allowances;
    
    if (deficit > 0) {
       const fineTotal = deficit * penalty;
       finalBudget -= fineTotal;
       addLog(`Fim do Ciclo: Multado pelo IBAMA em R$ ${fineTotal} por ${deficit} ton. excedentes!`);
    } else {
       addLog(`Fim do Ciclo: Auditoria aprovada! Sua emissão (${emissions}t) está coberta pela sua cota legal (${allowances}t).`);
    }

    setBudget(finalBudget);
    setIsGameOver(true);
  };

  const reset = () => {
    setBudget(500000);
    setEmissions(120);
    setAllowances(100);
    setLogs([]);
    setIsGameOver(false);
  };

  return (
    <div className={styles.simulationWrapper}>
       <div className={styles.simHeader}>
          <h4>Simulador Cap & Trade (Mercado Regulado)</h4>
          <p>Você é Gestor da Termoelétrica. A Lei permite apenas {allowances}t, mas você polui {emissions}t.</p>
       </div>

       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', padding: '1.5rem 1rem' }}>
          
          <div style={{ backgroundColor: 'var(--color-bg)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             <DollarSign size={24} color="#10b981" />
             <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Em Caixa</div>
             <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: budget < 0 ? '#ef4444' : 'var(--color-text-main)' }}>R$ {budget.toLocaleString()}</div>
          </div>

          <div style={{ backgroundColor: '#fee2e2', padding: '1rem', borderRadius: '8px', border: '1px solid #fca5a5', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             <Factory size={24} color="#ef4444" />
             <div style={{ fontSize: '0.8rem', color: '#b91c1c', marginTop: '0.5rem' }}>Emissão Real (Chaminé)</div>
             <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#991b1b' }}>{emissions} tCO2</div>
          </div>

          <div style={{ backgroundColor: '#dcfce7', padding: '1rem', borderRadius: '8px', border: '1px solid #86efac', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             <Leaf size={24} color="#15803d" />
             <div style={{ fontSize: '0.8rem', color: '#166534', marginTop: '0.5rem' }}>Cotas Possuídas (CBE)</div>
             <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#14532d' }}>{allowances} Permissões</div>
          </div>

       </div>

       <div style={{ padding: '0 1rem 1rem 1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button 
            disabled={isGameOver}
            onClick={buyAllowance}
            style={{ flex: 1, padding: '0.75rem', backgroundColor: 'var(--color-surface)', color: 'var(--color-text-main)', border: '1px solid var(--color-border)', borderRadius: '6px', cursor: isGameOver ? 'not-allowed' : 'pointer', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
            <ArrowRightLeft size={16} /> Comprar Cota CBE (-R$1.5k)
          </button>
          
          <button 
            disabled={isGameOver}
            onClick={investInTech}
            style={{ flex: 1, padding: '0.75rem', backgroundColor: 'var(--color-surface)', color: 'var(--color-text-main)', border: '1px solid var(--color-border)', borderRadius: '6px', cursor: isGameOver ? 'not-allowed' : 'pointer', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
            <Factory size={16} /> Retrofit Filtro (-R$250k)
          </button>
       </div>

       <div style={{ padding: '0 1rem 1rem 1rem' }}>
          <button 
             onClick={isGameOver ? reset : endYear}
             style={{ width: '100%', padding: '1rem', backgroundColor: isGameOver ? 'var(--color-surface)' : 'var(--color-primary)', color: isGameOver ? 'var(--color-text-main)' : 'white', border: isGameOver ? '1px solid var(--color-border)' : 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
             {isGameOver ? 'Tentar Novo Ano Fiscal' : 'Fechar Ano Fiscal (Auditoria)'}
          </button>
       </div>

       {logs.length > 0 && (
          <div style={{ backgroundColor: 'var(--color-bg)', padding: '1rem', borderTop: '1px solid var(--color-border)', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
             <h5 style={{ margin: '0 0 0.5rem 0' }}>Logs Financeiros:</h5>
             {logs.map((log, i) => (
               <div key={i} style={{ marginBottom: '0.25rem', color: log.includes('Multado') ? '#ef4444' : log.includes('aprovada') ? '#10b981' : '' }}>• {log}</div>
             ))}
          </div>
       )}

    </div>
  );
};

export default CapAndTradeSim;
