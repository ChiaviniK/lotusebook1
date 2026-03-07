import { useState } from 'react';
import { Lightbulb, CheckCircle2 } from 'lucide-react';
import styles from './Simulations.module.css';

const Chapter1Simulation = () => {
  const [subject, setSubject] = useState('');
  const [action, setAction] = useState('');
  const [location, setLocation] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerate = () => {
    if (subject && action && location) {
      setIsGenerated(true);
    }
  };

  const handleReset = () => {
    setSubject('');
    setAction('');
    setLocation('');
    setIsGenerated(false);
  };

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <Lightbulb size={24} color="var(--color-accent)" /> 
          Prática: O Mindset do Analista
        </h3>
        <p className={styles.simDesc}>
          Transforme uma dúvida vaga em uma pergunta de dados. Selecione as partes da sua hipótese abaixo.
        </p>
      </div>

      <div className={styles.simContent}>
        {!isGenerated ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>1. O que vamos analisar? (Sujeito)</label>
              <select 
                value={subject} 
                onChange={(e) => setSubject(e.target.value)}
                style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--color-border)' }}
              >
                <option value="">Selecione...</option>
                <option value="O desmatamento">O desmatamento</option>
                <option value="A emissão de carbono">A emissão de carbono</option>
                <option value="A qualidade da água">A qualidade da água</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>2. Qual a relação/tendência? (Ação/Métrica)</label>
              <select 
                value={action} 
                onChange={(e) => setAction(e.target.value)}
                style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--color-border)' }}
              >
                <option value="">Selecione...</option>
                <option value="aumentou em relação ao histórico de 10 anos">aumentou comparado ao passado</option>
                <option value="tem correlação com focos de incêndio">tem correlação com incêndios</option>
                <option value="diminuiu após políticas públicas">diminuiu após políticas</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>3. Onde? (Geografia)</label>
              <select 
                value={location} 
                onChange={(e) => setLocation(e.target.value)}
                style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--color-border)' }}
              >
                <option value="">Selecione...</option>
                <option value="na Bacia Amazônica">na Bacia Amazônica</option>
                <option value="no Cerrado brasileiro">no Cerrado</option>
                <option value="em unidades de conservação municipais">em áreas municipais</option>
              </select>
            </div>

            <button 
              className={styles.btnPrimary} 
              onClick={handleGenerate}
              disabled={!subject || !action || !location}
              style={{ marginTop: '1rem' }}
            >
              Gerar Pergunta Hipótese
            </button>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <CheckCircle2 size={48} color="var(--color-secondary)" style={{ margin: '0 auto', marginBottom: '1rem' }} />
            <h4 style={{ color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>Sua Pergunta de Dados:</h4>
            <div style={{ 
              fontSize: '1.25rem', 
              fontStyle: 'italic', 
              padding: '1rem', 
              backgroundColor: 'var(--color-bg)',
              borderLeft: '4px solid var(--color-primary)',
              marginBottom: '1.5rem',
              color: 'var(--color-text-main)'
            }}>
              "Existem evidências estatísticas de que <strong>{subject.toLowerCase()}</strong> <strong>{action}</strong> <strong>{location}</strong>?"
            </div>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
              Perfeito! Agora você não tem mais uma dúvida abstrata. Você tem variáveis claras (métrica de {subject.toLowerCase()}, série histórica/cruzamento) e um recorte geográfico ({location}) para buscar os datasets.
            </p>
            <button className={styles.btnSecondary} onClick={handleReset}>
              Tentar Outra
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chapter1Simulation;
