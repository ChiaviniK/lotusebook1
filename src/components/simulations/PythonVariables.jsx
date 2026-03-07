import React, { useState } from 'react';
import { Package, Braces, List, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const PythonVariables = () => {
  const [listVal, setListVal] = useState('');
  const [tupleVal, setTupleVal] = useState('');
  const [dictVal, setDictVal] = useState('');

  const [validation, setValidation] = useState({ list: false, tuple: false, dict: false });

  const checkBlocks = () => {
    const listPass = listVal.includes('[') && listVal.includes(']');
    const tuplePass = tupleVal.includes('(') && tupleVal.includes(')');
    const dictPass = dictVal.includes('{') && dictVal.includes('}') && dictVal.includes(':');

    setValidation({ list: listPass, tuple: tuplePass, dict: dictPass });

    if (listPass && tuplePass && dictPass) {
       confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
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
           Laboratório de Estruturas: A Linguagem do Computador
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
          O Python guarda coleções de dados no bolso usando suportes específicos. Preencha os valores da Estação Meteorológica usando os colchetes, parênteses e chaves corretos das linguagens.
        </p>
      </div>

      <div style={{ display: 'grid', gap: '1rem', maxWidth: '600px', margin: '0 auto' }}>
        
        {/* LIST Célula */}
        <div style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '6px', border: validation.list ? '1px solid #22c55e' : '1px solid #cbd5e1', display: 'flex', alignItems: 'center', gap: '1rem' }}>
           <div style={{ padding: '0.5rem', backgroundColor: '#e2e8f0', borderRadius: '4px', color: '#475569' }}>
             <List size={24} />
           </div>
           <div style={{ flex: 1 }}>
             <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '0.3rem' }}>Lista (Mutável - Histórico de Temperaturas)</div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <code style={{ color: '#0369a1' }}>temperaturas_diarias = </code>
                <input 
                  type="text" 
                  value={listVal} 
                  onChange={e => setListVal(e.target.value)}
                  placeholder="Ex: [23.5, 24.1, 22.8]" 
                  style={{ flex: 1, padding: '0.4rem', border: '1px solid #94a3b8', borderRadius: '4px', fontFamily: 'monospace' }} 
                />
             </div>
           </div>
           {validation.list && <CheckCircle2 size={24} color="#22c55e" />}
        </div>

        {/* TUPLE Célula */}
        <div style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '6px', border: validation.tuple ? '1px solid #22c55e' : '1px solid #cbd5e1', display: 'flex', alignItems: 'center', gap: '1rem' }}>
           <div style={{ padding: '0.5rem', backgroundColor: '#e2e8f0', borderRadius: '4px', color: '#475569' }}>
             <Package size={24} />
           </div>
           <div style={{ flex: 1 }}>
             <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '0.3rem' }}>Tupla (Sagrada/Imutável - GPS do Sensor)</div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <code style={{ color: '#0369a1' }}>coordenadas_gps = </code>
                <input 
                  type="text" 
                  value={tupleVal} 
                  onChange={e => setTupleVal(e.target.value)}
                  placeholder="Ex: (-23.55, -46.63)" 
                  style={{ flex: 1, padding: '0.4rem', border: '1px solid #94a3b8', borderRadius: '4px', fontFamily: 'monospace' }} 
                />
             </div>
           </div>
           {validation.tuple && <CheckCircle2 size={24} color="#22c55e" />}
        </div>

        {/* DICT Célula */}
        <div style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '6px', border: validation.dict ? '1px solid #22c55e' : '1px solid #cbd5e1', display: 'flex', alignItems: 'center', gap: '1rem' }}>
           <div style={{ padding: '0.5rem', backgroundColor: '#e2e8f0', borderRadius: '4px', color: '#475569' }}>
             <Braces size={24} />
           </div>
           <div style={{ flex: 1 }}>
             <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '0.3rem' }}>Dicionário (Chave:Valor - Metadados do Sensor)</div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <code style={{ color: '#0369a1' }}>sensor_bio = </code>
                <input 
                  type="text" 
                  value={dictVal} 
                  onChange={e => setDictVal(e.target.value)}
                  placeholder="Ex: {'status': 'Ativo', 'bateria': 85}" 
                  style={{ flex: 1, padding: '0.4rem', border: '1px solid #94a3b8', borderRadius: '4px', fontFamily: 'monospace' }} 
                />
             </div>
           </div>
           {validation.dict && <CheckCircle2 size={24} color="#22c55e" />}
        </div>

      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
         <button 
           onClick={checkBlocks}
           style={{
             padding: '0.75rem 2rem',
             backgroundColor: 'var(--color-primary)',
             color: 'white',
             border: 'none',
             borderRadius: '6px',
             fontWeight: 'bold',
             cursor: 'pointer',
             boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
           }}
         >
           Executar Máquina Virtual (Shift+Enter)
         </button>
      </div>

    </div>
  );
};

export default PythonVariables;
