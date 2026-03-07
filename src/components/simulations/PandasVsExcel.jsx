import React, { useState, useEffect } from 'react';
import { Play, Database, FileSpreadsheet, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

const PandasVsExcel = () => {
  const [pandasProgress, setPandasProgress] = useState(0);
  const [excelProgress, setExcelProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [winner, setWinner] = useState(null);
  
  const totalRows = 2500000; // 2.5 Millions

  const startRace = () => {
    setIsRunning(true);
    setPandasProgress(0);
    setExcelProgress(0);
    setWinner(null);

    // Pandas: C is fast (Vectorized)
    let pandasCurrent = 0;
    const pandasInterval = setInterval(() => {
      pandasCurrent += 125000; // Fast chunks
      if (pandasCurrent >= totalRows) {
        pandasCurrent = totalRows;
        clearInterval(pandasInterval);
        setWinner(prev => prev || 'pandas');
      }
      setPandasProgress(pandasCurrent);
    }, 50);

    // Excel: UI rendering blocks
    let excelCurrent = 0;
    const excelInterval = setInterval(() => {
      excelCurrent += 15000; // Slow chunks
      if (excelCurrent >= totalRows) {
        excelCurrent = totalRows;
        clearInterval(excelInterval);
        setWinner(prev => prev || 'excel'); // Won't happen
      } else if (excelCurrent > totalRows * 0.4 && Math.random() > 0.95) {
         // Excel Crash Simulation
         clearInterval(excelInterval);
         setWinner(prev => prev || 'pandas');
         setExcelProgress('crash');
      } else {
         setExcelProgress(excelCurrent);
      }
    }, 150);
  };

  useEffect(() => {
    if (winner === 'pandas') {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setIsRunning(false);
    }
  }, [winner]);

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
           Processando 2.5 Milhões de Linhas (Cálculo de Média Global)
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
          O arquivo `emissoes_satelite_10anos.csv` acaba de ser solicitado. Aperte Play para comparar a arquitetura de Memória RAM (PANDAS/Python) contra o processamento Visual UI (Planilha).
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
        
        {/* PANDAS RACER */}
        <div style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1e3a8a', fontWeight: 'bold' }}>
              <Database size={20} />
              Script Python (Pandas)
            </div>
            <span style={{ fontSize: '0.9rem', color: '#64748b' }}>df.mean()</span>
          </div>
          
          <div style={{ width: '100%', height: '24px', backgroundColor: '#e2e8f0', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
            <div style={{ 
              height: '100%', 
              backgroundColor: '#3b82f6', 
              width: `${(pandasProgress / totalRows) * 100}%`,
              transition: 'width 0.1s linear'
            }} />
          </div>
          <div style={{ textAlign: 'right', marginTop: '0.5rem', fontSize: '0.85rem', color: '#475569', fontWeight: 'bold' }}>
             {pandasProgress.toLocaleString('pt-BR')} / {totalRows.toLocaleString('pt-BR')} Linhas
          </div>
        </div>

        {/* EXCEL RACER */}
        <div style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#14532d', fontWeight: 'bold' }}>
              <FileSpreadsheet size={20} />
              Planilha Tradicional
            </div>
            <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Clicar na Coluna {'->'} =MÉDIA()</span>
          </div>
          
          <div style={{ width: '100%', height: '24px', backgroundColor: '#e2e8f0', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
            {excelProgress === 'crash' ? (
              <div style={{ 
                height: '100%', 
                backgroundColor: '#ef4444', 
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                gap: '0.5rem'
              }}>
                 <AlertCircle size={14} /> (Não Responde) Falta de Memória
              </div>
            ) : (
              <div style={{ 
                height: '100%', 
                backgroundColor: '#22c55e', 
                width: `${(excelProgress / totalRows) * 100}%`,
                transition: 'width 0.2s ease-out'
              }} />
            )}
          </div>
          <div style={{ textAlign: 'right', marginTop: '0.5rem', fontSize: '0.85rem', color: '#475569', fontWeight: 'bold' }}>
             {excelProgress === 'crash' ? 'Processo Morto pelo S.O.' : `${excelProgress.toLocaleString('pt-BR')} / ${totalRows.toLocaleString('pt-BR')} Linhas`}
          </div>
        </div>

      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button 
          onClick={startRace}
          disabled={isRunning}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            padding: '1rem 2rem',
            backgroundColor: isRunning ? 'var(--color-border)' : 'var(--color-primary)',
            color: isRunning ? 'var(--color-text-muted)' : 'white',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            cursor: isRunning ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
        >
          <Play size={20} fill="currentColor" />
          {isRunning ? 'Processando...' : winner ? 'Tentar Novamente' : 'Iniciar Execução de Rotina'}
        </button>
      </div>
      
      {winner === 'pandas' && (
        <div style={{ marginTop: '1.5rem', textAlign: 'center', color: '#1e3a8a', backgroundColor: '#eff6ff', padding: '1rem', borderRadius: '6px', border: '1px solid #bfdbfe' }}>
          <strong>Conclusão Analítica:</strong> O Python ignora a Interface Gráfica e usa linguagem 'C' vetorial por baixo dos panos para calcular matrizes na RAM. Enquanto o ser humano ainda estaria esperando o arquivo abrir na tela, o script Pandas já processou, filtrou e enviou o resultado final pro email do chefe.
        </div>
      )}

    </div>
  );
};

export default PandasVsExcel;
