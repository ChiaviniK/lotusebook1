import React, { useState, useEffect } from 'react';
import { TreePine, Axe, ShieldPlus, Leaf } from 'lucide-react';
import styles from '../ebook/Chapter.module.css';

const ReddPlusCalc = () => {
   // State: Array of 20 "Plots" of forest.
   const [plots, setPlots] = useState(Array(20).fill('intact')); // intact, protected, deforested
   const [credits, setCredits] = useState(0);

   const intactCount = plots.filter(p => p === 'intact').length;
   const protectedCount = plots.filter(p => p === 'protected').length;
   const destroyedCount = plots.filter(p => p === 'deforested').length;

   const handleAction = (index, action) => {
      const current = plots[index];
      const newPlots = [...plots];

      if (action === 'protect' && current === 'intact') {
         newPlots[index] = 'protected';
         setCredits(prev => prev + 50); // Each protected plot generates +50 Credits
      } else if (action === 'deforest' && current === 'intact') {
         newPlots[index] = 'deforested';
         // Deforested emits CO2, no credits
      } else if (action === 'deforest' && current === 'protected') {
         // Illegal deforestation!
         newPlots[index] = 'deforested';
         setCredits(prev => prev - 100); // Heavy penalty
      }

      setPlots(newPlots);
   };

   return (
      <div className={styles.simulationWrapper}>
         <div className={styles.simHeader}>
            <h4>Canvas REDD+ (Proteção de Fronteiras)</h4>
            <p>Clique nas parcelas: 🛡️ Proteja e gere créditos ou 🪓 Desmate e perca dinheiro.</p>
         </div>

         <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
               <TreePine size={24} color="#10b981" />
               <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Livres ({intactCount})</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
               <ShieldPlus size={24} color="#3b82f6" />
               <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Protegido ({protectedCount})</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
               <Axe size={24} color="#ef4444" />
               <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Perdido ({destroyedCount})</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
               <Leaf size={24} color={credits >= 0 ? "#10b981" : "#ef4444"} />
               <span style={{ fontSize: '1rem', fontWeight: 'bold', color: credits >= 0 ? "#10b981" : "#ef4444" }}>CRVE: {credits}t</span>
            </div>
         </div>

         <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(5, 1fr)', 
            padding: '1.5rem', 
            gap: '0.5rem', 
            backgroundColor: '#022c22', 
            borderRadius: '0 0 12px 12px' 
         }}>
            {plots.map((status, idx) => (
               <div key={idx} style={{ position: 'relative', aspectRatio: '1', borderRadius: '8px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: status === 'intact' ? '#065f46' : status === 'protected' ? '#0ea5e9' : '#78350f' }}>
                  
                  {status === 'intact' && <TreePine size={32} color="#34d399" />}
                  {status === 'protected' && <ShieldPlus size={32} color="white" />}
                  {status === 'deforested' && <Axe size={32} color="#fbbf24" />}

                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex' }}>
                     {(status === 'intact' || status === 'protected') && (
                        <button 
                           onClick={() => handleAction(idx, 'deforest')}
                           style={{ flex: 1, padding: '0.2rem', backgroundColor: '#ef4444', border: 'none', color: 'white', cursor: 'pointer', fontSize: '0.7rem' }}
                        >
                           Cortar
                        </button>
                     )}
                     {status === 'intact' && (
                        <button 
                           onClick={() => handleAction(idx, 'protect')}
                           style={{ flex: 1, padding: '0.2rem', backgroundColor: '#3b82f6', border: 'none', color: 'white', cursor: 'pointer', fontSize: '0.7rem' }}
                        >
                           Proteção REDD
                        </button>
                     )}
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default ReddPlusCalc;
