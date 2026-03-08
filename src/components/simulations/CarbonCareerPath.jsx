import React, { useState } from 'react';
import { Target, Search, Scale, Landmark, BrainCircuit, Users, HeartPulse, TreePine, MapPin } from 'lucide-react';
import styles from '../ebook/Chapter.module.css';

const questions = [
  { id: 1, text: "Onde você prefere trabalhar?", a: { text: "No Escritório/Faria Lima", trait: "corporate" }, b: { text: "No Campo/Florestas", trait: "field" } },
  { id: 2, text: "Qual ferramenta te atrai mais?", a: { text: "Planilhas Financeiras e Contratos Jurídicos", trait: "finance" }, b: { text: "Drones Lidar e Python Geoespacial", trait: "tech" } },
  { id: 3, text: "Sua motivação principal é:", a: { text: "Auditar fraudes e criar Regulamentações Rígidas", trait: "compliance" }, b: { text: "Gerar Créditos e negociar com Comunidades Locais", trait: "development" } }
];

const profiles = [
  { 
    id: "corporate_finance_compliance", title: "Auditor/Broker ESG Sênior", 
    desc: "O lobo de Wall Street Verde. Você trabalha no ar-condicionado de bancos lendo laudos do Verra. Vende lotes milionários de Carbono e aprova fundos de investimento limpos. Profissão super aquecida.", 
    icon: <Landmark size={48} color="#f59e0b"/>, color: "#fef3c7", border: "#f59e0b" 
  },
  { 
    id: "field_tech_development", title: "Desenvolvedor de Projetos REDD+ (NBS)", 
    desc: "Botas sujas de barro e drone na mochila. Você vai até a Amazônia mapear fazendas com Python, conversar com indígenas e estruturar o projeto biológico que vai gerar o token lá na Faria Lima.", 
    icon: <TreePine size={48} color="#10b981"/>, color: "#dcfce7", border: "#10b981" 
  },
  { 
    id: "corporate_tech_compliance", title: "Cientista de Dados Climático Web3", 
    desc: "O Hacker Verde. Você cria algoritmos preditivos satelitais ou escreve Contratos Inteligentes (Smart Contracts) em Blockchain para que as toneladas de carbono sejam imutáveis na CVM. Alta demanda global.", 
    icon: <BrainCircuit size={48} color="#3b82f6"/>, color: "#dbeafe", border: "#3b82f6" 
  },
  { 
    id: "field_finance_development", title: "Auditor de Campo (Verificador Terceiro)", 
    desc: "O Fiscal rigoroso. Você trabalha para a ONU ou verificadoras independentes. Viaja o mundo para bater de frente com a realidade dos projetos e checar se as planilhas financeiras de crédito batem com o desmatamento evitado.", 
    icon: <Scale size={48} color="#8b5cf6"/>, color: "#ede9fe", border: "#8b5cf6" 
  }
];

const CarbonCareerPath = () => {
   const [currentQ, setCurrentQ] = useState(0);
   const [traits, setTraits] = useState([]);

   const handleAnswer = (trait) => {
      const newTraits = [...traits, trait];
      setTraits(newTraits);
      setCurrentQ(prev => prev + 1);
   };

   const reset = () => {
      setCurrentQ(0);
      setTraits([]);
   };

   // Determine Result if finished
   let resultProfile = null;
   if (currentQ >= questions.length) {
      const traitString = traits.join('_');
      // Approximate matching
      resultProfile = profiles.find(p => p.id === traitString) || profiles[0]; // fallback
      
      // Fine-grained fallbacks if exact match fails
      if(traits.includes('field') && traits.includes('tech')) resultProfile = profiles[1];
      if(traits.includes('corporate') && traits.includes('tech')) resultProfile = profiles[2];
      if(traits.includes('field') && traits.includes('compliance')) resultProfile = profiles[3];
   }

   return (
    <div className={styles.simulationWrapper}>
       <div className={styles.simHeader}>
          <h4>A Grande Árvore de Profissões ESG</h4>
          <p>Faltam profissionais capacitados no Mercado Climático e sobram vagas milionárias. Faça o Quiz de Perfil.</p>
       </div>

       <div style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {currentQ < questions.length ? (
             <div style={{ width: '100%', maxWidth: '500px' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
                   Pergunta {currentQ + 1} de {questions.length}
                </div>
                
                <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-text-main)' }}>
                   {questions[currentQ].text}
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                   <button onClick={() => handleAnswer(questions[currentQ].a.trait)} style={{ padding: '1.5rem', background: 'var(--color-surface)', border: '1px solid var(--color-primary)', borderRadius: '12px', fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', color: 'var(--color-text-main)', transition: 'all 0.2s', fontWeight: 'bold' }}>
                      <Target size={24} color="var(--color-primary)"/> {questions[currentQ].a.text}
                   </button>
                   <button onClick={() => handleAnswer(questions[currentQ].b.trait)} style={{ padding: '1.5rem', background: 'var(--color-surface)', border: '1px solid var(--color-primary)', borderRadius: '12px', fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', color: 'var(--color-text-main)', transition: 'all 0.2s', fontWeight: 'bold' }}>
                      <Search size={24} color="var(--color-primary)" /> {questions[currentQ].b.text}
                   </button>
                </div>
             </div>
          ) : (
             <div style={{ width: '100%', maxWidth: '500px', backgroundColor: resultProfile.color, border: `2px solid ${resultProfile.border}`, borderRadius: '16px', padding: '2rem', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                   {resultProfile.icon}
                </div>
                <h2 style={{ color: resultProfile.border, margin: '0 0 1rem 0' }}>{resultProfile.title}</h2>
                <p style={{ color: '#1f2937', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                   {resultProfile.desc}
                </p>
                <button onClick={reset} style={{ padding: '1rem 2rem', background: 'white', color: resultProfile.border, border: `1px solid ${resultProfile.border}`, borderRadius: '8px', fontSize: '1.1rem', cursor: 'pointer', fontWeight: 'bold' }}>
                   Refazer Teste Vocacional
                </button>
             </div>
          )}

       </div>
    </div>
  );
};

export default CarbonCareerPath;
