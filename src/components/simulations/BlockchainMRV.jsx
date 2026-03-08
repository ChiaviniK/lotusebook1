import React, { useState } from 'react';
import { Database, Link, CheckCircle, FileText, ArrowDown } from 'lucide-react';
import styles from '../ebook/Chapter.module.css';

const BlockchainMRV = () => {
  const [stages, setStages] = useState(0);

  const blockData = [
    { title: "Projeto Florestal (Verra)", desc: "100 Mil hectares de Amazônia são certificados com 10.000 ton abatidas.", active: stages >= 1 },
    { title: "Geração de Hash Único", desc: "Os laudos matemáticos geram a chave '0x8F9B2...' de lastro imutável na rede Celo.", active: stages >= 2 },
    { title: "Compra Varejista", desc: "Agência de Viagens Latam compra 500 Toneladas do Token para neutralizar aviões.", active: stages >= 3 },
    { title: "Aposentadoria (Burn)", desc: "O Lote de 500T é destruído digitalmente. Nunca poderá ser vendido para a C&A novamente.", active: stages >= 4 }
  ];

  const advanceStage = () => {
     if (stages < 4) setStages(prev => prev + 1);
  };

  const resetCode = () => {
     setStages(0);
  }

  return (
    <div className={styles.simulationWrapper}>
       <div className={styles.simHeader}>
          <h4>Arquitetura Web3 de Crédito Confiável</h4>
          <p>Avance o processo para entender como o Blockchain impede a Fraude da Dupla-Contagem de carbono.</p>
       </div>

       <div style={{ display: 'flex', flexDirection: 'column', padding: '2rem', alignItems: 'center', background: 'var(--color-bg)', borderRadius: '12px', border: '1px solid var(--color-border)', marginBottom: '1.5rem' }}>
          
          {blockData.map((block, idx) => (
             <React.Fragment key={idx}>
               <div style={{ 
                  width: '100%', maxWidth: '400px', padding: '1.5rem', 
                  backgroundColor: block.active ? 'var(--color-surface)' : 'transparent',
                  border: `2px solid ${block.active ? (idx === 3 ? '#ef4444' : 'var(--color-primary)') : 'var(--color-border)'}`,
                  borderRadius: '12px', transition: 'all 0.5s ease',
                  opacity: block.active ? 1 : 0.4
               }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                     {idx === 0 && <FileText size={24} color={block.active ? 'var(--color-primary)' : 'gray'} />}
                     {idx === 1 && <Database size={24} color={block.active ? 'var(--color-primary)' : 'gray'} />}
                     {idx === 2 && <Link size={24} color={block.active ? '#3b82f6' : 'gray'} />}
                     {idx === 3 && <CheckCircle size={24} color={block.active ? '#ef4444' : 'gray'} />}
                     <h4 style={{ margin: 0, color: 'var(--color-text-main)' }}>{block.title}</h4>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                     {block.desc}
                  </p>
               </div>
               
               {idx < 3 && (
                 <ArrowDown 
                    size={32} 
                    color={stages > idx ? "var(--color-primary)" : "var(--color-border)"} 
                    style={{ margin: '1rem 0', transition: 'all 0.5s ease' }}
                 />
               )}
             </React.Fragment>
          ))}

       </div>

       <button 
          onClick={stages === 4 ? resetCode : advanceStage}
          style={{ width: '100%', padding: '1rem', backgroundColor: stages === 4 ? 'var(--color-surface)' : 'var(--color-primary)', color: stages === 4 ? 'var(--color-text-main)' : 'white', border: stages === 4 ? '1px solid var(--color-border)' : 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
       >
          {stages === 4 ? 'Reiniciar Ciclo de Vida' : 'Processar Próximo Bloco na Rede'}
       </button>
    </div>
  );
};

export default BlockchainMRV;
