import React, { useState } from 'react';
import { Play, FileText, Code2, Plus } from 'lucide-react';

const ColabSimulator = () => {
  const [cells, setCells] = useState([
    { type: 'markdown', content: '# Análise de Emissões GEE\\nEsta é uma célula de texto puro (Markdown). Ela humaniza o relatório para o chefe de departamento.' },
    { type: 'code', content: 'print("Olá Mundo. Servidor do Google Colab Conectado!")', output: '' }
  ]);

  const runCode = (index) => {
    const newCells = [...cells];
    const code = newCells[index].content;
    
    // Fake simple eval for demonstration
    if (code.includes('print')) {
        const match = code.match(/print\((["'])(.*?)\1\)/);
        newCells[index].output = match ? match[2] : 'Error: Sintaxe Inválida';
    } else if (code.includes('import pandas as pd')) {
        newCells[index].output = 'Biblioteca estrutural Pandas instanciada com sucesso na RAM virtual.';
    } else {
        newCells[index].output = 'Executado (Sem retorno no console).';
    }
    
    setCells(newCells);
  };

  const addCell = (type) => {
    setCells([...cells, { type, content: type === 'code' ? '' : 'Clique para editar o texto...', output: '' }]);
  };

  const updateContent = (index, val) => {
    const newCells = [...cells];
    newCells[index].content = val;
    setCells(newCells);
  };

  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header Falso do Colab */}
      <div style={{ backgroundColor: '#ffffff', padding: '0.75rem 1rem', borderBottom: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ width: '32px', height: '32px', backgroundColor: '#f9ab00', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold' }}>CO</div>
        <div>
          <div style={{ fontWeight: '500', color: '#3c4043' }}>relatorio_desmatamento.ipynb</div>
          <div style={{ fontSize: '0.75rem', color: '#5f6368', marginTop: '2px', display: 'flex', gap: '0.8rem' }}>
             <span>Arquivo</span><span>Editar</span><span>Visualizar</span><span>Inserir</span><span>Ambiente de Execução</span>
          </div>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem' }}>
          <button style={{ border: '1px solid #dadce0', background: 'white', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', color: '#1a73e8', display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer' }}>
             RAM (12.7 MB) / Disco (30GB)
          </button>
        </div>
      </div>

      {/* Toolbar Falsa */}
      <div style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #e0e0e0', display: 'flex', gap: '0.5rem', backgroundColor: '#ffffff' }}>
         <button onClick={() => addCell('code')} style={{ border: 'none', background: 'transparent', display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#3c4043', fontSize: '0.85rem', cursor: 'pointer', padding: '0.4rem 0.6rem', borderRadius: '4px' }}>
            <Plus size={16} /> <Code2 size={16} /> Código
         </button>
         <button onClick={() => addCell('markdown')} style={{ border: 'none', background: 'transparent', display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#3c4043', fontSize: '0.85rem', cursor: 'pointer', padding: '0.4rem 0.6rem', borderRadius: '4px' }}>
            <Plus size={16} /> <FileText size={16} /> Texto
         </button>
      </div>

      {/* Celulas */}
      <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '400px', overflowY: 'auto' }}>
        <div style={{ fontSize: '0.9rem', color: '#5f6368', marginBottom: '0.5rem' }}>
           <strong>Sua missão:</strong> Edite a célula de código e digite <code style={{backgroundColor:'#e8eaed', padding:'2px 4px', borderRadius:'4px'}}>import pandas as pd</code> para instanciar as bibliotecas essenciais na nuvem do Google. Depois clique no Play!
        </div>

        {cells.map((cell, index) => (
          <div key={index} style={{ display: 'flex', gap: '0.5rem', position: 'relative' }}>
            
            {cell.type === 'code' && (
              <button 
                onClick={() => runCode(index)}
                style={{ 
                  width: '32px', height: '32px', borderRadius: '50%', border: 'none', backgroundColor: '#f1f3f4', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', flexShrink: 0, marginTop: '5px'
                }}
                title="Executar célula"
              >
                <Play size={16} color="#3c4043" />
              </button>
            )}
            
            <div style={{ flex: 1 }}>
              {cell.type === 'code' ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <div style={{ border: '1px solid #e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                     <textarea 
                        value={cell.content}
                        onChange={(e) => updateContent(index, e.target.value)}
                        style={{ width: '100%', border: 'none', backgroundColor: '#f8f9fa', padding: '0.8rem', fontFamily: '"Fira Code", monospace', fontSize: '0.9rem', color: '#202124', resize: 'vertical', minHeight: '60px' }}
                        spellCheck={false}
                     />
                  </div>
                  {cell.output && (
                    <div style={{ padding: '0.5rem 0.8rem', backgroundColor: 'white', borderLeft: '3px solid #34a853', fontSize: '0.85rem', color: '#202124', fontFamily: '"Fira Code", monospace', whiteSpace: 'pre-wrap' }}>
                      {cell.output}
                    </div>
                  )}
                </div>
              ) : (
                <div style={{ backgroundColor: 'white', border: '1px solid transparent', padding: '0.5rem', cursor: 'text' }}>
                   <textarea 
                        value={cell.content}
                        onChange={(e) => updateContent(index, e.target.value)}
                        style={{ width: '100%', border: 'none', padding: '0.5rem', fontFamily: 'inherit', fontSize: '1rem', color: '#202124', resize: 'vertical', minHeight: '60px', fontWeight: cell.content.startsWith('#') ? 'bold' : 'normal' }}
                    />
                </div>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ColabSimulator;
