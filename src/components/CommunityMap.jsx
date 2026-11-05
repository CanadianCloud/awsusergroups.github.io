import { useEffect } from 'react';
import { MapContainer, GeoJSON, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import land from '../data/maps/land.geojson.json';

const icon = L.divIcon({ className: 'community-marker', html: '<span></span>', iconSize: [15, 15], iconAnchor: [7, 7] });
function FitGroups({ groups }) {
  const map = useMap();
  useEffect(() => {
    if (groups.length) map.fitBounds(L.latLngBounds(groups.map(g => [g.lat, g.lng])), { padding: [35, 35], maxZoom: 6 });
    else map.setView([22, 10], 2);
  }, [groups, map]);
  return null;
}
export default function CommunityMap({ groups }) {
  const valid = groups.filter(g => Number.isFinite(g.lat) && Number.isFinite(g.lng) && Math.abs(g.lat) <= 90 && Math.abs(g.lng) <= 180);
  return <MapContainer center={[22, 10]} zoom={2} minZoom={1} maxZoom={7} maxBounds={[[-85, -190], [85, 190]]} maxBoundsViscosity={0.8} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }} aria-label="Map of AWS user groups">
    <GeoJSON data={land} interactive={false} attribution='Map data: <a href="https://www.naturalearthdata.com/">Natural Earth</a>' style={{ fillColor: '#e1e7ea', fillOpacity: 1, color: '#c3cfd6', weight: 0.7 }} />
    {valid.map((g, i) => <Marker key={`${g.name}-${i}`} position={[g.lat, g.lng]} icon={icon} title={g.name} eventHandlers={{ add: e => e.target.getElement()?.setAttribute('aria-label', g.name) }}><Popup><strong>{g.name}</strong><p>{[g.city, g.country].filter(Boolean).join(', ')}</p>{g.url && <a href={g.url} target="_blank" rel="noopener noreferrer">Visit this community</a>}</Popup></Marker>)}
    <FitGroups groups={valid} />
  </MapContainer>;
}
