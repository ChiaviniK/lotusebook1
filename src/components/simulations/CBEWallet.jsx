import React, { useState, useEffect } from 'react';
import { Briefcase, TrendingUp, TrendingDown, Newspaper, ArrowRight } from 'lucide-react';
import styles from '../ebook/Chapter.module.css';

const CBEWallet = () => {
  const [wallet, setWallet] = useState({ cbe: 1500, crve: 500, cash: 120000 });
  const [priceCbe, setPriceCbe] = useState(120); // BRL
  const [priceCrve, setPriceCrve] = useState(45); // BRL
  const [turn, setTurn] = useState(1);
  const [news, setNews] = useState("Mercado Estável. Aguardando novos marcos regulatórios.");

  const handleNextTurn = () => {
    setTurn(prev => prev + 1);
    const events = [
      { text: "União Europeia barra exportação de aço verde do Brasil! Oferta de CRVE despenca.", crveMod: +12, cbeMod: -5 },
      { text: "Nova Lei SBCE sancionada! Cotas de CBE são reduzidas pelo Governo.", crveMod: +5, cbeMod: +45 },
      { text: "Escândalo de Greenwashing! Projeto da Amazônia cancelado, valor do CRVE derrete.", crveMod: -20, cbeMod: +10 },
      { text: "Inverno Congelante na Europa aumenta queima de Carvão! Demanda por offsets explode.", crveMod: +30, cbeMod: +15 },
      { text: "Boom Tecnológico: Novos filtros barateiam a redução de emissão local nas indústrias.", crveMod: -15, cbeMod: -30 }
    ];

    const randomEvent = events[Math.floor(Math.random() * events.length)];
    setNews(randomEvent.text);
    
    // Smooth price changes
    setPriceCbe(prev => Math.max(10, prev + randomEvent.cbeMod + (Math.floor(Math.random() * 8) - 4)));
    setPriceCrve(prev => Math.max(5, prev + randomEvent.crveMod + (Math.floor(Math.random() * 5) - 2)));
  };

  const buyAsset = (type) => {
    const cost = type === 'CBE' ? priceCbe : priceCrve;
    if (wallet.cash >= cost) {
      setWallet(prev => ({
        ...prev,
        [type.toLowerCase()]: prev[type.toLowerCase()] + 10,
        cash: prev.cash - (cost * 10)
      }));
    }
  };

  const sellAsset = (type) => {
    const amount = type === 'CBE' ? wallet.cbe : wallet.crve;
    if (amount >= 10) {
      const revenue = (type === 'CBE' ? priceCbe : priceCrve) * 10;
      setWallet(prev => ({
        ...prev,
        [type.toLowerCase()]: prev[type.toLowerCase()] - 10,
        cash: prev.cash + revenue
      }));
    }
  };

  const totalEquity = wallet.cash + (wallet.cbe * priceCbe) + (wallet.crve * priceCrve);

  return (
     <div className={styles.simulationWrapper}>
       <div className={styles.simHeader}>
          <h4>Home Broker Climático Brasileiro</h4>
          <p>Administre sua carteira de Permissões Reguladas (CBE) e Naturais Voluntárias (CRVE).</p>
       </div>

       <div style={{ backgroundColor: '#111827', color: 'white', padding: '1.5rem', borderRadius: '12px', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
             <Newspaper size={20} color="#f59e0b" />
             <div style={{ fontWeight: 'bold', color: '#f59e0b' }}>Notícia do Mês (Turno {turn}):</div>
          </div>
          <div style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>"{news}"</div>
       </div>

       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
          
          <div style={{ padding: '1.5rem', border: '1px solid var(--color-border)', borderRadius: '12px', background: 'var(--color-bg)' }}>
             <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Patrimônio Total</div>
             <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--color-text-main)' }}>R$ {totalEquity.toLocaleString()}</div>
             <div style={{ fontSize: '0.85rem', color: '#10b981', marginTop: '0.5rem' }}>Em Caixa Livre: R$ {wallet.cash.toLocaleString()}</div>
          </div>

          <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '12px', background: 'var(--color-bg)' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ fontWeight: 'bold' }}>CBE (Regulado)</div>
                <div style={{ fontWeight: 'bold', color: '#3b82f6', fontSize: '1.2rem' }}>R$ {priceCbe}</div>
             </div>
             <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>Na Carteira: {wallet.cbe} cotas</div>
             <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button onClick={() => buyAsset('CBE')} style={{ flex: 1, padding: '0.5rem', background: '#dbeafe', color: '#1d4ed8', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>C (+10)</button>
                <button onClick={() => sellAsset('CBE')} style={{ flex: 1, padding: '0.5rem', background: '#fee2e2', color: '#b91c1c', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>V (-10)</button>
             </div>
          </div>

          <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '12px', background: 'var(--color-bg)' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ fontWeight: 'bold' }}>CRVE (Florestal)</div>
                <div style={{ fontWeight: 'bold', color: '#10b981', fontSize: '1.2rem' }}>R$ {priceCrve}</div>
             </div>
             <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>Na Carteira: {wallet.crve} certs</div>
             <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button onClick={() => buyAsset('CRVE')} style={{ flex: 1, padding: '0.5rem', background: '#dcfce7', color: '#15803d', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>C (+10)</button>
                <button onClick={() => sellAsset('CRVE')} style={{ flex: 1, padding: '0.5rem', background: '#fee2e2', color: '#b91c1c', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>V (-10)</button>
             </div>
          </div>

       </div>

       <button onClick={handleNextTurn} style={{ width: '100%', padding: '1rem', background: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
         Avance 1 Mês e Puxe Notícias <ArrowRight size={18} />
       </button>
     </div>
  );
};

export default CBEWallet;
