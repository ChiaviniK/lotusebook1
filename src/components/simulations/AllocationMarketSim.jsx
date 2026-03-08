import { useState, useEffect } from 'react';
import { Gavel, TrendingUp, AlertOctagon, RefreshCw } from 'lucide-react';

export default function AllocationMarketSim() {
  const [round, setRound] = useState(1);
  const [cash, setCash] = useState(2500000); // R$
  const [cbeBalance, setCbeBalance] = useState(10000); // Allowances
  const [cbePrice, setCbePrice] = useState(90); // R$
  const [emissions, setEmissions] = useState(25000); // tons
  
  const [logs, setLogs] = useState([]);

  const addLog = (msg, type='info') => {
    setLogs(prev => [...prev.slice(-3), { msg, type, id: Date.now() }]);
  };

  const advanceYear = () => {
    // Emissions stay same. Government free allocation drops 10% each year (Cap tightens)
    const newAllocation = Math.floor(10000 * Math.pow(0.9, round));
    
    // Price goes up as supply shrinks
    const newPrice = Math.floor(cbePrice * (1 + 0.15 + (Math.random() * 0.1)));

    setCbeBalance(prev => prev + newAllocation);
    setCbePrice(newPrice);
    setRound(prev => prev + 1);
    
    addLog(`Ano ${round + 1}: Estado alocou ${newAllocation} CBEs. Escassez aumenta preço para R$ ${newPrice}.`, 'info');
  };

  const buyCBE = () => {
    const cost = cbePrice * 1000;
    if (cash >= cost) {
      setCash(prev => prev - cost);
      setCbeBalance(prev => prev + 1000);
      addLog(`Comprou 1.000 CBE por R$ ${cost.toLocaleString()}`, 'success');
    } else {
      addLog(`Caixa insuficiente para comprar CBE!`, 'error');
    }
  };

  const investEfficiency = () => {
    const cost = 1000000;
    if (cash >= cost) {
      setCash(prev => prev - cost);
      setEmissions(prev => Math.floor(prev * 0.75)); // cuts emissions 25%
      addLog(`Investiu R$1M em Caldeira Elétrica. Emissões caíram 25%.`, 'success');
    } else {
      addLog(`Caixa insuficiente para Upgrade Tecnológico!`, 'error');
    }
  };

  const reconcile = () => {
    if (cbeBalance >= emissions) {
      setCbeBalance(prev => prev - emissions);
      addLog(`Reconciliação Ano ${round} SUCESSO! ${emissions} Cotas devolvidas.`, 'success');
    } else {
      const deficit = emissions - cbeBalance;
      const penaltyRate = cbePrice * 3; // Penalty is 3x market rate roughly
      const fine = deficit * penaltyRate;
      setCash(prev => prev - fine);
      setCbeBalance(0);
      addLog(`FALHA NA RECONCILIAÇÃO! Déficit de ${deficit} tons. Multa Punitiva: R$ -${fine.toLocaleString()}`, 'error');
    }
  };

  const reset = () => {
    setRound(1);
    setCash(2500000);
    setCbeBalance(10000);
    setCbePrice(90);
    setEmissions(25000);
    setLogs([]);
  };

  return (
    <div className="p-6 bg-slate-900 rounded-xl shadow-2xl border border-slate-700 w-full max-w-3xl mx-auto my-6 font-sans text-white">
      <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-8 h-8 text-emerald-400" />
          <div>
            <h3 className="text-xl font-bold m-0 text-slate-100">Mercado SBCE (Cap & Trade)</h3>
            <p className="text-sm text-slate-400 m-0">Administre o Compliance e evite o Default Verde em 3 anos.</p>
          </div>
        </div>
        <div className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-600 font-mono font-bold text-center">
          <div className="text-xs text-slate-400 uppercase">Ciclo SBCE</div>
          <div className="text-xl text-yellow-400">Ano {round}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-inner">
           <div className="text-xs text-slate-400 uppercase font-bold mb-1">Caixa Corporativo (R$)</div>
           <div className={`text-2xl font-black ${cash < 0 ? 'text-red-500' : 'text-emerald-400'}`}>${(cash/1000).toFixed(0)}k</div>
        </div>
        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-inner">
           <div className="text-xs text-slate-400 uppercase font-bold mb-1">Cotação CBE B3</div>
           <div className="text-2xl font-black text-blue-400">R$ {cbePrice}</div>
        </div>
        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-inner">
           <div className="text-xs text-slate-400 uppercase font-bold mb-1">Fábrica Escopo 1 (Tons)</div>
           <div className="text-2xl font-black text-rose-400">{emissions.toLocaleString()}</div>
        </div>
        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-inner">
           <div className="text-xs text-slate-400 uppercase font-bold mb-1">Saldo CBE na Conta</div>
           <div className={`text-2xl font-black ${cbeBalance < emissions ? 'text-yellow-400' : 'text-emerald-400'}`}>{cbeBalance.toLocaleString()}</div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 space-y-3">
          <button 
            onClick={buyCBE}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            Aportar 1.000 CBE (Custa R$ {(cbePrice*1000/1000).toFixed(0)}k)
          </button>
          <button 
            onClick={investEfficiency}
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            Abatimento Interno MAC (-25% Emissão / Custa R$ 1M)
          </button>
        </div>
        
        <div className="flex-1 bg-slate-950 rounded-lg p-4 font-mono text-sm overflow-hidden box-border border border-slate-800 relative">
          <div className="absolute top-2 left-4 text-[10px] text-slate-500 font-bold tracking-widest uppercase">Console Fiscal</div>
          <div className="mt-4 space-y-2 h-[80px] flex flex-col justify-end">
            {logs.map(log => (
              <div key={log.id} className={`${log.type === 'error' ? 'text-red-400' : log.type === 'success' ? 'text-emerald-400' : 'text-blue-300'} text-xs break-words border-l-2 pl-2 ${log.type === 'error' ? 'border-red-400' : log.type === 'success' ? 'border-emerald-400' : 'border-blue-400'}`}>
                &gt; {log.msg}
              </div>
            ))}
            {logs.length === 0 && <div className="text-slate-600 text-xs italic">Aguardando operações na tesouraria...</div>}
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button 
          onClick={reconcile}
          className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black py-4 px-6 rounded-xl transition-transform hover:scale-[1.02] shadow-lg shadow-amber-500/20"
        >
          <Gavel className="w-5 h-5" /> RECONCILIAÇÃO GOVERNAMENTAL (Queimar Cotas)
        </button>
        
        <button 
          onClick={advanceYear}
          className="flex-1 flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-bold py-4 px-4 rounded-xl transition-colors"
        >
          Avançar para Ano Seguinte
        </button>
      </div>

      <button onClick={reset} className="mt-4 mx-auto flex items-center gap-2 text-slate-500 hover:text-slate-300 text-xs font-bold uppercase tracking-wider transition-colors">
        <RefreshCw className="w-3 h-3" /> Reiniciar Simulação
      </button>
    </div>
  );
}
