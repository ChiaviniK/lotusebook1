import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, ComposedChart } from 'recharts';

const BaselineBuilder = () => {
  const [deforestationRate, setDeforestationRate] = useState(5); // % per year BAU
  const [projectEfficiency, setProjectEfficiency] = useState(80); // % of deforestation stopped

  const data = [];
  let remainingForestBAU = 10000; // Hectares
  let remainingForestProject = 10000;
  
  for (let year = 1; year <= 20; year++) {
    // BAU calculation
    const bauLoss = remainingForestBAU * (deforestationRate / 100);
    remainingForestBAU -= bauLoss;

    // Project calculation (Efficiency stops X% of BAU loss)
    const effectiveLossRate = (deforestationRate / 100) * (1 - (projectEfficiency / 100));
    const projectLoss = remainingForestProject * effectiveLossRate;
    remainingForestProject -= projectLoss;

    data.push({
      year: `Ano ${year}`,
      bau: Math.round(remainingForestBAU),
      project: Math.round(remainingForestProject),
      credits: Math.round(remainingForestProject - remainingForestBAU)
    });
  }

  const finalCredits = data[data.length - 1].credits;

  return (
    <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: '12px', border: '1px solid var(--color-border)', margin: '2rem 0' }}>
      <h3 style={{ margin: '0 0 1rem 0', color: 'var(--color-text-main)', fontSize: '1.1rem' }}>Simulador de Lotação: Curva de Linha de Base (BAU x Projeto)</h3>
      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
        A quantia de Carbono que você pode vender é a diferença (Área Verde) entre o que aconteceria sem você (Cenário BAU) e o que aconteceu com a sua proteção (Projeto). Ajuste as pressões!
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ padding: '1rem', backgroundColor: 'var(--color-bg)', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
          <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-text-main)' }}>
            Pressão de Desmatamento BAU (%/ano)
            <input 
              type="range" 
              min="1" 
              max="15" 
              value={deforestationRate} 
              onChange={(e) => setDeforestationRate(Number(e.target.value))}
              style={{ accentColor: '#ef4444' }}
            />
            <span style={{ color: '#ef4444' }}>{deforestationRate}% ao ano</span>
          </label>
        </div>

        <div style={{ padding: '1rem', backgroundColor: 'var(--color-bg)', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
          <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-text-main)' }}>
            Eficiência da Patrulha do Projeto (%)
            <input 
              type="range" 
              min="10" 
              max="99" 
              value={projectEfficiency} 
              onChange={(e) => setProjectEfficiency(Number(e.target.value))}
              style={{ accentColor: '#10b981' }}
            />
            <span style={{ color: '#10b981' }}>{projectEfficiency}% das motosserras paradas</span>
          </label>
        </div>
      </div>

      <div style={{ height: 300, width: '100%', marginBottom: '1rem' }}>
        <ResponsiveContainer>
          <ComposedChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#64748b' }} />
            <YAxis tick={{ fontSize: 12, fill: '#64748b' }} />
            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
            <Legend />
            <Area type="monotone" dataKey="project" fill="#dcfce7" stroke="none" name="Floresta Salva (Projeto)" />
            <Line type="monotone" dataKey="bau" stroke="#ef4444" strokeWidth={3} dot={false} name="Decadência BAU (Sem Projeto)" />
            <Line type="monotone" dataKey="project" stroke="#10b981" strokeWidth={3} dot={false} name="Estoque Real (Com Projeto)" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '8px', border: '1px dashed #22c55e' }}>
         <strong style={{ fontSize: '1.2rem', color: '#166534' }}>{finalCredits.toLocaleString()} Hectares Adicionais Salvos</strong>
         <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem', color: '#15803d' }}>Esta área entre as curvas (Gap) é o seu "Crédito de Carbono Gerado" no 20º ano.</p>
      </div>

    </div>
  );
};

export default BaselineBuilder;
