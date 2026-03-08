import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const COLORS = ['#10b981', '#f59e0b', '#3b82f6', '#8b5cf6'];

const CommunityBenefitAllocator = () => {
  const [developerShare, setDeveloperShare] = useState(40);
  const [communityShare, setCommunityShare] = useState(20);
  const [govShare, setGovShare] = useState(20);
  const [bufferShare, setBufferShare] = useState(20);

  // Normalize if > 100
  const total = developerShare + communityShare + govShare + bufferShare;
  const isCCBHighQuality = communityShare >= 40; // Arbitrary logic for "premium" CCB standard

  const data = [
    { name: 'Desenvolvedor/Investidor', value: developerShare },
    { name: 'Comunidade Local (Associações)', value: communityShare },
    { name: 'Governo (Taxas/Funbio)', value: govShare },
    { name: 'Custo Logístico / Buffer', value: bufferShare },
  ];

  const handleSlider = (setter, value) => {
      setter(Number(value));
  };

  return (
    <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: '12px', border: '1px solid var(--color-border)', margin: '2rem 0' }}>
      <h3 style={{ margin: '0 0 1rem 0', color: 'var(--color-text-main)', fontSize: '1.1rem' }}>Arquitetura Financeira Social e CCB</h3>
      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
        Um projeto REDD+ sem Benefit-Sharing justo pode sofrer sanções ou cancelamento. Simule abaixo como dividir a torta de U$ 10 Milhões de receitas Brutas.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
          
         <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                 <label style={{ fontSize: '0.85rem', fontWeight: 'bold', color: COLORS[0], display: 'flex', justifyContent: 'space-between' }}>
                     <span>Fatia do Investidor/Dev</span>
                     <span>{developerShare}%</span>
                 </label>
                 <input type="range" min="5" max="80" value={developerShare} onChange={e => handleSlider(setDeveloperShare, e.target.value)} style={{ accentColor: COLORS[0] }} />
             </div>

             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                 <label style={{ fontSize: '0.85rem', fontWeight: 'bold', color: COLORS[1], display: 'flex', justifyContent: 'space-between' }}>
                     <span>Comunidade Local (Cacique/Associação)</span>
                     <span>{communityShare}%</span>
                 </label>
                 <input type="range" min="5" max="80" value={communityShare} onChange={e => handleSlider(setCommunityShare, e.target.value)} style={{ accentColor: COLORS[1] }} />
             </div>

             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                 <label style={{ fontSize: '0.85rem', fontWeight: 'bold', color: COLORS[2], display: 'flex', justifyContent: 'space-between' }}>
                     <span>Governo / Taxas</span>
                     <span>{govShare}%</span>
                 </label>
                 <input type="range" min="5" max="50" value={govShare} onChange={e => handleSlider(setGovShare, e.target.value)} style={{ accentColor: COLORS[2] }} />
             </div>

             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                 <label style={{ fontSize: '0.85rem', fontWeight: 'bold', color: COLORS[3], display: 'flex', justifyContent: 'space-between' }}>
                     <span>Custo Operacional de Guarda</span>
                     <span>{bufferShare}%</span>
                 </label>
                 <input type="range" min="5" max="50" value={bufferShare} onChange={e => handleSlider(setBufferShare, e.target.value)} style={{ accentColor: COLORS[3] }} />
             </div>
         </div>

         <div style={{ height: 250, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {total !== 100 && (
                <div style={{ color: '#ef4444', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>O total deve somar 100%! (Atual: {total}%)</div>
            )}
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                </PieChart>
            </ResponsiveContainer>
         </div>
      </div>

      {total === 100 && (
          <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: isCCBHighQuality ? '#ecfdf5' : '#fffbeb', borderRadius: '8px', border: `1px solid ${isCCBHighQuality ? '#10b981' : '#f59e0b'}` }}>
              <strong style={{ color: isCCBHighQuality ? '#065f46' : '#b45309', display: 'block', marginBottom: '0.5rem' }}>
                  {isCCBHighQuality ? "Padrão Ouro Social Atingido (CCB Gold) 🥇" : "Alerta de Risco Recional ⚠️"}
              </strong>
              <p style={{ margin: 0, fontSize: '0.85rem', color: isCCBHighQuality ? '#047857' : '#92400e' }}>
                 {isCCBHighQuality 
                   ? "A comunidade está recebendo uma fatia massiva e real das vendas. Eles têm incentivo pesado para proteger a floresta contra garimpeiros externos." 
                   : "Cuidado. Fatias abaixo de 30%/40% para a comunidade podem originar artigos na Doxa acusando o projeto de Neo-colonialismo e alienação de terras nativas."}
              </p>
          </div>
      )}

    </div>
  );
};

export default CommunityBenefitAllocator;
