import { useState } from 'react';
import { LayoutDashboard, PieChart, BarChart2, Activity, CheckCircle2, TrendingDown } from 'lucide-react';
import styles from './Simulations.module.css';

const DashboardKpi = () => {
  const [activeTab, setActiveTab] = useState('energia');

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <LayoutDashboard size={24} color="#8b5cf6" /> 
          Prática 5.3: Consolidando em Dashboards
        </h3>
        <p className={styles.simDesc}>
          Um analista compila tabelas dinâmicas em uma "Camada de Layout" que chamamos de Dashboard. O tomador de decisão da diretoria só quer acessar os KPIs (Indicadores Chave), e não a sujeira dos dados.
        </p>
      </div>

      <div className={styles.simContent}>
        
        <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '8px', overflow: 'hidden' }}>
          
          {/* Header Dashboard Mock */}
          <div style={{ backgroundColor: '#1e293b', padding: '1.5rem', color: 'white' }}>
            <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold' }}>Painel ESG Corporativo</h4>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.2rem' }}>Resumo Mensal de Indicadores Ambientais</div>
          </div>

          {/* Slicers / Tabs Simulating Excel Segmentation */}
          <div style={{ display: 'flex', backgroundColor: '#f1f5f9', borderBottom: '1px solid var(--color-border)', padding: '0 1rem' }}>
            <button 
              onClick={() => setActiveTab('energia')}
              style={{ padding: '1rem', borderBottom: activeTab === 'energia' ? '3px solid #8b5cf6' : '3px solid transparent', backgroundColor: 'transparent', color: activeTab === 'energia' ? '#8b5cf6' : 'var(--color-text-muted)', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s', outline: 'none' }}
            >
              <Activity size={16} /> Energia e Gases
            </button>
            <button 
              onClick={() => setActiveTab('residuos')}
              style={{ padding: '1rem', borderBottom: activeTab === 'residuos' ? '3px solid #10b981' : '3px solid transparent', backgroundColor: 'transparent', color: activeTab === 'residuos' ? '#10b981' : 'var(--color-text-muted)', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s', outline: 'none' }}
            >
              <PieChart size={16} /> Resíduos Sólidos
            </button>
            <button 
              onClick={() => setActiveTab('agua')}
              style={{ padding: '1rem', borderBottom: activeTab === 'agua' ? '3px solid #3b82f6' : '3px solid transparent', backgroundColor: 'transparent', color: activeTab === 'agua' ? '#3b82f6' : 'var(--color-text-muted)', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s', outline: 'none' }}
            >
              <BarChart2 size={16} /> Recursos Hídricos
            </button>
          </div>

          {/* Canvas Área */}
          <div style={{ padding: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', backgroundColor: '#f8fafc', minHeight: '300px' }}>
            
            {activeTab === 'energia' && (
              <div className="animate-fade-in" style={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                <div style={{ flex: 1, minWidth: '200px', backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '0.5rem' }}>Gasto de Energia Mensal</div>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#1e293b' }}>450 <span style={{ fontSize: '1rem', color: '#94a3b8' }}>MWh</span></div>
                  <div style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}><TrendingDown size={14} className="rotate-180" /> +5% vs mês passado</div>
                </div>
                
                <div style={{ flex: 2, minWidth: '300px', backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '1.5rem' }}>Emissões Escopo 2 (Tendência)</div>
                  {/* Fake Bar Chart */}
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem', height: '100px', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                    <div style={{ width: '40px', height: '40%', backgroundColor: '#c4b5fd', borderRadius: '2px 2px 0 0' }}></div>
                    <div style={{ width: '40px', height: '60%', backgroundColor: '#c4b5fd', borderRadius: '2px 2px 0 0' }}></div>
                    <div style={{ width: '40px', height: '50%', backgroundColor: '#8b5cf6', borderRadius: '2px 2px 0 0' }}></div>
                    <div style={{ width: '40px', height: '80%', backgroundColor: '#c4b5fd', borderRadius: '2px 2px 0 0' }}></div>
                    <div style={{ width: '40px', height: '100%', backgroundColor: '#ef4444', borderRadius: '2px 2px 0 0', position: 'relative' }}>
                       <span style={{ position: 'absolute', top: '-25px', left: '-5px', fontSize: '0.7rem', fontWeight: 'bold', color: '#ef4444'}}>Alerta</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.7rem', color: 'var(--color-text-muted)', width: '220px' }}>
                    <span>Jan</span><span>Fev</span><span>Mar</span><span>Abr</span><span>Mai</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'residuos' && (
              <div className="animate-fade-in" style={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '1.5rem' }}>Índice de Reciclagem (Aterro Zero)</div>
                  
                  {/* Fake Donut Chart */}
                  <div style={{ width: '120px', height: '120px', borderRadius: '50%', border: '15px solid #10b981', borderTopColor: '#f1f5f9', borderRightColor: '#f1f5f9', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-45deg)' }}>
                    <span style={{ transform: 'rotate(45deg)', fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b' }}>75%</span>
                  </div>
                  
                  <div style={{ fontSize: '0.8rem', color: '#10b981', marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.2rem', justifyContent: 'center' }}><TrendingDown size={14} color="#10b981" /> Meta Cumprida</div>
                </div>
              </div>
            )}

            {activeTab === 'agua' && (
              <div className="animate-fade-in" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#94a3b8', fontSize: '0.9rem', fontStyle: 'italic' }}>
                Gráficos de reúso de água pendentes de aprovação pelo departamento técnico.
              </div>
            )}

          </div>

        </div>

        <div className={`${styles.successBox} animate-fade-in`} style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <CheckCircle2 size={24} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <strong>Poder da Decisão:</strong> Em excelentes relatórios corporativos elaborados no Power Point ou Power BI, todas as tabelas sujas e matrizes estressantes criadas pelos estagiários estão perfeitamente escondidas em outras abas invisíveis. Apenas a "arte" sobe de patamar hierárquico.
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardKpi;
