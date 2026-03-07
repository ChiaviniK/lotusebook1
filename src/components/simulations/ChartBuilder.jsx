import { useState } from 'react';
import { BarChart, LineChart, PieChart, Activity, GripHorizontal, Play } from 'lucide-react';
import { useDrag, useDrop } from 'react-dnd';
import styles from './Simulations.module.css';

const ItemTypes = {
  VARIABLE: 'variable'
};

const DraggableVariable = ({ variable }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.VARIABLE,
    item: { id: variable.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return (
    <div 
      ref={drag}
      style={{ 
        padding: '0.5rem 1rem', 
        backgroundColor: variable.type === 'dimension' ? '#e0f2fe' : '#fce7f3', 
        color: variable.type === 'dimension' ? '#0369a1' : '#be185d',
        border: `1px solid ${variable.type === 'dimension' ? '#bae6fd' : '#fbcfe8'}`,
        borderRadius: '999px',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        cursor: 'grab',
        opacity: isDragging ? 0.5 : 1,
        display: 'flex', alignItems: 'center', gap: '0.3rem'
      }}
    >
      <GripHorizontal size={14} opacity={0.5} />
      {variable.label}
    </div>
  );
};

const ChartBuilder = () => {
  const [xAxis, setXAxis] = useState(null);
  const [yAxis, setYAxis] = useState(null);
  const [chartType, setChartType] = useState('bar');
  
  const [isRendered, setIsRendered] = useState(false);

  const variables = [
    { id: 'anos', label: 'Anos (Tempo)', type: 'dimension' },
    { id: 'biomas', label: 'Biomas', type: 'dimension' },
    { id: 'desmatamento', label: 'Desmatamento (ha)', type: 'measure' },
    { id: 'chuva', label: 'Pluviosidade (mm)', type: 'measure' }
  ];

  const [{ isOverX }, dropX] = useDrop(() => ({
    accept: ItemTypes.VARIABLE,
    drop: (item) => {
      setXAxis(variables.find(v => v.id === item.id));
      setIsRendered(false);
    },
    collect: (monitor) => ({
      isOverX: !!monitor.isOver()
    })
  }));

  const [{ isOverY }, dropY] = useDrop(() => ({
    accept: ItemTypes.VARIABLE,
    drop: (item) => {
      setYAxis(variables.find(v => v.id === item.id));
      setIsRendered(false);
    },
    collect: (monitor) => ({
      isOverY: !!monitor.isOver()
    })
  }));

  const handleRender = () => {
    if (xAxis && yAxis) setIsRendered(true);
  };

  const getChartVisual = () => {
    if (chartType === 'bar') {
      return (
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', height: '100%', padding: '1rem', borderBottom: '2px solid var(--color-border)', borderLeft: '2px solid var(--color-border)' }}>
          <div style={{ width: '40px', height: '30%', backgroundColor: 'var(--color-secondary)' }}></div>
          <div style={{ width: '40px', height: '80%', backgroundColor: 'var(--color-primary)' }}></div>
          <div style={{ width: '40px', height: '50%', backgroundColor: 'var(--color-accent)' }}></div>
          <div style={{ width: '40px', height: '100%', backgroundColor: '#f39c12' }}></div>
        </div>
      );
    } else if (chartType === 'line') {
      return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--color-primary)' }}>
          <Activity size={120} strokeWidth={1} />
        </div>
      );
    } else {
      return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--color-secondary)' }}>
          <PieChart size={120} strokeWidth={2} />
        </div>
      );
    }
  };

  const isComplete = isRendered && xAxis?.type === 'dimension' && yAxis?.type === 'measure';
  const hasError = isRendered && (xAxis?.type === 'measure' && yAxis?.type === 'measure');

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <BarChart size={24} color="#e67e22" /> 
          Prática 6.4: Sandbox Construtor de Gráficos
        </h3>
        <p className={styles.simDesc}>
          Arraste as variáveis de dados para os eixos (X e Y) e mande renderizar. Lembre-se que o Eixo X normalmente pede Dimensões (Tempo/Categoria) e o Eixo Y pede Medidas (Números).
        </p>
      </div>

      <div className={styles.simContent}>
        
        <div className={styles.responsiveFlex}>
          
          {/* Painel de Variáveis e Controles */}
          <div style={{ flex: 1, minWidth: '250px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '1rem' }}>
              <h4 style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--color-text-muted)' }}>1. Arraste Variáveis</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {variables.map(v => (
                  <DraggableVariable key={v.id} variable={v} />
                ))}
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '1rem' }}>
              <h4 style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--color-text-muted)' }}>2. Mapeamento Visual</h4>
              
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>Eixo Y (Vertical)</div>
                <div 
                  ref={dropY}
                  style={{ height: '40px', border: isOverY ? '2px dashed #3498db' : '2px dashed var(--color-border)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: yAxis ? '#f8fafc' : (isOverY ? '#f1f5f9' : 'white'), fontWeight: 'bold', color: yAxis ? 'var(--color-text-main)' : 'var(--color-text-muted)' }}
                >
                  {yAxis ? yAxis.label : 'Solte Aqui...'}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>Eixo X (Horizontal)</div>
                <div 
                  ref={dropX}
                  style={{ height: '40px', border: isOverX ? '2px dashed #3498db' : '2px dashed var(--color-border)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: xAxis ? '#f8fafc' : (isOverX ? '#f1f5f9' : 'white'), fontWeight: 'bold', color: xAxis ? 'var(--color-text-main)' : 'var(--color-text-muted)' }}
                >
                  {xAxis ? xAxis.label : 'Solte Aqui...'}
                </div>
              </div>
            </div>

            <button 
              onClick={handleRender}
              disabled={!xAxis || !yAxis}
              className={styles.btnPrimary}
              style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', opacity: (!xAxis || !yAxis) ? 0.5 : 1 }}
            >
              <Play size={18} /> Renderizar Gráfico
            </button>

          </div>

          {/* Área de Visualização */}
          <div style={{ flex: 2, minWidth: '300px', border: '1px solid var(--color-border)', borderRadius: '8px', backgroundColor: '#fafafa', display: 'flex', flexDirection: 'column' }}>
            
            <div style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)', display: 'flex', gap: '1rem', backgroundColor: 'white' }}>
              <button onClick={() => {setChartType('bar'); setIsRendered(false);}} style={{ padding: '0.5rem', backgroundColor: chartType === 'bar' ? '#f1f5f9' : 'transparent', borderRadius: '4px' }}><BarChart size={20} color={chartType === 'bar' ? 'var(--color-primary)' : 'var(--color-text-muted)'} /></button>
              <button onClick={() => {setChartType('line'); setIsRendered(false);}} style={{ padding: '0.5rem', backgroundColor: chartType === 'line' ? '#f1f5f9' : 'transparent', borderRadius: '4px' }}><LineChart size={20} color={chartType === 'line' ? 'var(--color-primary)' : 'var(--color-text-muted)'} /></button>
              <button onClick={() => {setChartType('pie'); setIsRendered(false);}} style={{ padding: '0.5rem', backgroundColor: chartType === 'pie' ? '#f1f5f9' : 'transparent', borderRadius: '4px' }}><PieChart size={20} color={chartType === 'pie' ? 'var(--color-primary)' : 'var(--color-text-muted)'} /></button>
            </div>

            <div style={{ flex: 1, minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', position: 'relative' }}>
              {!isRendered ? (
                <div style={{ color: 'var(--color-text-muted)', textAlign: 'center' }}>
                  <BarChart size={64} opacity={0.2} style={{ margin: '0 auto 1rem auto', display: 'block' }} />
                  {(!xAxis || !yAxis) ? 'Mapeie o Eixo X e Y para visualizar os dados' : 'Pronto para Renderizar!'}
                </div>
              ) : (
                <div style={{ width: '100%', height: '100%' }}>
                  {hasError ? (
                    <div className={styles.errorBox}>
                      Ambos os eixos formados por Medidas numéricas (ex: Chuva X Desmatamento) gerariam um Gráfico de Dispersão caótico para uma Barra/Linha! Troque um eixo por uma Dimensão (ex: Anos, Biomas).
                    </div>
                  ) : (
                    getChartVisual()
                  )}
                  
                  {!hasError && (
                    <>
                      <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.8rem', fontWeight: 'bold' }}>{xAxis?.label}</div>
                      <div style={{ position: 'absolute', bottom: '50%', left: '-15px', transform: 'translateY(50%) rotate(-90deg)', fontSize: '0.8rem', fontWeight: 'bold' }}>{yAxis?.label}</div>
                    </>
                  )}
                </div>
              )}
            </div>

          </div>

        </div>

        {isComplete && !hasError && (
          <div className={`${styles.successBox} animate-fade-in`} style={{ marginTop: '1.5rem' }}>
            <strong>É exatamente assim!</strong> Ferramentas como Tableau, Power BI e QGIS operam 100% sobre este mapa mental: Dimensões definem as quebras (categorias) e Medidas definem os tamanhos numéricos.
          </div>
        )}

      </div>
    </div>
  );
};

export default ChartBuilder;
