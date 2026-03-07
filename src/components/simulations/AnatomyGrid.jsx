import { useState } from 'react';
import { MousePointerClick, CheckCircle2 } from 'lucide-react';
import styles from './Simulations.module.css';

const AnatomyGrid = () => {
  const [activeElement, setActiveElement] = useState(null); // 'row', 'col', 'cell', 'all'

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <MousePointerClick size={24} color="#3b82f6" /> 
          Prática 1.1: O Corpo do Excel
        </h3>
        <p className={styles.simDesc}>
          Uma planilha inteligente obedece leis fixas de arquitetura. Clique nos botões abaixo para iluminar as estruturas e entender como uma variável se cruza com uma amostra no mundo real.
        </p>
      </div>

      <div className={styles.simContent}>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          
          {/* Painel de Controle */}
          <div style={{ flex: 1, minWidth: '250px', display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>Explorador de Arquitetura</h4>
            
            <button 
              onClick={() => setActiveElement('col')}
              style={{ padding: '0.75rem', borderRadius: '6px', border: '2px solid #8b5cf6', backgroundColor: activeElement === 'col' ? '#ede9fe' : 'transparent', color: '#6d28d9', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s', textAlign: 'left' }}
            >
              1. Colunas (Variáveis)
            </button>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', paddingLeft: '0.5rem', marginTop: '-0.5rem' }}>Letras verticais. Ex: A Turbidez da água.</div>

            <button 
              onClick={() => setActiveElement('row')}
              style={{ padding: '0.75rem', borderRadius: '6px', border: '2px solid #10b981', backgroundColor: activeElement === 'row' ? '#d1fae5' : 'transparent', color: '#047857', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s', textAlign: 'left', marginTop: '0.5rem' }}
            >
              2. Linhas (Observações)
            </button>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', paddingLeft: '0.5rem', marginTop: '-0.5rem' }}>Números horizontais. Ex: A Amostra #3 do Rio.</div>

            <button 
              onClick={() => setActiveElement('cell')}
              style={{ padding: '0.75rem', borderRadius: '6px', border: '2px solid #eab308', backgroundColor: activeElement === 'cell' ? '#fef08a' : 'transparent', color: '#a16207', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s', textAlign: 'left', marginTop: '0.5rem' }}
            >
              3. A Célula (Interseção)
            </button>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', paddingLeft: '0.5rem', marginTop: '-0.5rem' }}>O Dado Cru. Onde a Coluna C encontra a Linha 3 (C3).</div>

            <button 
              onClick={() => setActiveElement('all')}
              style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #334155', backgroundColor: activeElement === 'all' ? '#1e293b' : 'transparent', color: activeElement === 'all' ? '#fff' : '#334155', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s', marginTop: '1rem' }}
            >
              Ver Tabela Completa
            </button>
          </div>

          {/* Grid Render */}
          <div style={{ flex: 2, minWidth: '300px', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '8px', overflow: 'hidden' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: '40px 100px 100px 100px', gridAutoRows: '40px', backgroundColor: '#f1f5f9', gap: '1px', borderBottom: '1px solid var(--color-border)' }}>
              {/* Header */}
              <div style={{ backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
              <div style={{ backgroundColor: activeElement === 'col' ? '#c4b5fd' : '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', transition: 'all 0.3s' }}>A</div>
              <div style={{ backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>B</div>
              <div style={{ backgroundColor: (activeElement === 'col' || activeElement === 'cell') ? '#c4b5fd' : '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', transition: 'all 0.3s' }}>C</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '40px 100px 100px 100px', gridAutoRows: '40px', backgroundColor: '#f1f5f9', gap: '1px', paddingBottom: '1px' }}>
              
              {/* Row 1 */}
              <div style={{ backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>1</div>
              <div style={{ backgroundColor: (activeElement === 'col' || activeElement === 'all') ? '#ede9fe' : 'white', display: 'flex', alignItems: 'center', paddingLeft: '0.5rem', transition: 'all 0.3s', fontSize: '0.85rem' }}>Amostra</div>
              <div style={{ backgroundColor: (activeElement === 'all') ? '#f8fafc' : 'white', display: 'flex', alignItems: 'center', paddingLeft: '0.5rem', transition: 'all 0.3s', fontSize: '0.85rem' }}>pH</div>
              <div style={{ backgroundColor: (activeElement === 'col' || activeElement === 'cell' || activeElement === 'all') ? '#ede9fe' : 'white', display: 'flex', alignItems: 'center', paddingLeft: '0.5rem', transition: 'all 0.3s', fontSize: '0.85rem' }}>Turbidez</div>

              {/* Row 2 */}
              <div style={{ backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>2</div>
              <div style={{ backgroundColor: (activeElement === 'col' || activeElement === 'all') ? '#ede9fe' : 'white', display: 'flex', alignItems: 'center', paddingLeft: '0.5rem', transition: 'all 0.3s', fontSize: '0.85rem' }}>Foz_Rio</div>
              <div style={{ backgroundColor: (activeElement === 'all') ? '#f8fafc' : 'white', display: 'flex', alignItems: 'center', paddingLeft: '0.5rem', transition: 'all 0.3s', fontSize: '0.85rem' }}>6.8</div>
              <div style={{ backgroundColor: (activeElement === 'col' || activeElement === 'cell' || activeElement === 'all') ? '#ede9fe' : 'white', display: 'flex', alignItems: 'center', paddingLeft: '0.5rem', transition: 'all 0.3s', fontSize: '0.85rem' }}>45</div>

              {/* Row 3 - The Highlighted Row */}
              <div style={{ backgroundColor: (activeElement === 'row' || activeElement === 'cell') ? '#6ee7b7' : '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', transition: 'all 0.3s' }}>3</div>
              <div style={{ backgroundColor: (activeElement === 'row' || activeElement === 'cell' || activeElement === 'col' || activeElement === 'all') ? ((activeElement === 'row' && activeElement !== 'col') ? '#d1fae5' : '#ede9fe') : 'white', display: 'flex', alignItems: 'center', paddingLeft: '0.5rem', transition: 'all 0.3s', fontSize: '0.85rem' }}>Lagoa_N</div>
              <div style={{ backgroundColor: (activeElement === 'row' || activeElement === 'cell' || activeElement === 'all') ? ((activeElement === 'row' && activeElement !== 'col') ? '#d1fae5' : '#f8fafc') : 'white', display: 'flex', alignItems: 'center', paddingLeft: '0.5rem', transition: 'all 0.3s', fontSize: '0.85rem' }}>7.2</div>
              <div style={{ 
                backgroundColor: activeElement === 'cell' ? '#fde047' : ((activeElement === 'row') ? '#d1fae5' : ((activeElement === 'col' || activeElement === 'all') ? '#ede9fe' : 'white')), 
                display: 'flex', alignItems: 'center', paddingLeft: '0.5rem', transition: 'all 0.3s', fontSize: '0.85rem',
                border: activeElement === 'cell' ? '2px solid #ca8a04' : 'none',
                fontWeight: activeElement === 'cell' ? 'bold' : 'normal',
                color: activeElement === 'cell' ? '#854d0e' : 'inherit'
              }}>120</div>

            </div>

          </div>
        </div>

        {activeElement === 'cell' && (
          <div className={`${styles.successBox} animate-fade-in`} style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <CheckCircle2 size={24} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong>Exatamente!</strong> O número <strong>120</strong> mora no endereço <strong>C3</strong>. Ele não é apenas um número solto no espaço, ele é a "Turbidez" (Coluna C) pertencente à "Lagoa_N" (Linha 3).
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AnatomyGrid;
