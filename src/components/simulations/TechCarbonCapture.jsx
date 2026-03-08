import React, { useState } from 'react';
import { Wind, Zap, Battery, Factory, CloudRain } from 'lucide-react';
import styles from '../ebook/Chapter.module.css';

const TechCarbonCapture = () => {
  const [energySource, setEnergySource] = useState('coal'); // coal, solar, wind, mix
  const [powerLevel, setPowerLevel] = useState(50);

  const getSourceStats = (source) => {
    switch (source) {
       case 'coal': return { emissionsPerUnit: 1.5, name: 'Termelétrica (Carvão)', color: '#ef4444' };
       case 'mix': return { emissionsPerUnit: 0.6, name: 'Grid Nacional do Governo', color: '#fbbf24' };
       case 'solar': return { emissionsPerUnit: 0.05, name: 'Fazenda Solar Dedicada', color: '#10b981' };
       case 'wind': return { emissionsPerUnit: 0.02, name: 'Parque Eólico Offshore', color: '#3b82f6' };
       default: return { emissionsPerUnit: 0, name: '', color: '' };
    }
  };

  const stats = getSourceStats(energySource);
  const carbonCaptured = powerLevel * 0.8; // Efficiency of DAC
  const carbonEmittedByPower = powerLevel * stats.emissionsPerUnit;
  const netCarbon = carbonCaptured - carbonEmittedByPower;
  const isViable = netCarbon > 0;

  return (
    <div className={styles.simulationWrapper}>
       <div className={styles.simHeader}>
          <h4>DAC: Paradoxo Energético Tecnológico</h4>
          <p>Se o Aspirador de Dióxido de Carbono (DAC) gastar muita energia suja para rodar os rotores, o projeto vira um Câncer Climático.</p>
       </div>

       <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>1. Fonte Alimentadora de Eletricidade (Vindo pela Tomada)</label>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
               <button onClick={() => setEnergySource('coal')} style={{ flex: 1, padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', border: energySource === 'coal' ? '2px solid #ef4444' : '1px solid var(--color-border)', borderRadius: '6px', background: 'var(--color-surface)', cursor: 'pointer' }}>
                  <Factory size={16} color="#ef4444"/> Carvão
               </button>
               <button onClick={() => setEnergySource('mix')} style={{ flex: 1, padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', border: energySource === 'mix' ? '2px solid #fbbf24' : '1px solid var(--color-border)', borderRadius: '6px', background: 'var(--color-surface)', cursor: 'pointer' }}>
                  <Battery size={16} color="#fbbf24"/> Grid Geral
               </button>
               <button onClick={() => setEnergySource('solar')} style={{ flex: 1, padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', border: energySource === 'solar' ? '2px solid #10b981' : '1px solid var(--color-border)', borderRadius: '6px', background: 'var(--color-surface)', cursor: 'pointer' }}>
                  <Zap size={16} color="#10b981"/> Solar
               </button>
               <button onClick={() => setEnergySource('wind')} style={{ flex: 1, padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', border: energySource === 'wind' ? '2px solid #3b82f6' : '1px solid var(--color-border)', borderRadius: '6px', background: 'var(--color-surface)', cursor: 'pointer' }}>
                  <Wind size={16} color="#3b82f6"/> Eólica
               </button>
            </div>
          </div>

          <div>
             <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>2. Potência da Máquina de Sucção DAC (0 a 100 Megawatts)</label>
             <input 
                 type="range" 
                 min="10" 
                 max="100" 
                 value={powerLevel} 
                 onChange={(e) => setPowerLevel(Number(e.target.value))}
                 style={{ width: '100%', accentColor: 'var(--color-primary)' }}
             />
          </div>

          <div style={{ backgroundColor: isViable ? '#dcfce7' : '#fee2e2', padding: '1.5rem', borderRadius: '8px', border: `1px solid ${isViable ? '#86efac' : '#fca5a5'}` }}>
             <h4 style={{ margin: '0 0 1rem 0', color: isViable ? '#166534' : '#991b1b', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CloudRain size={20} /> Balanço Líquido do Sistema 
             </h4>
             
             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Massa Sugada do Vento (Bom):</span>
                <span style={{ fontWeight: 'bold', color: '#10b981' }}>+ {carbonCaptured.toFixed(1)} tCO2</span>
             </div>
             
             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.9rem', paddingBottom: '0.5rem', borderBottom: '1px dashed var(--color-border)' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Custo Climático da Tomada ({stats.name}):</span>
                <span style={{ fontWeight: 'bold', color: '#ef4444' }}>- {carbonEmittedByPower.toFixed(1)} tCO2</span>
             </div>

             <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem' }}>
                <span style={{ fontWeight: 'bold', color: 'var(--color-text-main)' }}>Impacto Final Absoluto:</span>
                <span style={{ fontWeight: '900', color: isViable ? '#15803d' : '#b91c1c' }}>
                   {isViable ? '+' : ''}{netCarbon.toFixed(1)} tCO2
                </span>
             </div>

             {!isViable && (
                <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#b91c1c', fontWeight: 'bold' }}>
                   * Fracasso Financeiro. O seu projeto não está elegível a receber Créditos de Carbono pois a sua fonte suja de energia arruína o propósito da máquina.
                </div>
             )}
          </div>

       </div>
    </div>
  );
};

export default TechCarbonCapture;
