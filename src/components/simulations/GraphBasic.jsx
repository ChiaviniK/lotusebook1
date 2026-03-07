import { useState } from 'react';
import { BarChart3, ChevronRight } from 'lucide-react';
import styles from './Simulations.module.css';

const GraphBasic = () => {
  const [showGraph, setShowGraph] = useState(false);

  // Dados Ficticios Simples
  const monthlyData = [
    { month: 'Jan', value: 40 },
    { month: 'Fev', value: 30 },
    { month: 'Mar', value: 85 }, // Pico das chuvas
    { month: 'Abr', value: 50 },
  ];

  const maxVal = Math.max(...monthlyData.map(d => d.value));

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <BarChart3 size={24} color="#ec4899" /> 
          Prática 1.4: O Poder Visual (Do Número à Barra)
        </h3>
        <p className={styles.simDesc}>
          Nenhum diretor lê tabelas complexas. A ferramenta mágica do "Inserir Gráfico" do Excel transforma instantaneamente "Boring Data" em uma história imediata.
        </p>
      </div>

      <div className={styles.simContent}>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'center' }}>
          
          {/* Tabela Morta */}
          <div style={{ backgroundColor: 'white', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '1rem', minWidth: '200px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
            <h4 style={{ margin: '0 0 1rem 0', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Os Dados "Frios"</h4>
            
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                  <th style={{ padding: '0.5rem' }}>Mês</th>
                  <th style={{ padding: '0.5rem' }}>Chuva (mm)</th>
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((d, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '0.5rem' }}>{d.month}</td>
                    <td style={{ padding: '0.5rem', fontFamily: 'monospace' }}>{d.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Eixo de Transformação */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <button 
              onClick={() => setShowGraph(true)}
              className={styles.btnPrimary} 
              style={{ backgroundColor: showGraph ? '#10b981' : 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', transform: showGraph ? 'scale(0.95)' : 'scale(1)', transition: 'all 0.2s' }}
            >
              <BarChart3 size={20} />
              {showGraph ? 'Gráfico Gerado!' : 'Inserir Gráfico de Colunas'}
            </button>
            <ChevronRight size={32} color="var(--color-text-muted)" style={{ opacity: showGraph ? 1 : 0.3, transition: 'all 0.3s' }} />
          </div>

          {/* Gráfico Vivo */}
          <div style={{ 
            backgroundColor: 'white', border: '1px dashed var(--color-border)', borderRadius: '8px', padding: '1.5rem', 
            minWidth: '250px', height: '200px', display: 'flex', alignItems: 'flex-end', gap: '1rem',
            boxShadow: showGraph ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none',
            borderStyle: showGraph ? 'solid' : 'dashed',
            borderColor: showGraph ? '#e2e8f0' : '#cbd5e1',
            transition: 'all 0.5s ease-out',
            opacity: showGraph ? 1 : 0.3
          }}>
            {showGraph ? (
               monthlyData.map((d, i) => {
                 const heightPct = (d.value / maxVal) * 100;
                 return (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', height: '100%', justifyContent: 'flex-end' }}>
                      <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold' }}>{d.value}</span>
                      <div className="animate-slide-up" style={{ 
                        width: '100%', 
                        height: `${heightPct}%`, 
                        backgroundColor: d.value > 80 ? '#3b82f6' : '#93c5fd', // Highlight the highest
                        borderRadius: '4px 4px 0 0',
                        transition: 'height 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                      }}></div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--color-text-main)' }}>{d.month}</span>
                    </div>
                 )
               })
            ) : (
               <div style={{ width: '100%', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem', marginBottom: 'auto', marginTop: 'auto' }}>
                 Aguardando Injeção de Gráfico...
               </div>
            )}
          </div>

        </div>

        {showGraph && (
            <p className="animate-fade-in" style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
              Percebe como seu cérebro imediatamente encontrou o destaque em "Março"? <br/>Tabelas comunicam exatidão para técnicos. Gráficos comunicam **tendência para gestores**.
            </p>
        )}

      </div>
    </div>
  );
};

export default GraphBasic;
