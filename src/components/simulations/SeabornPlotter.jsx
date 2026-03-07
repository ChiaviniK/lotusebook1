import React, { useState } from 'react';
import { BarChart3, Grid3X3, ArrowRight } from 'lucide-react';

const SeabornPlotter = () => {
  const [activeTab, setActiveTab] = useState('raw');
  
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
           O Poder do Seaborn (Visualização Científica)
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
          Matrizes de números não convencem Juízes. Selecione o código Python abaixo para converter 500 linhas de coleta florestal em provas visuais irrefutáveis.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
        <button 
          onClick={() => setActiveTab('raw')}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: activeTab === 'raw' ? '#1e293b' : 'var(--color-bg)',
            color: activeTab === 'raw' ? 'white' : 'var(--color-text-muted)',
            border: '1px solid var(--color-border)',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          <Grid3X3 size={18} style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }} />
          Dados Brutos
        </button>
        <button 
          onClick={() => setActiveTab('hist')}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: activeTab === 'hist' ? '#0ea5e9' : 'var(--color-bg)',
            color: activeTab === 'hist' ? 'white' : 'var(--color-text-muted)',
            border: '1px solid var(--color-border)',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          <BarChart3 size={18} style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }} />
          sns.histplot()
        </button>
      </div>

      <div style={{
        backgroundColor: '#f8fafc',
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {activeTab === 'raw' && (
           <div style={{ width: '100%', maxWidth: '400px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#475569', backgroundColor: 'white', padding: '1rem', border: '1px solid #cbd5e1', borderRadius: '4px' }}>
              <div style={{ fontWeight: 'bold', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                <span>ID_Arvore</span><span>Diametro_cm</span><span>Idade_Est</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.2rem 0' }}><span>#001</span><span>12.4</span><span>5</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.2rem 0' }}><span>#002</span><span>15.1</span><span>7</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.2rem 0' }}><span>#003</span><span>11.8</span><span>4</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.2rem 0' }}><span>#004</span><span>18.2</span><span>9</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.2rem 0' }}><span>#005</span><span>14.5</span><span>6</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.2rem 0' }}><span>...</span><span>...</span><span>...</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.2rem 0' }}><span>#500</span><span>13.3</span><span>6</span></div>
              <div style={{ marginTop: '1rem', color: '#94a3b8', fontStyle: 'italic', textAlign: 'center' }}>"É impossível entender a idade da floresta lendo 500 números soltos."</div>
           </div>
        )}

        {activeTab === 'hist' && (
           <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ backgroundColor: '#1e293b', color: '#38bdf8', padding: '0.5rem 1rem', borderRadius: '4px', fontFamily: 'monospace', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                sns.histplot(data=df, x="Diametro_cm", kde=True)
              </div>
              
              {/* Fake SVG Histogram with KDE curve */}
              <svg width="400" height="200" viewBox="0 0 400 200" style={{ overflow: 'visible' }}>
                {/* Axes */}
                <line x1="20" y1="180" x2="380" y2="180" stroke="#94a3b8" strokeWidth="2" />
                <line x1="20" y1="20" x2="20" y2="180" stroke="#94a3b8" strokeWidth="2" />
                <text x="200" y="210" fill="#64748b" fontSize="12" textAnchor="middle">Diâmetro (cm)</text>
                
                {/* Bars - Skewed left mimicking young forest */}
                <rect x="40" y="140" width="30" height="40" fill="#bae6fd" stroke="#0284c7" />
                <rect x="75" y="80" width="30" height="100" fill="#bae6fd" stroke="#0284c7" />
                <rect x="110" y="40" width="30" height="140" fill="#bae6fd" stroke="#0284c7" />
                <rect x="145" y="60" width="30" height="120" fill="#bae6fd" stroke="#0284c7" />
                <rect x="180" y="110" width="30" height="70" fill="#bae6fd" stroke="#0284c7" />
                <rect x="215" y="140" width="30" height="40" fill="#bae6fd" stroke="#0284c7" />
                <rect x="250" y="160" width="30" height="20" fill="#bae6fd" stroke="#0284c7" />
                <rect x="285" y="170" width="30" height="10" fill="#bae6fd" stroke="#0284c7" />
                <rect x="320" y="175" width="30" height="5" fill="#bae6fd" stroke="#0284c7" />

                {/* KDE Curve */}
                <path d="M 20 180 Q 55 130 90 90 T 125 50 T 160 80 T 230 150 T 350 178" fill="none" stroke="#0369a1" strokeWidth="3" />
              </svg>

              <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#0369a1', backgroundColor: '#e0f2fe', padding: '0.75rem', borderRadius: '6px', textAlign: 'center', maxWidth: '400px' }}>
                <strong>Inferência Automática:</strong> A curva densa à esquerda (Skewer) prova que a maioria esmagadora das árvores tem diâmetros finos (10~15cm). É clinicamente uma floresta cortada recentemente que está tentando se regenerar.
              </div>
           </div>
        )}
      </div>

    </div>
  );
};

export default SeabornPlotter;
