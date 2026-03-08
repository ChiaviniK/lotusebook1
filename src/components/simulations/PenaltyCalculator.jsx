import { useState } from 'react';
import { Calculator, AlertCircle, FileWarning, ArrowRight } from 'lucide-react';

export default function PenaltyCalculator() {
  const [faturamentoBruto, setFaturamentoBruto] = useState(50000000); // 50M base
  const [deficit, setDeficit] = useState(5000); // tons
  const [cbeMaxPrice, setCbeMaxPrice] = useState(150); // R$

  // Calculations
  const limiteFaturamento = faturamentoBruto * 0.03; // 3% max cap
  const baseFine = deficit * (cbeMaxPrice * 5); // 5x the Max Bid price per ton
  
  // The Law limits punitive administrative fines up to 3% of revenue
  const isCapped = baseFine > limiteFaturamento;
  const multaFinal = isCapped ? limiteFaturamento : baseFine;

  return (
    <div className="p-6 bg-slate-50 rounded-xl shadow-lg border-2 border-slate-200 w-full max-w-2xl mx-auto my-6 font-sans">
      <div className="flex items-center gap-3 mb-6 border-b-2 border-slate-200 pb-4">
        <div className="p-3 bg-red-100 rounded-lg">
          <Calculator className="w-6 h-6 text-red-700" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-800 m-0">Calculadora de Risco (Art. 39)</h3>
          <p className="text-sm text-slate-500 m-0">Simule a Multa Administrativa por Omissão/Inadimplência de Cotas.</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-4 rounded-lg border border-slate-200 flex flex-col sm:flex-row gap-4">
           <div className="flex-1">
             <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Faturamento Bruto Anual (R$)</label>
             <input 
               type="range" min="10000000" max="1000000000" step="10000000" 
               value={faturamentoBruto}
               onChange={(e) => setFaturamentoBruto(Number(e.target.value))}
               className="w-full accent-slate-800"
             />
             <div className="text-lg font-bold text-slate-800">R$ {(faturamentoBruto/1000000).toLocaleString('pt-BR')} Milhões</div>
           </div>
           
           <div className="h-full w-px bg-slate-200 hidden sm:block"></div>
           
           <div className="flex-1">
             <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Cota Média (B3 Máxima)</label>
             <input 
               type="range" min="50" max="500" step="10" 
               value={cbeMaxPrice}
               onChange={(e) => setCbeMaxPrice(Number(e.target.value))}
               className="w-full accent-blue-600"
             />
             <div className="text-lg font-bold text-blue-600">R$ {cbeMaxPrice.toLocaleString('pt-BR')}</div>
           </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-red-200 bg-red-50/50">
           <label className="block text-xs font-bold text-red-600 uppercase tracking-widest mb-2 flex items-center gap-2">
             <FileWarning className="w-4 h-4" /> Déficit Contábil Não Declarado (Ton)
           </label>
           <input 
             type="range" min="0" max="50000" step="1000" 
             value={deficit}
             onChange={(e) => setDeficit(Number(e.target.value))}
             className="w-full accent-red-600 mb-2"
           />
           <div className="text-center">A fábrica não entregou ao governo <span className="font-bold text-red-600 text-lg">{deficit.toLocaleString('pt-BR')}</span> cotas.</div>
        </div>

        <div className="bg-slate-900 rounded-xl p-5 text-white flex flex-col md:flex-row justify-between items-center gap-4 relative overflow-hidden border border-slate-700 shadow-xl">
           <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
           
           <div className="w-full md:w-1/2">
             <div className="text-xs text-slate-400 font-bold mb-1 uppercase tracking-wider">Custo Calculado (5x Cota Max)</div>
             <div className={`text-2xl font-mono ${isCapped ? 'line-through text-slate-500' : 'text-slate-200 font-bold'}`}>
               R$ {baseFine.toLocaleString('pt-BR')}
             </div>
             {isCapped && (
               <div className="text-xs text-yellow-400 mt-1 flex items-center gap-1">
                 <AlertCircle className="w-3 h-3" /> Excedeu teto de 3% da Receita!
               </div>
             )}
           </div>

           <ArrowRight className="text-slate-600 hidden md:block" />

           <div className="w-full md:w-1/2 bg-black/40 p-4 rounded-lg border border-slate-700/50 shadow-inner text-right">
             <div className="text-[10px] text-red-400 font-bold mb-1 uppercase tracking-wider">Multa Punitiva Final (A ser Recolhida)</div>
             <div className="text-3xl font-black text-white">
               R$ {multaFinal.toLocaleString('pt-BR')}
             </div>
             {isCapped && (
               <div className="text-[10px] text-slate-400 mt-1 uppercase mt-3 text-right">Limitado pela Lei a 3% do Receita Bruta: R$ {limiteFaturamento.toLocaleString('pt-BR')}</div>
             )}
           </div>
        </div>
      </div>
    </div>
  );
}
