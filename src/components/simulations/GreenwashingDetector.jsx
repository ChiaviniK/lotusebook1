import React, { useState } from 'react';
import { ShieldAlert, CheckCircle2, AlertTriangle, ArrowLeft, ArrowRight } from 'lucide-react';
import styles from '../ebook/Chapter.module.css';

const cases = [
  { id: 1, text: "Marca X de Roupas: Lançamos uma nova camiseta de algodão biológico! (Mas continuamos queimando roupas não vendidas no atacado).", type: "greenwash", explanation: "Greenwashing Clássico. Eles destacam um produto verde minúsculo para esconder a prática insustentável no macro do negócio (Queima de Descarte)." },
  { id: 2, text: "Fábrica Cimento Y: Substituímos o coque de petróleo dos nossos fornos por biomassa certificada rastreável, gerando queda de 20% no Escopo 1.", type: "real", explanation: "Real. Mudança brutal no Core Business (Substituição de combustível fóssil) atrelada à queda rastreável na chaminé (Escopo 1)." },
  { id: 3, text: "Banco Z: Somos 100% Carbono Neutro nos nossos escritórios porque plantamos 5 mil árvores! (Mas a carteira do banco injeta US$ 500 Milhões em extração de petróleo).", type: "greenwash", explanation: "Greenwashing (Dissonância). A operação administrativa deles ser limpa não significa nada se a cadeia de financiamento deles sustenta indústrias extremamente emissoras (O famoso Escopo 3 Oculto)." },
  { id: 4, text: "Cia Aérea W: Neutralizamos nossos voos! Basta você pagar uma taxa de R$5 a mais na passagem que compramos os créditos por você.", type: "greenwash", explanation: "Greenwashing (Transferência de Culpa). Eles continuam poluindo igual, não investem em combustível sustentável (SAF) e o cliente é quem paga a conta do marketing deles." }
];

const GreenwashingDetector = () => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [score, setScore] = useState(0);
   const [feedback, setFeedback] = useState(null);
   const [isFinished, setIsFinished] = useState(false);

   const handleAttempt = (guessType) => {
      const currentCase = cases[currentIndex];
      const isCorrect = guessType === currentCase.type;

      if (isCorrect) setScore(prev => prev + 1);

      setFeedback({
         correct: isCorrect,
         realType: currentCase.type,
         explanation: currentCase.explanation
      });
   };

   const handleNext = () => {
      setFeedback(null);
      if (currentIndex < cases.length - 1) {
         setCurrentIndex(prev => prev + 1);
      } else {
         setIsFinished(true);
      }
   };

   const reset = () => {
      setCurrentIndex(0);
      setScore(0);
      setIsFinished(false);
      setFeedback(null);
   };

   if (isFinished) {
      return (
         <div className={styles.simulationWrapper}>
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
               <ShieldAlert size={64} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
               <h2>Auditoria Concluída!</h2>
               <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Você detectou {score} de {cases.length} casos corretamente.</p>
               <button onClick={reset} style={{ padding: '1rem 2rem', background: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1.1rem', cursor: 'pointer', fontWeight: 'bold' }}>Tentar Novamente</button>
            </div>
         </div>
      );
   }

   const currentCase = cases[currentIndex];

   return (
    <div className={styles.simulationWrapper}>
       <div className={styles.simHeader}>
          <h4>Tinder da Auditoria: Caça ao Greenwashing</h4>
          <p>O CEO diz que a empresa é verde? Analise a declaração. Jogue p/ Esquerda se for Fake (Greenwashing), Jogue p/ Direita se for Real!</p>
       </div>

       <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>Caso {currentIndex + 1} de {cases.length}</div>

          {!feedback ? (
             <>
                <div style={{ width: '100%', maxWidth: '400px', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '2rem', textAlign: 'center', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', minHeight: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-text-main)' }}>
                   "{currentCase.text}"
                </div>

                <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', width: '100%', justifyContent: 'center' }}>
                   <button onClick={() => handleAttempt('greenwash')} style={{ flex: 1, maxWidth: '180px', padding: '1.5rem 1rem', background: '#fee2e2', border: '2px solid #ef4444', borderRadius: '12px', color: '#b91c1c', cursor: 'pointer', fontWeight: 'bold', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                      <ArrowLeft size={24} /> É Greenwashing!
                   </button>
                   <button onClick={() => handleAttempt('real')} style={{ flex: 1, maxWidth: '180px', padding: '1.5rem 1rem', background: '#dcfce7', border: '2px solid #10b981', borderRadius: '12px', color: '#15803d', cursor: 'pointer', fontWeight: 'bold', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={24} /> É Ação Real
                   </button>
                </div>
             </>
          ) : (
             <div style={{ width: '100%', maxWidth: '500px', backgroundColor: feedback.correct ? '#dcfce7' : '#fee2e2', border: `2px solid ${feedback.correct ? '#10b981' : '#ef4444'}`, borderRadius: '12px', padding: '2rem', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                   {feedback.correct ? <CheckCircle2 size={48} color="#10b981" /> : <AlertTriangle size={48} color="#ef4444" />}
                </div>
                <h3 style={{ color: feedback.correct ? '#15803d' : '#b91c1c', margin: '0 0 1rem 0' }}>
                   {feedback.correct ? 'Você desmascarou perfeitamente!' : 'Você foi enganado pelo Marketing!'}
                </h3>
                <p style={{ color: 'var(--color-text-main)', fontSize: '1.1rem', lineHeight: 1.5, marginBottom: '2rem' }}>
                   {feedback.explanation}
                </p>
                <button onClick={handleNext} style={{ width: '100%', padding: '1rem', background: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1.1rem', cursor: 'pointer', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                   Avançar para o Próximo Caso <ArrowRight size={20}/>
                </button>
             </div>
          )}

       </div>
    </div>
  );
};

export default GreenwashingDetector;
