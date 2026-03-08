import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PortfolioAllocatorSim = () => {
  const [avoidance, setAvoidance] = useState(50); // REDD+
  const [natureRemoval, setNatureRemoval] = useState(30); // ARR
  const [techRemoval, setTechRemoval] = useState(20); // DAC/BECCS

  // Normalize to 100%
  const total = avoidance + natureRemoval + techRemoval;

  const data = [
    { year: '2025', avoidance: avoidance*0.8, nature: natureRemoval*0.2, tech: techRemoval*0.05 },
    { year: '2030', avoidance: avoidance*0.6, nature: natureRemoval*0.5, tech: techRemoval*0.2 },
    { year: '2035', avoidance: avoidance*0.4, nature: natureRemoval*0.8, tech: techRemoval*0.5 },
    { year: '2040', avoidance: avoidance*0.2, nature: natureRemoval*0.9, tech: techRemoval*0.7 },
    { year: '2050', avoidance: avoidance*0.05, nature: natureRemoval*1.0, tech: techRemoval*1.0 } // Netzero target
  ];

  const handleSlider = (setter, value) => {
    setter(Number(value));
  };

  const isOxfordAligned = avoidance <= 30 && techRemoval >= 20;

  return (
    <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: '12px', border: '1px solid var(--color-border)', margin: '2rem 0' }}>
      <h3 style={{ margin: '0 0 1rem 0', color: 'var(--color-text-main)', fontSize: '1.1rem' }}>Diversificação de Portfólio (Princípios de Oxford)</h3>
      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
        Corporações NetZero em 2050 não podem depender apenas de "Não cortar árvore (Evitamento)". O Padrão Oxford obriga a transição gradual do portfólio para "Remoções Químicas e Naturais Genuínas". Molde sua Tesouraria.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ padding: '0.5rem', display: 'flex', flexDirection: 'column' }}>
             <label style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#f59e0b', marginBottom: '0.5rem' }}>Evitamento REDD+ ({avoidance}%)</label>
             <input type="range" min="0" max="100" value={avoidance} onChange={e => handleSlider(setAvoidance, e.target.value)} style={{ accentColor: '#f59e0b' }}/>
          </div>
          <div style={{ padding: '0.5rem', display: 'flex', flexDirection: 'column' }}>
             <label style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#10b981', marginBottom: '0.5rem' }}>Remoção Natural ARR ({natureRemoval}%)</label>
             <input type="range" min="0" max="100" value={natureRemoval} onChange={e => handleSlider(setNatureRemoval, e.target.value)} style={{ accentColor: '#10b981' }}/>
          </div>
          <div style={{ padding: '0.5rem', display: 'flex', flexDirection: 'column' }}>
             <label style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#3b82f6', marginBottom: '0.5rem' }}>Remoção Tech DAC ({techRemoval}%)</label>
             <input type="range" min="0" max="100" value={techRemoval} onChange={e => handleSlider(setTechRemoval, e.target.value)} style={{ accentColor: '#3b82f6' }}/>
          </div>
      </div>

      {total !== 100 && <div style={{ color: '#ef4444', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>Total deve ser 100%! (Seu: {total}%)</div>}

      <div style={{ width: '100%', height: 300, backgroundColor: '#f8fafc', borderRadius: '8px', padding: '1rem' }}>
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
            <Area type="monotone" dataKey="tech" stackId="1" stroke="#2563eb" fill="#3b82f6" name="Remoção TBS (DAC)" />
            <Area type="monotone" dataKey="nature" stackId="1" stroke="#059669" fill="#10b981" name="Remoção NBS (Plantio)" />
            <Area type="monotone" dataKey="avoidance" stackId="1" stroke="#d97706" fill="#f59e0b" name="Evitamento NBS (REDD+)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
          {isOxfordAligned ? (
              <span style={{ backgroundColor: '#ecfdf5', color: '#047857', padding: '0.5rem 1rem', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 'bold', border: '1px solid #10b981' }}>✔️ Padrão Oxford de Curto Prazo Atendido! Tesouraria Verde.</span>
          ) : (
             <span style={{ backgroundColor: '#fef2f2', color: '#b91c1c', padding: '0.5rem 1rem', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 'bold', border: '1px solid #ef4444' }}>⚠️ Evitamento excessivo. Invista mais em Remoção para NetZero.</span>
          )}
      </div>

    </div>
  );
};

export default PortfolioAllocatorSim;
