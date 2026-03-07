import { useState } from 'react';
import { FileCode, FileText, FileSpreadsheet } from 'lucide-react';
import styles from './Simulations.module.css';

const DataFormatQuiz = () => {
  const [answers, setAnswers] = useState({ slot1: null, slot2: null, slot3: null });
  
  const options = [
    { id: 'csv', text: 'Texto Puro e Leve delimitado por vírgulas ou ponto e vírgula', icon: <FileText size={18} /> },
    { id: 'json', text: 'Hierárquico com chaves e valores, padrão de APIs Webs', icon: <FileCode size={18} /> },
    { id: 'xlsx', text: 'Planilha Microsoft pesada contendo macros e cores/estilos', icon: <FileSpreadsheet size={18} /> }
  ];

  const handleSelect = (slotId, optionId) => {
    setAnswers(prev => ({ ...prev, [slotId]: optionId }));
  };

  const isComplete = answers.slot1 === 'json' && answers.slot2 === 'csv' && answers.slot3 === 'xlsx';

  const getStyle = (slotId, correctId) => {
    if (!answers[slotId]) return { borderColor: 'var(--color-border)' };
    return answers[slotId] === correctId 
      ? { borderColor: 'var(--color-secondary)', backgroundColor: '#f0fdf4' }
      : { borderColor: '#f87171', backgroundColor: '#fef2f2' };
  };

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <FileText size={24} color="#f39c12" /> 
          Prática 2.3: Anatomia de um Formato
        </h3>
        <p className={styles.simDesc}>
          De qual formato os trechos (Snippets) abaixo estão falando? Associe as caixas de seleção.
        </p>
      </div>

      <div className={styles.simContent}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
          
          {/* JSON Snipet */}
          <div style={{ border: '1px solid', ...getStyle('slot1', 'json'), padding: '1.25rem', borderRadius: '8px', display: 'flex', gap: '1rem', alignItems: 'center', transition: 'all 0.3s' }}>
            <div style={{ flex: 1, backgroundColor: '#1e1e1e', color: '#ce9178', padding: '1rem', borderRadius: '4px', fontFamily: 'monospace', fontSize: '0.85rem' }}>
              {"{\n  \"bacia\": \"Amazonas\",\n  \"sensores\": [\n    {\"id\": 102, \"status\": \"ativo\"}\n  ]\n}"}
            </div>
            <div style={{ flex: 1 }}>
              <select 
                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '0.9rem' }}
                value={answers.slot1 || ''}
                onChange={(e) => handleSelect('slot1', e.target.value)}
              >
                <option value="" disabled>Qual é este formato?</option>
                {options.map(opt => <option key={opt.id} value={opt.id}>{opt.id.toUpperCase()}</option>)}
              </select>
            </div>
          </div>

          {/* CSV Snipet */}
          <div style={{ border: '1px solid', ...getStyle('slot2', 'csv'), padding: '1.25rem', borderRadius: '8px', display: 'flex', gap: '1rem', alignItems: 'center', transition: 'all 0.3s' }}>
            <div style={{ flex: 1, backgroundColor: '#1e1e1e', color: '#dcdcaa', padding: '1rem', borderRadius: '4px', fontFamily: 'monospace', fontSize: '0.85rem' }}>
              bacia,sensor_id,status<br/>
              Amazonas,102,ativo<br/>
              Parana,404,inativo
            </div>
            <div style={{ flex: 1 }}>
              <select 
                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '0.9rem' }}
                value={answers.slot2 || ''}
                onChange={(e) => handleSelect('slot2', e.target.value)}
              >
                <option value="" disabled>Qual é este formato?</option>
                {options.map(opt => <option key={opt.id} value={opt.id}>{opt.id.toUpperCase()}</option>)}
              </select>
            </div>
          </div>

          {/* XLSX Explanation */}
          <div style={{ border: '1px solid', ...getStyle('slot3', 'xlsx'), padding: '1.25rem', borderRadius: '8px', display: 'flex', gap: '1rem', alignItems: 'center', transition: 'all 0.3s' }}>
            <div style={{ flex: 1, backgroundColor: '#fcfcfc', color: 'var(--color-text-main)', border: '1px solid #e2e8f0', padding: '1.5rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileSpreadsheet size={20} color="green" />  Arquivo Binário Compilado (Abre como "Planilha 1" com Logo da Empresa e Bordas Verdes)...
            </div>
            <div style={{ flex: 1 }}>
              <select 
                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '0.9rem' }}
                value={answers.slot3 || ''}
                onChange={(e) => handleSelect('slot3', e.target.value)}
              >
                <option value="" disabled>Qual é este formato?</option>
                {options.map(opt => <option key={opt.id} value={opt.id}>{opt.id.toUpperCase()}</option>)}
              </select>
            </div>
          </div>

        </div>

        {isComplete && (
          <div className={`${styles.successBox} animate-fade-in`}>
            <strong>Exatamente!</strong> O JSON domina as APIs Web, o CSV domina os relatórios analíticos massivos (+10GB), e o XLSX domina as apresentações de negócio na Suíte Office.
          </div>
        )}

      </div>
    </div>
  );
};

export default DataFormatQuiz;
