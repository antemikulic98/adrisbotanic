'use client';

import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

// Koordinate za Adris Botanic - Cesta pape Ivana Pavla II. 380, Kaštel Štafilić
const LOCATION = {
  lat: 43.5503145,
  lng: 16.3079696,
  address: 'Cesta pape Ivana Pavla II. 380',
  city: 'Kaštel Štafilić',
};

export const LocationMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!mapRef.current) return;

    let map: L.Map | null = null;

    const initMap = async () => {
      try {
        // Dynamic import of Leaflet (client-side only)
        const L = (await import('leaflet')).default;

        if (!mapRef.current) return;

        // Check if map already exists
        if ('_leaflet_id' in mapRef.current) {
          return;
        }

        // Custom zeleni marker icon
        const greenIcon = L.divIcon({
          className: 'custom-marker',
          html: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 50" width="40" height="50">
              <defs>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.3"/>
                </filter>
              </defs>
              <path 
                d="M20 0C9 0 0 9 0 20c0 11 20 30 20 30s20-19 20-30C40 9 31 0 20 0z" 
                fill="#274223" 
                filter="url(#shadow)"
              />
              <circle cx="20" cy="18" r="8" fill="white"/>
              <circle cx="20" cy="18" r="4" fill="#274223"/>
            </svg>
          `,
          iconSize: [40, 50],
          iconAnchor: [20, 50],
          popupAnchor: [0, -50],
        });

        // Initialize map
        map = L.map(mapRef.current, {
          center: [LOCATION.lat, LOCATION.lng],
          zoom: 16,
          scrollWheelZoom: false,
        });

        // Add tile layer (OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);

        // Add marker with custom green icon
        const marker = L.marker([LOCATION.lat, LOCATION.lng], { icon: greenIcon }).addTo(map);

        // Add popup
        marker.bindPopup(`
          <div style="text-align: center; padding: 8px; min-width: 180px;">
            <p style="font-weight: bold; color: #274223; margin: 0 0 8px 0; font-size: 16px;">
              🌿 Adrisbotanic
            </p>
            <p style="color: #555; margin: 0 0 4px 0; font-size: 13px;">
              ${LOCATION.address}
            </p>
            <p style="color: #555; margin: 0 0 12px 0; font-size: 13px;">
              ${LOCATION.city}
            </p>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=${LOCATION.lat},${LOCATION.lng}" 
              target="_blank" 
              rel="noopener noreferrer"
              style="display: inline-block; background: #274223; color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-size: 13px; font-weight: bold;"
            >
              📍 Navigacija
            </a>
          </div>
        `);

        setIsLoaded(true);
      } catch (err) {
        console.error('Error loading map:', err);
        setError(true);
      }
    };

    initMap();

    // Cleanup
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  if (error) {
    return (
      <div
        className='w-full h-full flex items-center justify-center'
        style={{ backgroundColor: '#f3f6f3' }}
      >
        <div className='text-center p-8'>
          <div
            className='w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-3'
            style={{ backgroundColor: '#274223' }}
          >
            <MapPin className='w-8 h-8 text-white' />
          </div>
          <p className='font-bold text-neutral-900 mb-2'>Adrisbotanic</p>
          <p className='text-sm text-neutral-600 mb-1'>{LOCATION.address}</p>
          <p className='text-sm text-neutral-600 mb-4'>{LOCATION.city}</p>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${LOCATION.lat},${LOCATION.lng}`}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block px-4 py-2 rounded-lg text-white text-sm font-bold'
            style={{ backgroundColor: '#274223' }}
          >
            Otvori u Google Maps
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className='relative w-full h-full z-0'>
      {!isLoaded && (
        <div
          className='absolute inset-0 flex items-center justify-center z-10'
          style={{ backgroundColor: '#f3f6f3' }}
        >
          <div className='text-center'>
            <div
              className='w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-3 animate-pulse'
              style={{ backgroundColor: '#274223' }}
            >
              <MapPin className='w-8 h-8 text-white' />
            </div>
            <p className='text-sm text-neutral-500'>Učitavam kartu...</p>
          </div>
        </div>
      )}
      <div ref={mapRef} className='w-full h-full' />
    </div>
  );
};
