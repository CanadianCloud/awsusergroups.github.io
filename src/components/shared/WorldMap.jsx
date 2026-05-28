import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerImg from '@/assets/points.png';

// AWS dark marker icon (use asset image)
const createAwsMarkerIcon = () => {
  return L.icon({
    iconUrl: markerImg,
    iconSize: [16, 16],
    iconAnchor: [8, 16],
    popupAnchor: [0, -12],
    className: 'aws-marker-icon',
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

// Mobile touch handler - enables better touch interaction
function MobileInteractionHandler() {
  const map = useMap();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // Enable touch zoom on mobile for better UX
      map.touchZoom.enable();
      map.dragging.enable();
    }
  }, [map, isMobile]);

  return null;
}

export default function WorldMap({ className = '' }) {
  const [userGroups, setUserGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Load user groups data
    const loadUserGroups = async () => {
      try {
        const response = await import('@/data/userGroups.json');
        const data = response.default || response;
        
        // Filter to only groups with valid coordinates
        const allValidGroups = (data.userGroups || []).filter(
          group => group.lat && group.lng && 
                   !isNaN(group.lat) && !isNaN(group.lng)
        );

        // Reference points approximating the image (lat, lng)
        const referencePoints = [
          [44.0, -79.0],   // Eastern Canada / Toronto area
          [29.0, -95.0],   // Central US (Texas)
          [40.7, -74.0],   // New York
          [-34.6, -58.4],  // Buenos Aires
          [-23.5, -46.6],  // São Paulo
          [-1.45, -48.47], // Belém / northern Brazil
          [51.5, -0.12],   // London
          [40.4, -3.7],    // Madrid
          [52.52, 13.41],  // Berlin
          [28.6, 77.2],    // New Delhi
          [-33.87, 151.2], // Sydney
        ];

        // Haversine distance in km
        const toRad = v => (v * Math.PI) / 180;
        const distanceKm = (a, b) => {
          const lat1 = a[0]; const lon1 = a[1];
          const lat2 = b[0]; const lon2 = b[1];
          const R = 6371; // km
          const dLat = toRad(lat2 - lat1);
          const dLon = toRad(lon2 - lon1);
          const radLat1 = toRad(lat1);
          const radLat2 = toRad(lat2);
          const sinDLat = Math.sin(dLat/2);
          const sinDLon = Math.sin(dLon/2);
          const aHarv = sinDLat*sinDLat + sinDLon*sinDLon * Math.cos(radLat1) * Math.cos(radLat2);
          const c = 2 * Math.atan2(Math.sqrt(aHarv), Math.sqrt(1 - aHarv));
          return R * c;
        };

        // Show all valid groups so the map markers reflect the full dataset
        setUserGroups(allValidGroups);
        setLoading(false);
      } catch (err) {
        console.error('Failed to load user groups:', err);
        setError('Failed to load user groups data');
        setLoading(false);
      }
    };

    loadUserGroups();
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (loading) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`} style={{ minHeight: '300px' }}>
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`} style={{ minHeight: '300px' }}>
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  const awsMarkerIcon = createAwsMarkerIcon();

  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`} style={{ height: '100%', minHeight: '300px', zIndex: 0 }}>
      <MapContainer
        center={[25, 10]}
        zoom={isMobile ? 1.5 : 2}
        style={{ height: '100%', width: '100%', zIndex: 0 }}
        scrollWheelZoom={false}
        zoomControl={true}
        minZoom={1}
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
        <MobileInteractionHandler />
      </MapContainer>
      
      {/* Group count badge */}
      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-[#232F3E] text-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-lg z-[1000]">
        {userGroups.length} User Groups
      </div>
      
      {/* Mobile hint */}
      {isMobile && (
        <div className="absolute top-3 right-3 bg-black/60 text-white px-2 py-1 rounded text-xs z-[1000] pointer-events-none animate-pulse">
          Pinch to zoom
        </div>
      )}
    </div>
  );
}
