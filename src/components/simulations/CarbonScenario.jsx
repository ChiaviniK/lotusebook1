import { useState } from 'react';
import { Leaf, Search, TrendingDown, CheckCircle2 } from 'lucide-react';
import styles from './Simulations.module.css';

const CarbonScenario = () => {
  const [fuelType, setFuelType] = useState('Diesel');
  const [liters, setLiters] = useState(1000);
  const [showFormula, setShowFormula] = useState(false);

  // "Government" emission factors database (Mocked)
  const emissionFactors = {
    'Diesel': 2.68, // kg CO2 per liter
    'Etanol': 0.38, 
    'Gasolina': 2.27,
    'Biodiesel': 0.15
  };

  const currentFactor = emissionFactors[fuelType];
  const totalEmissions = (liters * currentFactor).toFixed(2);

  const calculateMitigation = (percentage) => {
    return (totalEmissions * (1 - percentage)).toFixed(2);
  };

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <Leaf size={24} color="#10b981" /> 
          Prática 4.2: Calculadora Automática (GHG)
        </h3>
        <p className={styles.simDesc}>
          Um analista não redigita o fator de emissão a cada frota. Ele usa lógicas de busca como o <strong>PROCV (Excel) ou XLOOKUP</strong> para amarrar tabelas invisíveis do Governo direto na Calculadora.
        </p>
      </div>

      <div className={styles.simContent}>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          
          <div style={{ flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            {/* Input Form */}
            <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '1.5rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Selecionar Combustível (Amostra do Mês)</label>
                <select 
                  value={fuelType} 
                  onChange={(e) => setFuelType(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: '#fff', fontSize: '1rem' }}
                >
                  {Object.keys(emissionFactors).map(f => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Litros Consumidos em Operação</label>
                <input 
                  type="number" 
                  value={liters} 
                  onChange={(e) => setLiters(Number(e.target.value))}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: '#f8fafc', fontSize: '1rem', color: 'var(--color-primary)', fontWeight: 'bold' }}
                />
              </div>
            </div>

            {/* Hidden Table Search Simulation */}
            <div 
              style={{ backgroundColor: showFormula ? '#e0f2fe' : '#f1f5f9', border: showFormula ? '1px solid #38bdf8' : '1px dashed var(--color-border)', borderRadius: '8px', padding: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}
              onClick={() => setShowFormula(!showFormula)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: showFormula ? '#0284c7' : 'var(--color-text-muted)', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                <Search size={16} /> =PROCV (Simulado Aqui)
              </div>
              {showFormula ? (
                <div className="animate-fade-in" style={{ fontSize: '0.8rem', color: '#0369a1', fontFamily: 'monospace', padding: '0.5rem', backgroundColor: '#fff', borderRadius: '4px' }}>
                  =PROCV("{fuelType}"; Base_Governo!A:B; 2; FALSO) <br/>
                  <span style={{ color: '#059669' }}>Retorno Automático Encontrado: {currentFactor} kgCO2e/L</span>
                </div>
              ) : (
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Clique para ver como o Excel busca o Fator Oficial escondido...</div>
              )}
            </div>

          </div>

          <div style={{ flex: 1, minWidth: '250px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            {/* Output Panel */}
            <div style={{ backgroundColor: '#1e293b', color: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>Pegada Bruta (Escopo 1)</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#10b981', margin: '0.5rem 0' }}>
                {totalEmissions} <span style={{ fontSize: '1rem', color: '#94a3b8' }}>kg CO2e</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#cbd5e1', paddingTop: '1rem', borderTop: '1px solid #334155' }}>Cálculo: {liters} L × {currentFactor} (Fator {fuelType})</div>
            </div>

            {/* What-If Mitigations */}
            <div style={{ backgroundColor: 'white', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--color-text-main)', marginBottom: '1rem' }}>
                <TrendingDown size={18} color="#eab308" /> Gerenciador de Cenários
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', paddingBottom: '0.5rem', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Meta 2025 (-10%)</span>
                <strong>{calculateMitigation(0.10)} kg</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', padding: '0.5rem 0', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Meta 2030 (-30%)</span>
                <strong>{calculateMitigation(0.30)} kg</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', paddingTop: '0.5rem' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Net Zero 2050 (-100%)</span>
                <strong style={{ color: '#10b981' }}>0.00 kg</strong>
              </div>
            </div>

          </div>

        </div>

        <div className={`${styles.successBox} animate-fade-in`} style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <CheckCircle2 size={24} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <strong>Engenharia Inteligente!</strong> Veja como as Emissões de "Etanol" ou "Biodiesel" caem drasticamente comparado ao Diesel com o exato mesmo uso de 1000 Litros. Com o Fator isolado pelo PROCV, a troca de combustível no painel altera as predições futuras da corporação em um único clique!
          </div>
        </div>

      </div>
    </div>
  );
};

export default CarbonScenario;
