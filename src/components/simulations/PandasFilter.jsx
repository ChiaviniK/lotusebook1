import React, { useState } from 'react';
import { Filter, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const PandasFilter = () => {
  const [operator, setOperator] = useState('selecione');
  const [value, setValue] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const df = [
    { uf: 'SP', bioma: 'Mata Atlântica', desmatamento: 15 },
    { uf: 'AM', bioma: 'Amazônia', desmatamento: 940 },
    { uf: 'MT', bioma: 'Amazônia', desmatamento: 1205 },
    { uf: 'BA', bioma: 'Caatinga', desmatamento: 55 },
    { uf: 'RO', bioma: 'Amazônia', desmatamento: 480 },
  ];

  const filteredDf = df.filter(row => {
    if (operator === 'selecione') return true; // Show all by default
    
    if (operator === '==' && value.toLowerCase() === 'amazônia') {
      return row.bioma.toLowerCase() === 'amazônia';
    }
    if (operator === '>' && parseInt(value) === 500) {
      return row.desmatamento > 500;
    }
    
    // Fallback simple filter logic
    if (operator === '==') return row.bioma.toLowerCase() === value.toLowerCase();
    if (operator === '>') return row.desmatamento > parseInt(value || 0);
    return true;
  });

  const checkLogic = () => {
    if (operator === '==' && value.toLowerCase() === 'amazônia') {
       setIsSuccess(true);
       confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } else {
       setIsSuccess(false);
    }
  };

  return (
    <div style={{
      backgroundColor: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: '8px',
      padding: '2rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--color-text-main)' }}>
           O Poder do Filtro: Máscaras Pandas
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
          Você tem um Dataset do Brasil inteiro. Monte a equação booleana abaixo para focar sua análise **exclusivamente no bioma Amazônia**.
        </p>
      </div>

      {/* Editor de Código Visual */}
      <div style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', fontFamily: '"Fira Code", monospace', fontSize: '1.1rem' }}>
         <span style={{ color: '#bae6fd' }}>df_filtrado</span>
         <span style={{ color: '#fff' }}>=</span>
         <span style={{ color: '#bae6fd' }}>df</span>
         <span style={{ color: '#fff' }}>[</span>
         <span style={{ color: '#bae6fd' }}>df</span>
         <span style={{ color: '#fff' }}>[</span>
         <span style={{ color: '#fca5a5' }}>"bioma"</span>
         <span style={{ color: '#fff' }}>]</span>
         
         <select 
           value={operator}
           onChange={(e) => { setOperator(e.target.value); setIsSuccess(false); }}
           style={{ backgroundColor: '#334155', color: '#fbbf24', border: '1px solid #475569', borderRadius: '4px', padding: '0.2rem 0.5rem', fontFamily: 'inherit', fontWeight: 'bold' }}
         >
           <option value="selecione" disabled>?</option>
           <option value="==">==</option>
           <option value="!=">!=</option>
           <option value=">">&gt;</option>
         </select>
         
         <input 
           type="text" 
           value={value}
           onChange={(e) => { setValue(e.target.value); setIsSuccess(false); }}
           placeholder='"Nome do Bioma"'
           style={{ backgroundColor: '#334155', color: '#a7f3d0', border: '1px solid #475569', borderRadius: '4px', padding: '0.2rem 0.5rem', fontFamily: 'inherit', width: '180px' }}
         />
         
         <span style={{ color: '#fff' }}>]</span>
         
         <button 
           onClick={checkLogic}
           style={{ marginLeft: 'auto', backgroundColor: '#3b82f6', color: 'white', border: 'none', padding: '0.4rem 1rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
         >
            <Filter size={16} /> Aplicar Filtro
         </button>
      </div>

      {/* Tabela de Retorno */}
      <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead style={{ backgroundColor: '#e2e8f0', color: '#475569', fontSize: '0.9rem' }}>
            <tr>
              <th style={{ padding: '0.75rem 1rem', borderBottom: '2px solid #cbd5e1' }}>UF</th>
              <th style={{ padding: '0.75rem 1rem', borderBottom: '2px solid #cbd5e1' }}>Bioma</th>
              <th style={{ padding: '0.75rem 1rem', borderBottom: '2px solid #cbd5e1' }}>Desmatamento (km²)</th>
            </tr>
          </thead>
          <tbody>
            {filteredDf.length > 0 ? (
              filteredDf.map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: isSuccess ? '#ecfdf5' : 'white', transition: 'background-color 0.3s' }}>
                  <td style={{ padding: '0.75rem 1rem', color: '#334155' }}>{row.uf}</td>
                  <td style={{ padding: '0.75rem 1rem', color: '#334155', fontWeight: 'bold' }}>{row.bioma}</td>
                  <td style={{ padding: '0.75rem 1rem', color: '#ef4444' }}>{row.desmatamento}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{ padding: '2rem', textAlign: 'center', color: '#94a3b8', fontStyle: 'italic' }}>Nenhum dado atende à essa máscara booleana.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {isSuccess && (
        <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#dcfce7', border: '1px solid #bbf7d0', borderRadius: '6px', color: '#166534', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
          <CheckCircle2 /> Missão Cumprida! O DataFrame original foi reduzido de 5 para apenas {filteredDf.length} linhas, mantendo o foco exclusivo na Amazônia.
        </div>
      )}

    </div>
  );
};

export default PandasFilter;
