import React, { useState } from 'react';
import { Network, Globe, Building2, ExternalLink } from 'lucide-react';

const JurisdictionalNestingSim = () => {
    const [viewMode, setViewMode] = useState('isolated'); // isolated, nested

    return (
        <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: '12px', border: '1px solid var(--color-border)', margin: '2rem 0' }}>
            <h3 style={{ margin: '0 0 1rem 0', color: 'var(--color-text-main)', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Network size={20} color="#14b8a6" />
                Simulador de Aninhamento (Nesting REDD+)
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                O mercado está migrando de "Fazendas Privadas" isoladas para limites Estaduais e Nacionais. Veja como a arquitetura contábil opera sob o padrão ART TREES vs Verra tradicional.
            </p>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
                <button
                    onClick={() => setViewMode('isolated')}
                    style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: viewMode === 'isolated' ? '#14b8a6' : 'var(--color-bg)', color: viewMode === 'isolated' ? 'white' : 'var(--color-text-main)', border: `1px solid ${viewMode === 'isolated' ? '#0d9488' : 'var(--color-border)'}`, borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s' }}
                >
                    <Building2 size={16} /> Paradigma Antigo (Isolado)
                </button>
                <button
                    onClick={() => setViewMode('nested')}
                    style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: viewMode === 'nested' ? '#14b8a6' : 'var(--color-bg)', color: viewMode === 'nested' ? 'white' : 'var(--color-text-main)', border: `1px solid ${viewMode === 'nested' ? '#0d9488' : 'var(--color-border)'}`, borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s' }}
                >
                    <Globe size={16} /> Paradigma Novo (J-REDD Nested)
                </button>
            </div>

            <div style={{ position: 'relative', width: '100%', minHeight: '320px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '2px dashed #cbd5e1', padding: '1.5rem', overflow: 'hidden' }}>
                
                {/* Visual Map Represents "The Country/State" */}
                {viewMode === 'nested' && (
                    <div style={{ position: 'absolute', inset: '1rem', border: '3px solid #64748b', borderRadius: '8px', backgroundColor: 'rgba(100, 116, 139, 0.1)' }}>
                       <span style={{ position: 'absolute', top: '-12px', left: '10px', backgroundColor: '#64748b', color: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>Jurisdição (Governo Estadual) - Inventário Nacional (NDCs)</span>
                    </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', position: 'relative', zIndex: 10, marginTop: viewMode === 'nested' ? '3rem' : '0' }}>
                    <div style={{ width: '200px', backgroundColor: '#ecfdf5', border: '2px solid #10b981', borderRadius: '8px', padding: '1rem', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                        <Building2 size={32} color="#059669" style={{ margin: '0 auto 0.5rem' }} />
                        <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#064e3b' }}>Projeto Zuzu (Privado)</div>
                        <div style={{ fontSize: '0.75rem', color: '#047857', marginTop: '0.5rem' }}>Gera 10.000 ton/ano</div>
                        
                        {viewMode === 'isolated' ? (
                            <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: '#ef4444', borderTop: '1px solid #a7f3d0', paddingTop: '0.5rem' }}>
                                Fisco Alheio: O projeto vende pra Suiça, mas o Brasil não sabe e pode relatar a árvore como d'ele na ONU. Risco de Dupla Contagem (Double Claiming).
                            </div>
                        ) : (
                            <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: '#10b981', borderTop: '1px solid #a7f3d0', paddingTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
                                <ExternalLink size={12} />
                                Conciliado com Tesouro Estadual
                            </div>
                        )}
                    </div>
                </div>

            </div>

            {viewMode === 'nested' && (
                <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#eff6ff', borderRadius: '8px', border: '1px solid #bfdbfe', fontSize: '0.85rem', color: '#1e3a8a' }}>
                    <strong>Por que Aninhar (Nest)?</strong> No aninhamento, a contabilidade do Projeto Privado "Zuzu" é matemática e geograficamente embutida na contabilidade do Governador. Assim, se a Fazenda Zuzu vende Carbono pra fora, o Governo "abate" (Corresponding Adjustment) essa Tonelada da sua meta nacional do Acordo de Paris, impedindo que os dois se digam "Salvadores da mesma árvore".
                </div>
            )}
        </div>
    );
};

export default JurisdictionalNestingSim;
