import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';
import { ShowerLocation } from '../../../types/showerTypes';
import { FacilityPopup } from './FacilityPopup';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

interface MapViewProps {
  facilities: ShowerLocation[];
}

export const MapView: React.FC<MapViewProps> = ({ facilities }) => {
  const filters = useSelector((state: RootState) => state.filters);

  const filteredFacilities = facilities.filter(facility => {
    const matchesShowerPrice = 
      facility.pricing.shower >= filters.showerPrice.min &&
      facility.pricing.shower <= filters.showerPrice.max;

    const matchesLockerPrice = 
      facility.pricing.locker >= filters.lockerPrice.min &&
      facility.pricing.locker <= filters.lockerPrice.max;

    const matchesAmenities = 
      filters.amenities.length === 0 ||
      filters.amenities.every(amenity => facility.amenities.includes(amenity));

    return matchesShowerPrice && matchesLockerPrice && matchesAmenities;
  });

  const showerIcon = divIcon({
    className: 'custom-marker',
    html: '<div class="marker-dot"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10],
  });

  return (
    <MapContainer
      center={[41.3851, 2.1734]}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
        maxZoom={20}
      />
      {filteredFacilities.map((facility) => (
        <Marker
          key={facility.id}
          position={[facility.coordinates[0], facility.coordinates[1]]}
          icon={showerIcon}
        >
          <Popup>
            <FacilityPopup facility={facility} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};