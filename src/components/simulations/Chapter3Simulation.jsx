import { useState, useEffect } from 'react';
import { Database, Sparkles, Download } from 'lucide-react';
import styles from './Simulations.module.css';

const Chapter3Simulation = () => {
  const [data, setData] = useState([
    { id: 1, temp: '32,5', date: '2024/05/12', city: 'S. Paulo', cleanedTemp: false, cleanedDate: false, cleanedCity: false },
    { id: 2, temp: 'N/A', date: '13-05-2024', city: 'SAO PAULO', cleanedTemp: false, cleanedDate: false, cleanedCity: false },
    { id: 3, temp: '31.2', date: '05-14-24', city: 'São paulo ', cleanedTemp: false, cleanedDate: false, cleanedCity: false }
  ]);

  const [score, setScore] = useState(0);

  useEffect(() => {
    let currentScore = 0;
    data.forEach(row => {
      if (row.cleanedTemp) currentScore++;
      if (row.cleanedDate) currentScore++;
      if (row.cleanedCity) currentScore++;
    });
    setScore(currentScore);
  }, [data]);

  const cleanCell = (id, field) => {
    setData(prev => prev.map(row => {
      if (row.id === id) {
        return { ...row, [`cleaned${field}`]: true };
      }
      return row;
    }));
  };

  const getTempValue = (row) => row.cleanedTemp ? (row.id === 2 ? 'NULL' : row.temp.replace(',', '.')) : row.temp;
  const getDateValue = (row) => row.cleanedDate ? `2024-05-${11 + row.id}` : row.date;
  const getCityValue = (row) => row.cleanedCity ? 'São Paulo' : row.city;

  const getStyle = (isCleaned) => ({
    padding: '0.75rem', 
    border: '1px solid var(--color-border)', 
    cursor: isCleaned ? 'default' : 'pointer',
    backgroundColor: isCleaned ? 'var(--color-bg)' : '#fcf0ed',
    color: isCleaned ? 'var(--color-text-main)' : '#d9381e',
    transition: 'all 0.2s',
    textDecoration: isCleaned ? 'none' : 'underline dashed'
  });

  const handleExportCSV = () => {
    // Generate CSV string based on cleaned data
    const headers = "ID,Temperatura (°C),Data (ISO),Município\n";
    const rows = data.map(row => {
      const temp = getTempValue(row);
      const date = getDateValue(row);
      const city = getCityValue(row);
      return `${row.id},${temp},${date},${city}`;
    }).join('\n');
    
    const csvContent = headers + rows;
    
    // Create Blob
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    // Create hidden anchor and trigger download
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "dados_limpos_ambiental.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <Database size={24} color="var(--color-secondary)" /> 
          Prática: Limpador de Planilhas
        </h3>
        <p className={styles.simDesc}>
          Sua planilha veio cheia de erros de digitação (em vermelho). Clique nas células sujas para "limpá-las" e padronizá-las.
        </p>
      </div>

      <div className={styles.simContent}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', marginBottom: '1.5rem' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--color-surface-hover)' }}>
              <th style={{ padding: '0.75rem', borderBottom: '2px solid var(--color-border)' }}>ID</th>
              <th style={{ padding: '0.75rem', borderBottom: '2px solid var(--color-border)' }}>Temperatura (°C)</th>
              <th style={{ padding: '0.75rem', borderBottom: '2px solid var(--color-border)' }}>Data (ISO)</th>
              <th style={{ padding: '0.75rem', borderBottom: '2px solid var(--color-border)' }}>Município</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.id}>
                <td style={{ padding: '0.75rem', border: '1px solid var(--color-border)' }}>{row.id}</td>
                <td style={getStyle(row.id === 3 || row.cleanedTemp)} onClick={() => cleanCell(row.id, 'Temp')}>
                  {getTempValue(row)}
                </td>
                <td style={getStyle(row.cleanedDate)} onClick={() => cleanCell(row.id, 'Date')}>
                  {getDateValue(row)}
                </td>
                <td style={getStyle(row.cleanedCity)} onClick={() => cleanCell(row.id, 'City')}>
                  {getCityValue(row)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, backgroundColor: 'var(--color-border)', height: '8px', borderRadius: '4px', overflow: 'hidden', marginRight: '1rem' }}>
            <div style={{ width: `${(score / 8) * 100}%`, backgroundColor: 'var(--color-accent)', height: '100%', transition: 'width 0.3s' }}></div>
          </div>
          <span style={{ fontWeight: 'bold', color: 'var(--color-primary-dark)' }}>
            {score === 8 ? 'Base 100% Limpa!' : `${Math.round((score / 8) * 100)}% Limpo`}
          </span>
        </div>

        {score === 8 && (
          <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-secondary)' }}>
              <Sparkles size={20} />
              <span>Excelente! Agora as coordenadas, datas e unidades estão prontas para o software. Baixe seu CSV final.</span>
            </div>
            
            <button onClick={handleExportCSV} className={styles.btnPrimary} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Download size={18} />
              Exportar .csv Limpo
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chapter3Simulation;
