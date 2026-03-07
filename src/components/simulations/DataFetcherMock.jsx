import { useState } from 'react';
import { CloudDownload, Globe, Database } from 'lucide-react';
import styles from './Simulations.module.css';

const DataFetcherMock = () => {
  const [uf, setUf] = useState('AM');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleFetch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setData(null);
    setError(null);

    try {
      // Real API Call to IBGE
      const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf.toUpperCase()}/municipios`);
      
      if (!response.ok) {
        throw new Error('Erro na resposta da API');
      }

      const json = await response.json();
      
      if (json.length === 0) {
        throw new Error('UF não encontrada ou sem municípios.');
      }

      // We slice the first 3 counties just to not pollute the UI with a massive JSON
      const slicedData = {
        _meta: {
          total_municipios_encontrados: json.length,
          fonte: "IBGE Servico de Dados (API Real)"
        },
        amostra_municipios: json.slice(0, 3).map(m => ({
          id: m.id,
          nome: m.nome,
          microrregiao: m.microrregiao.nome,
          mesorregiao: m.microrregiao.mesorregiao.nome
        }))
      };

      setData(slicedData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <CloudDownload size={24} color="#3498db" /> 
          Prática 2.1: Consumindo a API Real do IBGE
        </h3>
        <p className={styles.simDesc}>
          Nosso mock evoluiu! Este formulário faz uma requisição HTTP GET real para a API do Governo Brasileiro. Digite uma sigla de Estado (Ex: AM, MT, SP) para trazer a malha municipal oficial.
        </p>
      </div>

      <div className={styles.simContent}>
        <form onSubmit={handleFetch} style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Globe size={18} color="var(--color-text-muted)" style={{ position: 'absolute', left: '12px', top: '10px' }} />
            <input 
              type="text" 
              value={uf}
              onChange={(e) => setUf(e.target.value)}
              placeholder="Digite a UF (Ex: SP, RJ, BA)"
              maxLength={2}
              style={{ 
                width: '100%', 
                padding: '0.6rem 1rem 0.6rem 2.5rem', 
                borderRadius: '4px', 
                border: '1px solid var(--color-border)',
                fontFamily: 'monospace',
                textTransform: 'uppercase'
              }}
            />
          </div>
          <button type="submit" className={styles.btnPrimary} disabled={loading} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {loading ? 'Buscando IBGE...' : 'Fazer Request GET'}
          </button>
        </form>

        <div style={{ 
          backgroundColor: '#1e1e1e', 
          color: '#d4d4d4', 
          padding: '1.5rem', 
          borderRadius: '8px', 
          minHeight: '200px',
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          position: 'relative',
          overflowX: 'auto'
        }}>
          {!data && !loading && !error && (
            <div style={{ color: '#808080', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '150px' }}>
              <Database size={32} style={{ marginBottom: '1rem', opacity: 0.5 }} />
              <p>Esperando Input para acionar: servicodados.ibge.gov.br</p>
            </div>
          )}
          
          {loading && (
            <div style={{ color: '#569cd6' }}>&gt; Disparando Fetch Request para IBGE...<br/>&gt; Aguardando JSON response...</div>
          )}

          {error && (
            <div style={{ color: '#f44336' }}>
              &gt; ERRO HTTP: {error}
            </div>
          )}

          {data && !loading && (
            <pre style={{ margin: 0 }}>
              <span style={{ color: '#569cd6' }}>✓ HTTP/1.1 200 OK (Mundo Real!)</span>{'\n'}
              <span style={{ color: '#ce9178' }}>Content-Type:</span> application/json{'\n\n'}
              <span style={{ color: '#dcdcaa' }}>{JSON.stringify(data, null, 2)}</span>
            </pre>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataFetcherMock;
