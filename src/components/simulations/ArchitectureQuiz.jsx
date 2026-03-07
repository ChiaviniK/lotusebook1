import { useState } from 'react';
import { Settings, CheckCircle } from 'lucide-react';
import styles from './Simulations.module.css';

const ArchitectureQuiz = () => {
  const [answers, setAnswers] = useState({ q1: null, q2: null, q3: null });
  
  const handleSelect = (q, tool) => {
    setAnswers(prev => ({ ...prev, [q]: tool }));
  };

  const isComplete = answers.q1 && answers.q2 && answers.q3;

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <Settings size={24} color="#f39c12" /> 
          Prática 4.1: Arquiteto de Dados Ambientais
        </h3>
        <p className={styles.simDesc}>
          Nem toda ferramenta serve para tudo. Escolha a solução ideal para cada desafio (Excel, PowerBI ou Python/R).
        </p>
      </div>

      <div className={styles.simContent}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Question 1 */}
          <div style={{ backgroundColor: 'var(--color-bg)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
            <p style={{ fontWeight: 500, margin: '0 0 1rem 0' }}>1. "Preciso processar um histórico de satélite com 15 milhões de linhas."</p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {['Excel', 'PowerBI', 'Python/R'].map(tool => (
                <button 
                  key={tool}
                  onClick={() => handleSelect('q1', tool)}
                  style={{ 
                    flex: 1, padding: '0.5rem', borderRadius: '4px', border: '1px solid', cursor: 'pointer', transition: 'all 0.2s',
                    backgroundColor: answers.q1 === tool ? 'var(--color-primary)' : 'white',
                    color: answers.q1 === tool ? 'white' : 'var(--color-text-main)',
                    borderColor: answers.q1 === tool ? 'var(--color-primary)' : 'var(--color-border)'
                  }}
                >
                  {tool}
                </button>
              ))}
            </div>
            {answers.q1 && (
              <p style={{ fontSize: '0.875rem', marginTop: '0.75rem', color: answers.q1 === 'Python/R' ? 'var(--color-secondary)' : '#e74c3c' }}>
                {answers.q1 === 'Python/R' ? 'Correto! O Excel trava acima de 1M de linhas. Scripts em Python lidam com Big Data facilmente.' : 'Incorreto. Essa ferramenta vai travar com esse volume de dados.'}
              </p>
            )}
          </div>

          {/* Question 2 */}
          <div style={{ backgroundColor: 'var(--color-bg)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
            <p style={{ fontWeight: 500, margin: '0 0 1rem 0' }}>2. "A prefeitura quer um painel visual atualizado diariamente para ver onde faltou água."</p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {['Excel', 'PowerBI', 'Python/R'].map(tool => (
                <button 
                  key={tool}
                  onClick={() => handleSelect('q2', tool)}
                  style={{ 
                    flex: 1, padding: '0.5rem', borderRadius: '4px', border: '1px solid', cursor: 'pointer', transition: 'all 0.2s',
                    backgroundColor: answers.q2 === tool ? 'var(--color-primary)' : 'white',
                    color: answers.q2 === tool ? 'white' : 'var(--color-text-main)',
                    borderColor: answers.q2 === tool ? 'var(--color-primary)' : 'var(--color-border)'
                  }}
                >
                  {tool}
                </button>
              ))}
            </div>
            {answers.q2 && (
              <p style={{ fontSize: '0.875rem', marginTop: '0.75rem', color: answers.q2 === 'PowerBI' ? 'var(--color-secondary)' : '#e74c3c' }}>
                {answers.q2 === 'PowerBI' ? 'Exato. Criação de Dashboards interativos (Business Intelligence) é a força dessas plataformas.' : 'Apesar de possível, usar essa ferramenta exigiria muito esforço desnecessário para o usuário final que quer apenas "clicar e ver".'}
              </p>
            )}
          </div>

          {/* Question 3 */}
          <div style={{ backgroundColor: 'var(--color-bg)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
            <p style={{ fontWeight: 500, margin: '0 0 1rem 0' }}>3. "Coletei 50 amostras de solo hoje e quero só anotar rapidamente antes de ir pra casa."</p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {['Excel', 'PowerBI', 'Python/R'].map(tool => (
                <button 
                  key={tool}
                  onClick={() => handleSelect('q3', tool)}
                  style={{ 
                    flex: 1, padding: '0.5rem', borderRadius: '4px', border: '1px solid', cursor: 'pointer', transition: 'all 0.2s',
                    backgroundColor: answers.q3 === tool ? 'var(--color-primary)' : 'white',
                    color: answers.q3 === tool ? 'white' : 'var(--color-text-main)',
                    borderColor: answers.q3 === tool ? 'var(--color-primary)' : 'var(--color-border)'
                  }}
                >
                  {tool}
                </button>
              ))}
            </div>
            {answers.q3 && (
              <p style={{ fontSize: '0.875rem', marginTop: '0.75rem', color: answers.q3 === 'Excel' ? 'var(--color-secondary)' : '#e74c3c' }}>
                {answers.q3 === 'Excel' ? 'Correto! Planilhas são imbatíveis para digitação rápida e *data entry* em volumes pequenos.' : 'Um canhão para matar uma mosca. Aqui precisávamos de velocidade de digitação.'}
              </p>
            )}
          </div>

        </div>

        {isComplete && answers.q1 === 'Python/R' && answers.q2 === 'PowerBI' && answers.q3 === 'Excel' && (
          <div style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <CheckCircle size={24} />
            <strong>Visão Arquitetural Perfeita! Você economizou tempo e dinheiro do seu departamento ambiental.</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArchitectureQuiz;
