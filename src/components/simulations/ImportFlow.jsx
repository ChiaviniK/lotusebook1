import { useState } from 'react';
import { FileDown, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import styles from './Simulations.module.css';

const ImportFlow = () => {
  const [step, setStep] = useState(1);
  const [delimiter, setDelimiter] = useState('none');
  
  // O texto RAW sujo do laboratório
  const rawData = "ID;Poluente;Concentracao_mgL;Status\n1;Zinco;2.4;Alerta\n2;Cobre;0.8;Normal\n3;Chumbo;5.1;Critico";

  const renderDataPreview = () => {
    if (delimiter === 'none' || delimiter === 'comma') {
      // Preview em bloco único, como se fosse 1 só coluna
      return (
        <div style={{ padding: '0.5rem', backgroundColor: 'white', border: '1px solid #cbd5e1', borderRadius: '4px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', fontSize: '0.85rem' }}>
          |{rawData.split('\n')[0]}|<br/>
          |{rawData.split('\n')[1]}|<br/>
          |{rawData.split('\n')[2]}|<br/>
          |{rawData.split('\n')[3]}|
        </div>
      );
    } else if (delimiter === 'semicolon') {
      // Preview explodido em tabela real
      const lines = rawData.split('\n');
      return (
        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#f1f5f9' }}>
              {lines[0].split(';').map((col, i) => (
                <th key={i} style={{ border: '1px solid #cbd5e1', padding: '0.5rem', textAlign: 'left' }}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {lines.slice(1).map((line, rowIdx) => (
              <tr key={rowIdx}>
                {line.split(';').map((cell, colIdx) => (
                  <td key={colIdx} style={{ border: '1px solid #cbd5e1', padding: '0.5rem' }}>
                     {colIdx === 3 ? (
                        <span style={{ 
                          backgroundColor: cell === 'Critico' ? '#fee2e2' : cell === 'Alerta' ? '#fef08a' : '#dcfce7',
                          color: cell === 'Critico' ? '#991b1b' : cell === 'Alerta' ? '#854d0e' : '#166534',
                          padding: '0.1rem 0.5rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold'
                        }} >{cell}</span>
                     ) : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )
    }
  };

  const nextStep = () => {
    if (step === 2 && delimiter !== 'semicolon') {
       // não avança se o delimiatador tiver errado, mas pra efeito didático a gente mostra
    }
    setStep(s => Math.min(s + 1, 3));
  };
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <FileDown size={24} color="#06b6d4" /> 
          Prática 1.5: Assistente de Importação
        </h3>
        <p className={styles.simDesc}>
          Um laboratório químico parceiro te enviou as análises de fumaça de chaminé em um arquivo de texto "TXT/CSV". No momento, todo o texto está preso em uma única coluna do Excel. Guie o assistente para quebrar o texto corrompido em Tabulações Limpas.
        </p>
      </div>

      <div className={styles.simContent}>
        
        {/* Mock Window Excel */}
        <div style={{ backgroundColor: '#f8fafc', border: '1px solid #94a3b8', borderRadius: '4px', overflow: 'hidden', maxWidth: '600px', margin: '0 auto', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
          
          {/* Mock Window Header */}
          <div style={{ backgroundColor: '#e2e8f0', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #cbd5e1' }}>
             <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#334155' }}>Assistente de Importação de Texto - Etapa {step} de 3</span>
             <div style={{ display: 'flex', gap: '4px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#facc15' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#22c55e' }}></div>
             </div>
          </div>

          <div style={{ padding: '1.5rem', minHeight: '300px', display: 'flex', flexDirection: 'column' }}>
            
            {step === 1 && (
              <div className="animate-fade-in" style={{ flex: 1 }}>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Como descreveria os dados recebidos? Escolha o tipo de arquivo que melhor descreve seus dados:</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '1rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', cursor: 'pointer' }}>
                    <input type="radio" checked readOnly/> <strong>Delimitado</strong> - Caracteres como vírgulas ou tabulações separam cada campo.
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#94a3b8', cursor: 'not-allowed' }}>
                    <input type="radio" disabled /> <strong>Largura Fixa</strong> - Os campos estão alinhados em colunas com espaços entre cada campo.
                  </label>
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#64748b' }}>Visualização dos dados (Os dados estão "amassados" em uma só linha):</label>
                  <div style={{ marginTop: '0.5rem' }}>
                    {renderDataPreview()}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-slide-left" style={{ flex: 1 }}>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Esta tela permite que você defina os <strong>delimitadores</strong> (o caractere que quebra o texto em colunas). Como o laboratório enviou? Olhe o texto cru na visualização e adivinhe.</p>
                
                <div style={{ 
                  display: 'flex', gap: '1.5rem', padding: '1rem', border: '1px solid #cbd5e1', borderRadius: '4px', backgroundColor: 'white' 
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', cursor: 'pointer' }}>
                      <input type="radio" name="delim" checked={delimiter==='comma'} onChange={() => setDelimiter('comma')}/> Vírgula ( , )
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', cursor: 'pointer' }}>
                      <input type="radio" name="delim" checked={delimiter==='semicolon'} onChange={() => setDelimiter('semicolon')}/> Ponto e vírgula ( ; )
                    </label>
                  </div>
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#64748b' }}>Visualização dos dados da sua escolha:</label>
                  <div style={{ marginTop: '0.5rem', transition: 'all 0.3s' }}>
                    {renderDataPreview()}
                  </div>
                  
                  {delimiter === 'comma' && (
                    <div style={{ marginTop: '0.5rem', color: '#ef4444', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <AlertCircle size={14} /> Ops! A vírgula não explodiu nada. O texto cru tem 'ponto e vírgulas'. Troque!
                    </div>
                  )}
                </div>
              </div>
            )}

            {step === 3 && (
               <div className="animate-slide-left" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle2 size={64} color="#10b981" style={{ marginBottom: '1rem' }} />
                  <h4 style={{ color: '#065f46', marginBottom: '0.5rem' }}>Dados Importados com Sucesso!</h4>
                  <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#334155', maxWidth: '80%' }}>
                    Incrível! Você analisou os dados crus, identificou o caractere sujo (ponto e vírgula) e instruiu o Excel a quebrar o TXT criando uma Tabela Robusta pronta para Análise e Mineração.
                  </p>
               </div>
            )}

            {/* Mock Nav Footer */}
            <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #cbd5e1', display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
               <button 
                onClick={prevStep} disabled={step === 1 || step === 3}
                style={{ padding: '0.5rem 1rem', border: '1px solid #cbd5e1', backgroundColor: 'white', borderRadius: '4px', cursor: (step===1 || step===3) ? 'not-allowed' : 'pointer', opacity: (step===1 || step===3) ? 0.5 : 1 }}
               >
                 Voltar
               </button>
               {step < 3 ? (
                  <button 
                  onClick={nextStep} 
                  disabled={step === 2 && delimiter !== 'semicolon'}
                  style={{ 
                    padding: '0.5rem 1rem', border: 'none', backgroundColor: (step === 2 && delimiter !== 'semicolon') ? '#94a3b8' : '#0ea5e9', color: 'white', borderRadius: '4px', cursor: (step === 2 && delimiter !== 'semicolon') ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem'
                  }}
                 >
                   Avançar <ArrowRight size={16} />
                 </button>
               ) : (
                  <button 
                  onClick={() => { setStep(1); setDelimiter('none'); }}
                  style={{ padding: '0.5rem 1rem', border: 'none', backgroundColor: '#10b981', color: 'white', borderRadius: '4px', cursor: 'pointer' }}
                 >
                   Concluir Simulação
                 </button>
               )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ImportFlow;
