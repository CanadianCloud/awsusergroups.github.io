import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const icon = L.divIcon({ className: 'community-marker', html: '<span></span>', iconSize: [15, 15], iconAnchor: [7, 7] });
function FitGroups({ groups }) {
  const map = useMap();
  useEffect(() => {
    if (groups.length) map.fitBounds(L.latLngBounds(groups.map(g => [g.lat, g.lng])), { padding: [30, 30], maxZoom: 8 });
    else map.setView([22, 10], 2);
  }, [groups, map]);
  return null;
}
export default function CommunityMap({ groups }) {
  const valid = groups.filter(g => Number.isFinite(g.lat) && Number.isFinite(g.lng) && Math.abs(g.lat) <= 90 && Math.abs(g.lng) <= 180);
  return <MapContainer center={[22, 10]} zoom={2} minZoom={1} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }} aria-label="Map of AWS user groups">
    <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>' />
    {valid.map((g, i) => <Marker key={`${g.name}-${i}`} position={[g.lat, g.lng]} icon={icon} title={g.name} eventHandlers={{ add: e => e.target.getElement()?.setAttribute('aria-label', g.name) }}><Popup><strong>{g.name}</strong><p>{[g.city, g.country].filter(Boolean).join(', ')}</p>{g.url && <a href={g.url} target="_blank" rel="noopener noreferrer">Visit this community ↗</a>}</Popup></Marker>)}
    <FitGroups groups={valid} />
  </MapContainer>;
}
