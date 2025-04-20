import React from 'react';
import { useFacilities } from './hooks/useFacilities';
import { MapView } from './components/MapView';
import { LoadingState } from './components/LoadingState';
import { ErrorState } from './components/ErrorState';
import { FilterPanel } from '../../features/filtering/components/FilterPanel';
import { Box } from '@mui/material';
import 'leaflet/dist/leaflet.css';
import './ShowerMap.css';

const ShowerMap: React.FC = () => {
  const { facilities, status, error } = useFacilities();

  if (status === 'loading') return <LoadingState />;
  if (status === 'failed') return <ErrorState error={error} />;

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100vh' }}>
      <MapView facilities={facilities} />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '320px',
          backgroundColor: 'rgba(18, 24, 38, 0.85)',
          backdropFilter: 'blur(8px)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
          overflowY: 'auto',
          zIndex: 1000,
        }}
      >
        <FilterPanel />
      </Box>
    </Box>
  );
};

export default ShowerMap;