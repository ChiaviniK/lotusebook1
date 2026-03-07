import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, LayersControl, LayerGroup } from 'react-leaflet';
import L from 'leaflet';
import { Map as MapIcon, Layers } from 'lucide-react';
import styles from './Simulations.module.css';

// Fix for default marker icon in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom Icon for Deforestation
const fireIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Custom Icon for Conservation
const treeIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const SigMapSimulation = () => {
  const [activeArea, setActiveArea] = useState('amazon'); // 'amazon' or 'cerrado'
  
  // Coordinates for Brazil biomes
  const regions = {
    amazon: { center: [-3.4653, -62.2159], zoom: 5 },
    cerrado: { center: [-14.2350, -51.9253], zoom: 5 }
  };

  // Mock data for map features
  const deforestationPoints = [
    { id: 1, pos: [-4.5, -60.5], risk: 'Alto', area: '120ha' },
    { id: 2, pos: [-2.1, -58.9], risk: 'Crítico', area: '450ha' },
    { id: 3, pos: [-10.5, -53.2], risk: 'Médio', area: '80ha' },
    { id: 4, pos: [-12.5, -50.1], risk: 'Crítico', area: '310ha' } // Cerrado point
  ];

  const conservationProjects = [
    { id: 1, pos: [-3.1, -64.2], name: 'Reserva Mamirauá' },
    { id: 2, pos: [-1.5, -55.1], name: 'Parque Nacional de Tumucumaque' },
    { id: 3, pos: [-14.1, -47.8], name: 'Chapada dos Veadeiros' } // Cerrado point
  ];

  return (
    <div className={styles.simulationContainer}>
      <div className={styles.simHeader}>
        <h3 className={styles.simTitle}>
          <MapIcon size={24} color="#3498db" /> 
          Prática 6.3: WebGIS e Mapeamento Interativo
        </h3>
        <p className={styles.simDesc}>
          Explore o mapa abaixo simulando um WebGIS. Alterne as camadas visuais (Layers) no ícone lateral do mapa para visualizar os Focos de Desmatamento versus as Zonas de Conservação.
        </p>
      </div>

      <div className={styles.simContent}>
        
        <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ fontWeight: 'bold', fontSize: '0.875rem' }}>Centralizar Visão:</span>
          <button 
            className={`${styles.btnSecondary} ${activeArea === 'amazon' ? styles.active : ''}`}
            onClick={() => setActiveArea('amazon')}
            style={{ backgroundColor: activeArea === 'amazon' ? 'var(--color-primary)' : 'transparent', color: activeArea === 'amazon' ? 'white' : 'var(--color-primary)' }}
          >
            Amazônia
          </button>
          <button 
            className={`${styles.btnSecondary} ${activeArea === 'cerrado' ? styles.active : ''}`}
            onClick={() => setActiveArea('cerrado')}
            style={{ backgroundColor: activeArea === 'cerrado' ? 'var(--color-primary)' : 'transparent', color: activeArea === 'cerrado' ? 'white' : 'var(--color-primary)' }}
          >
            Cerrado
          </button>
        </div>

        <div style={{ height: '450px', width: '100%', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--color-border)', position: 'relative', zIndex: 1 }}>
          <MapContainer 
            center={regions[activeArea].center} 
            zoom={regions[activeArea].zoom} 
            style={{ height: '100%', width: '100%' }}
          >
            <LayersControl position="topright">
              {/* Basemaps */}
              <LayersControl.BaseLayer checked name="Satélite Esri">
                <TileLayer
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                  attribution='&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                />
              </LayersControl.BaseLayer>
              <LayersControl.BaseLayer name="Mapa Político (OpenStreetMap)">
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
              </LayersControl.BaseLayer>

              {/* Overlays */}
              <LayersControl.Overlay checked name="🔥 Alertas de Desmatamento (INPE Mock)">
                <LayerGroup>
                  {deforestationPoints.map(pt => (
                    <div key={`def-${pt.id}`}>
                      <Marker position={pt.pos} icon={fireIcon}>
                        <Popup>
                          <strong>Alerta Detectado</strong><br/>
                          Risco: {pt.risk} <br/>
                          Área Estimada: {pt.area}
                        </Popup>
                      </Marker>
                      {/* Add a heat circle approximation */}
                      <Circle center={pt.pos} radius={50000} pathOptions={{ color: 'red', fillColor: '#f03', fillOpacity: 0.2 }} />
                    </div>
                  ))}
                </LayerGroup>
              </LayersControl.Overlay>

              <LayersControl.Overlay checked name="🌳 Zonas de Conservação">
                <LayerGroup>
                  {conservationProjects.map(pt => (
                    <Marker key={`cons-${pt.id}`} position={pt.pos} icon={treeIcon}>
                      <Popup>
                        <strong>Área Protegida</strong><br/>
                        {pt.name}
                      </Popup>
                    </Marker>
                  ))}
                </LayerGroup>
              </LayersControl.Overlay>
            </LayersControl>
          </MapContainer>
        </div>
        
        <div style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--color-text-muted)', backgroundColor: 'var(--color-bg)', padding: '1rem', borderRadius: '8px' }}>
          <Layers size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
          <strong>Dica de Ferramenta:</strong> Em projetos reais, este componente renderiza dados GeoJSON gigantes. Bibliotecas como <code>react-leaflet</code> são o padrão da indústria para substituir antigos mapas estáticos por visualizações dinâmicas web.
        </div>

      </div>
    </div>
  );
};

export default SigMapSimulation;
