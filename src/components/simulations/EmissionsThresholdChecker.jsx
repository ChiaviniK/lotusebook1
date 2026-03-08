import { useState } from 'react';
import { AlertTriangle, CheckCircle, Factory, ShieldAlert } from 'lucide-react';

export default function EmissionsThresholdChecker() {
  const [diesel, setDiesel] = useState(0);
  const [carvao, setCarvao] = useState(0);
  const [naturalGas, setNaturalGas] = useState(0);
  const [processEmission, setProcessEmission] = useState(0);

  // Simplified conversion factors to tons of CO2e
  const dieselFactor = 2.68; // ton CO2 per 1000 Liters (rough)
  const carvaoFactor = 2.4; // ton CO2 per ton of coal
  const gasFactor = 2.0; // ton CO2 per 1000 m3 

  const totalEmissions = 
    (diesel * dieselFactor) + 
    (carvao * carvaoFactor) + 
    (naturalGas * gasFactor) + 
    Number(processEmission);

  const getStatus = () => {
    if (totalEmissions < 10000) {
      return { 
        level: 'Isento', 
        color: 'text-green-600', 
        bg: 'bg-green-100',
        borderColor: 'border-green-500',
        icon: <CheckCircle className="w-8 h-8 text-green-600" />,
        desc: "Abaixo do teto de reporte. Você está livre das obrigações principais do SBCE por enquanto."
      };
    } else if (totalEmissions >= 10000 && totalEmissions < 25000) {
      return { 
        level: 'Alerta: Obrigação de Relato', 
        color: 'text-yellow-600', 
        bg: 'bg-yellow-100',
        borderColor: 'border-yellow-500',
        icon: <AlertTriangle className="w-8 h-8 text-yellow-600" />,
        desc: "Você passou as 10 mil Toneladas! Está no radar estatal. Precisa enviar o Relatório de Monitoramento Anual, mas ainda não paga Cotas."
      };
    } else {
      return { 
        level: 'Regulado: Mercado Ativo (SBCE)', 
        color: 'text-red-600', 
        bg: 'bg-red-100',
        borderColor: 'border-red-500',
        icon: <ShieldAlert className="w-8 h-8 text-red-600" />,
        desc: "Passou do Teto! Além do relato, você virou um Operador Regulado e terá que devolver Cotas (CBE/CRVE) pelo total de emissões do Período."
      };
    }
  };

  const status = getStatus();

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 w-full max-w-2xl mx-auto my-6 font-sans">
      <div className="flex items-center gap-3 mb-6 border-b pb-4">
        <div className="p-3 bg-slate-100 rounded-lg">
          <Factory className="w-6 h-6 text-slate-700" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-800 m-0">Simulador de Teto SBCE</h3>
          <p className="text-sm text-slate-500 m-0">Calcule as emissões de Escopo 1 de sua planta industrial.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Diesel Consumido (Milhares Litros/Ano)</label>
            <input 
              type="range" min="0" max="10000" step="100" value={diesel}
              onChange={(e) => setDiesel(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
            <div className="text-right text-xs font-bold text-blue-600">{diesel.toLocaleString()} kL</div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Carvão Mineral (Toneladas/Ano)</label>
            <input 
              type="range" min="0" max="15000" step="100" value={carvao}
              onChange={(e) => setCarvao(Number(e.target.value))}
              className="w-full accent-amber-700"
            />
            <div className="text-right text-xs font-bold text-amber-700">{carvao.toLocaleString()} tons</div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Gás Natural (Milhares m³/Ano)</label>
            <input 
              type="range" min="0" max="10000" step="100" value={naturalGas}
              onChange={(e) => setNaturalGas(Number(e.target.value))}
              className="w-full accent-cyan-500"
            />
            <div className="text-right text-xs font-bold text-cyan-500">{naturalGas.toLocaleString()} k m³</div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Emissões de Processo Industrial (tCO2e)</label>
            <input 
              type="range" min="0" max="15000" step="100" value={processEmission}
              onChange={(e) => setProcessEmission(Number(e.target.value))}
              className="w-full accent-purple-600"
            />
            <div className="text-right text-xs font-bold text-purple-600">{processEmission.toLocaleString()} tons</div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className={`p-6 rounded-xl border-2 transition-all duration-500 ${status.bg} ${status.borderColor}`}>
            <div className="flex justify-between items-start mb-4">
              {status.icon}
              <div className="text-right">
                <div className="text-xs uppercase font-bold text-slate-500 tracking-wider">Total Calculado</div>
                <div className={`text-3xl font-black ${status.color}`}>
                  {Math.round(totalEmissions).toLocaleString('pt-BR')} <span className="text-sm">tCO2e</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-slate-200/50">
              <h4 className={`font-bold text-lg mb-1 ${status.color}`}>{status.level}</h4>
              <p className="text-sm text-slate-700 leading-relaxed">{status.desc}</p>
            </div>
          </div>

          <div className="mt-4 w-full bg-gray-200 rounded-full h-3 overflow-hidden flex relative">
             <div className="absolute left-[40%] top-0 bottom-0 w-0.5 bg-yellow-500 z-10" title="10.000t (Relato)"></div>
             <div className="absolute left-[100%] top-0 bottom-0 w-0.5 bg-red-500 z-10" title="25.000t (Regulado)"></div>
             <div 
               className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 transition-all duration-700" 
               style={{ width: `${Math.min((totalEmissions / 25000) * 100, 100)}%` }}
             ></div>
          </div>
          <div className="flex justify-between text-[10px] text-gray-500 font-bold mt-1 px-1">
             <span>0</span>
             <span className="ml-[30%]">10k (Relatório)</span>
             <span>25k (Pagamento)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
