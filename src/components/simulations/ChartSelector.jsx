import { useState } from 'react';
import { AreaChart, PieChart, BarChart } from 'lucide-react';
import styles from './Simulations.module.css';

const ChartSelector = () => {
  const [selectedChart, setSelectedChart] = useState(null);

  const charts = [
    { 
      id: 'pie', 
      name: 'Gráfico de Pizza', 
      icon: <PieChart size={32} />,
      status: 'error',
      feedback: 'Inadequado. O olho humano é péssimo em comparar ângulos 2D, e você tem 12 categorias. O gerente de ESG vai ficar confuso.',
      color: '#e74c3c'
    },
    { 
      id: 'line', 
      name: 'Gráfico de Linha', 
      icon: <AreaChart size={32} />,
      status: 'error',
      feedback: 'Inadequado. Apesar de ótimo para linha do tempo, aqui estamos falando de proporções estáticas de Biomas, não de anos.',
      color: '#e74c3c'
    },
    { 
      id: 'bar', 
      name: 'Gráfico de Barras Horizontais', 
      icon: <BarChart size={32} style={{ transform: 'rotate(90deg)' }} />,
      status: 'success',
      feedback: 'Excelente escolha! Barras horizontais acomodam textos longos (nomes dos estados) e permitem comparar os comprimentos das barras facilmente e sem viés.',
      color: 'var(--color-secondary)'
    }
  ];

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <AreaChart size={24} color="#3498db" /> 
          Prática 6.1: O Gráfico Ideal
        </h3>
        <p className={styles.simDesc}>
          <strong>Missão:</strong> Você tem uma tabela com o volume de emissão de CO2 para 12 estados diferentes no ano de 2026. 
          Qual gráfico você escolhe para a apresentação final?
        </p>
      </div>

      <div className={styles.simContent}>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {charts.map(chart => (
            <button
              key={chart.id}
              onClick={() => setSelectedChart(chart)}
              style={{
                flex: '1',
                minWidth: '200px',
                padding: '2rem 1rem',
                backgroundColor: selectedChart?.id === chart.id ? 'var(--color-bg)' : 'var(--color-surface)',
                border: `2px solid ${selectedChart?.id === chart.id ? chart.color : 'var(--color-border)'}`,
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                transition: 'all 0.2s',
                color: 'var(--color-text-main)'
              }}
            >
              <div style={{ color: selectedChart?.id === chart.id ? chart.color : 'var(--color-text-muted)' }}>
                {chart.icon}
              </div>
              <span style={{ fontWeight: 600 }}>{chart.name}</span>
            </button>
          ))}
        </div>

        {selectedChart && (
          <div style={{ 
            marginTop: '2rem', 
            padding: '1.5rem', 
            borderRadius: '8px', 
            backgroundColor: selectedChart.status === 'success' ? '#f0fdf4' : '#fef2f2',
            border: `1px solid ${selectedChart.status === 'success' ? '#bbf7d0' : '#fecaca'}`
          }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: selectedChart.color, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {selectedChart.status === 'success' ? '✓ Acertou na mosca!' : '✗ Cuidado com essa escolha'}
            </h4>
            <p style={{ margin: 0, color: 'var(--color-primary-dark)', lineHeight: 1.6 }}>
              {selectedChart.feedback}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChartSelector;
