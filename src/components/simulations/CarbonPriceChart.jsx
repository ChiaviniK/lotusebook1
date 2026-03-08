import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';
import styles from '../ebook/Chapter.module.css';

const CarbonPriceChart = () => {
   const [history, setHistory] = useState([50, 52, 51, 54, 53, 56]); // Starting €
   const [marketState, setMarketState] = useState('Neutral');

   const injectNews = (type) => {
      const lastPrice = history[history.length - 1];
      let newPrice;
      
      if (type === 'bull_scarcity') { // Goverment cuts supply -> Price Go Up
         newPrice = lastPrice + (Math.random() * 15 + 10);
         setMarketState('Governo corta cotas obrigatórias! Crise de Escassez (Bullish).');
      } else if (type === 'bear_oversupply') { // Lots of fake projects -> Price Crash
         newPrice = lastPrice - (Math.random() * 20 + 5);
         setMarketState('Escândalo na Amazônia inunda mercado de créditos podres (Bearish).');
      } else if (type === 'bull_energy') { // Coal usage spike -> Needs more offsets
         newPrice = lastPrice + (Math.random() * 10 + 5);
         setMarketState('Crise Gás na Europa! Térmicas a Carvão ligadas, demanda sobe (Bullish).');
      }

      setHistory([...history, Math.max(1, newPrice)]);
   };

   // Render a simple SVG Line Chart
   const maxPrice = Math.max(...history, 100);
   const minPrice = Math.min(...history, 0);
   const range = maxPrice - minPrice;
   
   const points = history.map((price, i) => {
      const x = (i / (Math.max(10, history.length) - 1)) * 100; // X%
      const y = 100 - (((price - minPrice) / (range || 1)) * 100); // Y% inverted for SVG
      return `${x},${y}`;
   }).join(' ');

   const reset = () => {
      setHistory([50, 52, 51, 54, 53, 56]);
      setMarketState('Neutral');
   }

   const currentPrice = history[history.length - 1];
   const prevPrice = history.length > 1 ? history[history.length - 2] : history[0];
   const isUp = currentPrice >= prevPrice;

   return (
    <div className={styles.simulationWrapper}>
       <div className={styles.simHeader}>
          <h4>Dinâmica de Precificação Global (EUA/UE)</h4>
          <p>O preço do carbono obedece as leis de oferta e demanda. Injete geopolítica no mercado e assista o grãfico da Bolsa VCA.</p>
       </div>

       <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg)' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', padding: '1rem', backgroundColor: 'var(--color-surface)', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
             <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Cotação Global (EUA/UE)</div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: isUp ? '#10b981' : '#ef4444', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                   € {currentPrice.toFixed(2)} / tCO2
                   {isUp ? <TrendingUp size={24}/> : <TrendingDown size={24}/>}
                </div>
             </div>
             
             <div style={{ textAlign: 'right', maxWidth: '50%' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '0.2rem' }}>Notícia Operante:</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--color-text-main)', fontStyle: 'italic' }}>"{marketState}"</div>
             </div>
          </div>

          <div style={{ width: '100%', height: '200px', backgroundColor: '#111827', borderRadius: '8px', marginBottom: '1.5rem', position: 'relative', overflow: 'hidden' }}>
             {/* Simple Grid Lines */}
             <div style={{ position: 'absolute', top: '25%', width: '100%', borderTop: '1px dashed #374151' }}></div>
             <div style={{ position: 'absolute', top: '50%', width: '100%', borderTop: '1px dashed #374151' }}></div>
             <div style={{ position: 'absolute', top: '75%', width: '100%', borderTop: '1px dashed #374151' }}></div>
             
             <svg width="100%" height="100%" preserveAspectRatio="none">
                <polyline 
                   points={points} 
                   fill="none" 
                   stroke={isUp ? "#10b981" : "#ef4444"} 
                   strokeWidth="3" 
                   strokeLinejoin="round" 
                />
             </svg>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.5rem' }}>
             <button onClick={() => injectNews('bull_scarcity')} style={{ padding: '0.75rem', backgroundColor: '#dcfce7', color: '#15803d', border: '1px solid #86efac', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 'bold' }}>
                Governo Raciona Cotas (Sobe Preço)
             </button>
             <button onClick={() => injectNews('bear_oversupply')} style={{ padding: '0.75rem', backgroundColor: '#fee2e2', color: '#b91c1c', border: '1px solid #fca5a5', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 'bold' }}>
                Escândalo de Créditos Inválidos (Cai Preço)
             </button>
             <button onClick={() => injectNews('bull_energy')} style={{ padding: '0.75rem', backgroundColor: '#dcfce7', color: '#15803d', border: '1px solid #86efac', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 'bold' }}>
                Crise de Energia na Europa (Sobe Preço)
             </button>
          </div>

          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <button onClick={reset} style={{ padding: '0.5rem 1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)', borderRadius: '6px', cursor: 'pointer' }}>
               <RefreshCw size={14} /> Resetar Mercado
            </button>
          </div>

       </div>
    </div>
  );
};

export default CarbonPriceChart;
