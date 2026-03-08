import React, { useState } from 'react';
import { Globe, Leaf, Flame, ArrowRight, ShieldCheck } from 'lucide-react';
import styles from '../ebook/Chapter.module.css';

const milestones = [
  { year: 1990, temp: "+0.4°C", event: "Início dos Debates Globais", desc: "A ONU começa a formular as bases do IPPC alertando sobre os GEEs." },
  { year: 1997, temp: "+0.6°C", event: "Protocolo de Quioto", desc: "Países ricos assumem as primeiras metas legais de redução e criam o rascunho do Mercado de Carbono (MDL)." },
  { year: 2005, temp: "+0.8°C", event: "Quioto Entra em Vigor", desc: "A Europa lança o ETS (Cap and Trade) virando o grande laboratório de testes climáticos financeiros." },
  { year: 2015, temp: "+1.1°C", event: "Acordo de Paris", desc: "Todos os países assumem NDCs para não ultrapassar +1.5°C acima da era pré-industrial." },
  { year: 2026, temp: "+1.4°C", event: "A Urgência ESG", desc: "Limiar Crítico. Boom das regulações corporativas para sequestros de carbono mandatórios." }
];

const KyotoTimeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeMilestone = milestones[currentIndex];

  const getThermoColor = (tempStr) => {
    const tempNum = parseFloat(tempStr.replace('+','').replace('°C',''));
    if (tempNum < 0.7) return '#4ade80'; // Green
    if (tempNum < 1.2) return '#fbbf24'; // Yellow
    return '#ef4444'; // Red
  };

  return (
    <div className={styles.simulationWrapper}>
       <div className={styles.simHeader}>
          <h4>Linha do Tempo Climática</h4>
          <p>Deslize o controle para ver o aquecimento em relação aos Pactos Globais.</p>
       </div>

       <div style={{ padding: '2rem 1rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <div style={{ textAlign: 'center' }}>
               <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-text-main)' }}>{activeMilestone.year}</div>
               <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Ano</div>
             </div>

             <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--color-bg)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                 <Flame size={24} color={getThermoColor(activeMilestone.temp)} />
                 <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: getThermoColor(activeMilestone.temp) }}>{activeMilestone.temp}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>Anomalia Térmica vs 1850</div>
                 </div>
             </div>
          </div>

          <div>
             <input 
               type="range" 
               min="0" 
               max={milestones.length - 1} 
               value={currentIndex}
               onChange={(e) => setCurrentIndex(Number(e.target.value))}
               style={{ width: '100%', cursor: 'pointer', accentColor: getThermoColor(activeMilestone.temp) }}
             />
             <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
                <span>1990</span>
                <span>2026+</span>
             </div>
          </div>

          <div style={{ backgroundColor: 'var(--color-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: `4px solid ${getThermoColor(activeMilestone.temp)}` }}>
             <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: 0, color: 'var(--color-text-main)' }}>
                {activeMilestone.year >= 2015 ? <ShieldCheck size={20} color="var(--color-primary)"/> : <Globe size={20} color="var(--color-text-muted)"/>}
                {activeMilestone.event}
             </h3>
             <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                {activeMilestone.desc}
             </p>
          </div>

       </div>
    </div>
  );
};

export default KyotoTimeline;
