import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// AWS orange marker icon
const createAwsMarkerIcon = () => {
  return L.divIcon({
    className: 'aws-marker',
    html: `
      <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 20 12 20s12-11 12-20c0-6.627-5.373-12-12-12z" fill="#FF9900"/>
        <circle cx="12" cy="12" r="5" fill="#232F3E"/>
      </svg>
    `,
    iconSize: [24, 32],
    iconAnchor: [12, 32],
    popupAnchor: [0, -32],
  });
};

// Map bounds controller
function MapBoundsController({ userGroups }) {
  const map = useMap();

  useEffect(() => {
    if (userGroups && userGroups.length > 0) {
      const validGroups = userGroups.filter(g => g.lat && g.lng);
      if (validGroups.length > 0) {
        const bounds = L.latLngBounds(validGroups.map(g => [g.lat, g.lng]));
        map.fitBounds(bounds, { padding: [20, 20] });
      }
    }
  }, [map, userGroups]);

  return null;
}

export default function WorldMap({ className = '' }) {
  const [userGroups, setUserGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load user groups data
    const loadUserGroups = async () => {
      try {
        const response = await import('@/data/userGroups.json');
        const data = response.default || response;
        
        // Filter to only groups with valid coordinates
        const validGroups = (data.userGroups || []).filter(
          group => group.lat && group.lng && 
                   !isNaN(group.lat) && !isNaN(group.lng)
        );
        
        setUserGroups(validGroups);
        setLoading(false);
      } catch (err) {
        console.error('Failed to load user groups:', err);
        setError('Failed to load user groups data');
        setLoading(false);
      }
    };

    loadUserGroups();
  }, []);

  if (loading) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`} style={{ minHeight: '500px' }}>
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`} style={{ minHeight: '500px' }}>
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  const awsMarkerIcon = createAwsMarkerIcon();

  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`} style={{ minHeight: '500px', zIndex: 0 }}>
      <MapContainer
        center={[25, 10]}
        zoom={2.3}
        style={{ height: '100%', width: '100%', minHeight: '500px', zIndex: 0 }}
        scrollWheelZoom={false}
        zoomControl={true}
        minZoom={2}
        maxZoom={10}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png"
          subdomains="abcd"
        />
        
        {userGroups.map((group, index) => (
          <Marker
            key={`${group.name}-${index}`}
            position={[group.lat, group.lng]}
            icon={awsMarkerIcon}
          >
            <Popup>
              <div className="text-sm">
                <h3 className="font-bold text-[#232F3E] mb-1">{group.name}</h3>
                {group.city && group.country && (
                  <p className="text-gray-600 mb-2">{group.city}, {group.country}</p>
                )}
                {group.city && !group.country && (
                  <p className="text-gray-600 mb-2">{group.city}</p>
                )}
                {group.url && (
                  <a
                    href={group.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF9900] hover:text-[#ec7211] font-medium"
                  >
                    Join Group →
                  </a>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
        
        <MapBoundsController userGroups={userGroups} />
      </MapContainer>
      
      {/* Group count badge */}
      <div className="absolute bottom-4 left-4 bg-[#232F3E] text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-lg z-[1000]">
        {userGroups.length} User Groups
      </div>
    </div>
  );
}
