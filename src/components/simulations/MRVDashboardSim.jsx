import React, { useState } from 'react';
import { FileText, Send, CheckCircle, Clock } from 'lucide-react';

const MRVDashboardSim = () => {
  const [stages, setStages] = useState([
    { id: '1', name: 'Documento de Design do Projeto (PDD)', status: 'pendente' },
    { id: '2', name: 'Auditoria de Validação (VVB Desk Review)', status: 'bloqueado' },
    { id: '3', name: 'Relatório de Monitoramento 1 (Ano 1)', status: 'bloqueado' },
    { id: '4', name: 'Auditoria de Verificação (Visita de Campo)', status: 'bloqueado' },
    { id: '5', name: 'Aprovação Final e Cunhagem (Registry)', status: 'bloqueado' }
  ]);

  const advanceStage = () => {
    const nextPendingIndex = stages.findIndex(s => s.status === 'pendente' || s.status === 'bloqueado');
    
    if (nextPendingIndex !== -1) {
        const newStages = [...stages];
        
        // Mark current as done
        newStages[nextPendingIndex].status = 'concluido';
        
        // Unlock next if exists
        if (nextPendingIndex + 1 < newStages.length) {
            newStages[nextPendingIndex + 1].status = 'pendente';
        }
        
        setStages(newStages);
    }
  };

  const getStatusIcon = (status) => {
    if (status === 'concluido') return <CheckCircle color="#10b981" size={24} />;
    if (status === 'pendente') return <Clock color="#f59e0b" size={24} />;
    return <FileText color="#94a3b8" size={24} />;
  };

  const isFinished = stages.every(s => s.status === 'concluido');

  return (
    <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: '12px', border: '1px solid var(--color-border)', margin: '2rem 0' }}>
      <h3 style={{ margin: '0 0 1rem 0', color: 'var(--color-text-main)', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Send size={20} color="#8b5cf6" />
        Simulador MRV: Do PDD à Emissão
      </h3>
      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
        Na vida real, esta esteira burocrática leva de 2 a 4 anos e custa centenas de milhares de dólares. Avance as fases da auditoria para entender a jornada rigorosa de aprovação da Verra.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
        {stages.map((stage, i) => (
          <div 
             key={stage.id} 
             style={{ 
                 display: 'flex', alignItems: 'center', p: '1rem', padding: '1rem',
                 backgroundColor: stage.status === 'bloqueado' ? 'var(--color-bg)' : stage.status === 'pendente' ? '#fffbeb' : '#f0fdf4',
                 border: `1px solid ${stage.status === 'bloqueado' ? 'var(--color-border)' : stage.status === 'pendente' ? '#f59e0b' : '#10b981'}`,
                 borderRadius: '8px', opacity: stage.status === 'bloqueado' ? 0.6 : 1, transition: 'all 0.3s'
             }}
          >
             <div style={{ width: '40px', display: 'flex', justifyContent: 'center' }}>
                 {getStatusIcon(stage.status)}
             </div>
             <div style={{ flex: 1, marginLeft: '1rem' }}>
                 <div style={{ fontWeight: 'bold', fontSize: '0.95rem', color: stage.status === 'bloqueado' ? 'var(--color-text-muted)' : 'var(--color-text-main)' }}>
                     Passo {i+1}: {stage.name}
                 </div>
                 <div style={{ fontSize: '0.75rem', color: stage.status === 'pendente' ? '#b45309' : 'var(--color-text-muted)' }}>
                     {stage.status === 'concluido' ? 'Aprovado pelo Auditor' : stage.status === 'pendente' ? 'Aguardando submissão e análise...' : 'Bloqueado por dependência anterior.'}
                 </div>
             </div>
          </div>
        ))}
      </div>

      {!isFinished ? (
          <button 
             onClick={advanceStage}
             style={{ width: '100%', padding: '1rem', backgroundColor: '#8b5cf6', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
          >
              <FileText size={20} /> Pagar Taxa e Avançar Fase
          </button>
      ) : (
          <div style={{ padding: '1.5rem', backgroundColor: '#1e293b', borderRadius: '8px', color: 'white', textAlign: 'center' }}>
             <CheckCircle size={40} color="#34d399" style={{ marginBottom: '1rem' }} />
             <h4 style={{ margin: '0 0 0.5rem 0', color: '#34d399' }}>Registro Concluído!</h4>
             <p style={{ fontSize: '0.9rem', color: '#cbd5e1', margin: 0 }}>Seus VCUs (Verified Carbon Units) foram cunhados na rede Pùblica. Agora você finalmente tem o Ativo Financeiro em mãos para negociar em bolsa Corporativa.</p>
          </div>
      )}
    </div>
  );
};

export default MRVDashboardSim;
