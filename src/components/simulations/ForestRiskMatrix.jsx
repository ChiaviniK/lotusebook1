import React, { useState } from 'react';
import { AlertTriangle, ShieldCheck, Flame, Bug, Users, Info } from 'lucide-react';

const risks = [
  { id: 'fire', icon: Flame, name: 'Incêndios Florestais', baseWeight: 30, mitigation: 'Brigada de Incêndio (Custa Caro mas zera Risco)', color: '#ef4444' },
  { id: 'pest', icon: Bug, name: 'Pragas e Doenças', baseWeight: 15, mitigation: 'Manejo Florestal Integrado', color: '#8b5cf6' },
  { id: 'invasion', icon: Users, name: 'Posseiros Ilegais', baseWeight: 25, mitigation: 'Patrulha Patrimonial com Drones', color: '#f59e0b' }
];

const ForestRiskMatrix = () => {
  const [mitigations, setMitigations] = useState({
    fire: false,
    pest: false,
    invasion: false
  });

  const toggleMitigation = (id) => {
    setMitigations(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const calculateTotalRisk = () => {
    return risks.reduce((acc, risk) => {
      const activeRisk = mitigations[risk.id] ? risk.baseWeight * 0.2 : risk.baseWeight;
      return acc + activeRisk;
    }, 0);
  };

  const currentRisk = calculateTotalRisk();
  const requiredBuffer = Math.max(10, Math.ceil(currentRisk));

  return (
    <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: '12px', border: '1px solid var(--color-border)', margin: '2rem 0' }}>
      <h3 style={{ margin: '0 0 1rem 0', color: 'var(--color-text-main)', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <AlertTriangle size={20} color="#f59e0b" />
        Matriz de Risco e Ferramenta de Buffer (VCS)
      </h3>
      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
        Riscos de inpermanência anulam os créditos. Registradoras exigem que você deposite uma porcentagem dos créditos num "Cofre" (Buffer Pool). Ative mitigações (Botoes) para baixar sua taxa e liberar mais créditos para venda.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
        {risks.map(risk => {
          const isMitigated = mitigations[risk.id];
          const Icon = risk.icon;
          return (
            <div 
              key={risk.id}
              onClick={() => toggleMitigation(risk.id)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '1rem', backgroundColor: isMitigated ? '#f0fdf4' : 'var(--color-bg)',
                border: `1px solid ${isMitigated ? '#22c55e' : 'var(--color-border)'}`,
                borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s',
                boxShadow: isMitigated ? '0 0 0 1px #22c55e' : 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                 <div style={{ padding: '0.5rem', backgroundColor: isMitigated ? '#dcfce7' : `${risk.color}20`, borderRadius: '8px', color: isMitigated ? '#16a34a' : risk.color }}>
                    <Icon size={20} />
                 </div>
                 <div>
                   <div style={{ fontWeight: 'bold', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>{risk.name}</div>
                   <div style={{ fontSize: '0.75rem', color: isMitigated ? '#15803d' : 'var(--color-text-muted)' }}>
                     Ação: {risk.mitigation}
                   </div>
                 </div>
              </div>
              <div>
                {isMitigated ? (
                  <ShieldCheck size={24} color="#22c55e" />
                ) : (
                  <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: risk.color }}>Risco {risk.baseWeight}%</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
           <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.2rem' }}>Obrigação de Retenção (Buffer Pool VCS)</div>
           <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <strong style={{ fontSize: '1.8rem', color: requiredBuffer <= 15 ? '#4ade80' : '#f87171' }}>{requiredBuffer}%</strong>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>dos créditos bloqueados.</span>
           </div>
        </div>
        <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#94a3b8' }}>
           <Info size={16} />
           <span style={{ fontSize: '0.75rem' }}>Mínimo Verra é de 10%</span>
        </div>
      </div>
    </div>
  );
};

export default ForestRiskMatrix;
