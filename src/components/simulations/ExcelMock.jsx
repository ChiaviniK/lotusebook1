import { useState } from 'react';
import { TableProperties, Calculator, Target } from 'lucide-react';
import styles from './Simulations.module.css';

const ExcelMock = () => {
  const [cells, setCells] = useState({
    A1: 'Desmatamento (ha)', B1: 'Reflorestamento (ha)', C1: 'Balanço Final',
    A2: '120', B2: '50', C2: '',
    A3: '340', B3: '75', C3: '',
    A4: 'Total', B4: '', C4: ''
  });

  const [activeCell, setActiveCell] = useState(null);
  const [formula, setFormula] = useState('');

  const [score, setScore] = useState({ C2: false, C3: false, B4: false });

  const getStyle = (cellId) => {
    let base = {
      padding: '0.4rem', border: '1px solid #e2e8f0', minWidth: '100px', height: '36px',
      outline: activeCell === cellId ? '2px solid #217346' : 'none',
      backgroundColor: activeCell === cellId ? '#f3f4f6' : 'white',
      cursor: 'cell',
      textAlign: cellId.includes('1') ? 'center' : 'right',
      fontWeight: cellId.includes('1') || cellId.includes('4') ? 'bold' : 'normal'
    };

    if (cellId === 'C2' && score.C2) base.backgroundColor = '#dcfce7';
    if (cellId === 'C3' && score.C3) base.backgroundColor = '#dcfce7';
    if (cellId === 'B4' && score.B4) base.backgroundColor = '#dcfce7';

    return base;
  };

  const handleCellClick = (cellId) => {
    setActiveCell(cellId);
    setFormula(cells[cellId]);
  };

  const handleApplyFormula = () => {
    if (!activeCell) return;

    let newVal = formula.toUpperCase().trim();
    let computedVal = newVal;

    if (activeCell === 'C2' && (newVal === '=A2-B2' || newVal === '70')) {
      computedVal = '=A2-B2 (70)';
      setScore(s => ({ ...s, C2: true }));
    } else if (activeCell === 'C3' && (newVal === '=A3-B3' || newVal === '265')) {
      computedVal = '=A3-B3 (265)';
      setScore(s => ({ ...s, C3: true }));
    } else if (activeCell === 'B4' && (newVal === '=SOMA(B2:B3)' || newVal === '=B2+B3' || newVal === '125')) {
      computedVal = '=SOMA(..) (125)';
      setScore(s => ({ ...s, B4: true }));
    } else if (activeCell === 'C2' || activeCell === 'C3' || activeCell === 'B4' || cellId.includes('4')) {
      // Free edit for others
    }

    setCells(prev => ({ ...prev, [activeCell]: computedVal }));
  };

  const isComplete = score.C2 && score.C3 && score.B4;

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <TableProperties size={24} color="#217346" /> 
          Prática 4.3: Interface de Planilhas
        </h3>
        <p className={styles.simDesc}>
          Calcule o "Balanço Final" nas células C2 e C3 (Fórmula: <code>=A2-B2</code>). Depois, descubra o Total de Reflorestamento na célula B4 usando <code>=SOMA(B2:B3)</code>.
        </p>
      </div>

      <div className={styles.simContent}>

        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', alignItems: 'center' }}>
          <div style={{ backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', padding: '0.4rem 1rem', width: '80px', textAlign: 'center', fontWeight: 'bold' }}>
            {activeCell || 'Fx'}
          </div>
          <input 
            type="text" 
            value={formula}
            onChange={(e) => setFormula(e.target.value)}
            disabled={!activeCell}
            placeholder={activeCell ? "Digite a fórmula e clique Enter ou em Aplicar" : "Selecione uma célula para editar"}
            onKeyDown={(e) => e.key === 'Enter' && handleApplyFormula()}
            style={{ flex: 1, padding: '0.5rem', border: '1px solid #217346', borderRadius: '4px' }}
          />
          <button 
            onClick={handleApplyFormula}
            disabled={!activeCell}
            style={{ backgroundColor: '#217346', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', display: 'flex', gap: '0.5rem' }}
          >
            <Calculator size={16} /> Aplicar
          </button>
        </div>

        <div style={{ overflowX: 'auto', border: '1px solid #cbd5e1', borderRadius: '4px', backgroundColor: '#f8fafc', padding: '0.5rem' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: '#e2e8f0', width: '30px', border: '1px solid #cbd5e1' }}></th>
                <th style={{ backgroundColor: '#e2e8f0', padding: '0.2rem', baseLine: 'middle', border: '1px solid #cbd5e1' }}>A</th>
                <th style={{ backgroundColor: '#e2e8f0', padding: '0.2rem', border: '1px solid #cbd5e1' }}>B</th>
                <th style={{ backgroundColor: '#e2e8f0', padding: '0.2rem', border: '1px solid #cbd5e1' }}>C</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map(row => (
                <tr key={row}>
                  <td style={{ backgroundColor: '#e2e8f0', textAlign: 'center', fontSize: '0.875rem', border: '1px solid #cbd5e1', fontWeight: 'bold' }}>{row}</td>
                  <td onClick={() => handleCellClick(`A${row}`)} style={getStyle(`A${row}`)}>{cells[`A${row}`]}</td>
                  <td onClick={() => handleCellClick(`B${row}`)} style={getStyle(`B${row}`)}>{cells[`B${row}`]}</td>
                  <td onClick={() => handleCellClick(`C${row}`)} style={getStyle(`C${row}`)}>{cells[`C${row}`]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isComplete && (
          <div className={`${styles.successBox} animate-fade-in`} style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Target size={24} color="var(--color-secondary)" />
            <div>
              <strong>Planilha Calculada!</strong> Operações como subtração pontual e agregações SOMA() ou PROCV são a base da limpeza tabular em Excel. O Low-Code expande isso para fluxos visuais!
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ExcelMock;
