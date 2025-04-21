import React from 'react';
import { Box, Button } from '@mui/material';  // Added Button import
import { useFacilities } from './hooks/useFacilities';
import { MapView } from './components/MapView';
import { LoadingState } from './components/LoadingState';
import { ErrorState } from './components/ErrorState';
import { FilterPanel } from '../../features/filtering/components/FilterPanel';
import 'leaflet/dist/leaflet.css';
import './ShowerMap.css';

const ShowerMap: React.FC = () => {
  const { facilities, status, error } = useFacilities();
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);

  if (status === 'loading') return <LoadingState />;
  if (status === 'failed') return <ErrorState error={error} />;

  return (
    <Box sx={{ position: 'relative', width: '100%', height: 'calc(100vh - 64px)', overflow: 'hidden' }}>
      <MapView facilities={facilities} />
      
      {/* Filter Toggle Button for Mobile */}
      <Box
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          zIndex: 1500,
          display: { xs: 'block', md: 'none' }
        }}
      >
        <Button
          variant="contained"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          sx={{
            backgroundColor: 'rgba(18, 24, 38, 0.85)',
            backdropFilter: 'blur(8px)',
            '&:hover': {
              backgroundColor: 'rgba(18, 24, 38, 0.95)',
            }
          }}
        >
          {isFilterOpen ? 'Close Filters' : 'Open Filters'}
        </Button>
      </Box>

      {/* Filter Panel */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          width: { xs: '100%', md: '340px' },
          backgroundColor: 'rgba(18, 24, 38, 0.85)',
          backdropFilter: 'blur(8px)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
          overflowY: 'auto',
          overflowX: 'hidden',
          zIndex: 1400,
          transition: 'all 0.3s ease-in-out',
          transform: {
            xs: isFilterOpen ? 'translateX(0)' : 'translateX(100%)',
            md: 'translateX(0)'
          },
          padding: '20px 10px',
          boxSizing: 'border-box',
          display: 'block'
        }}
      >
        <FilterPanel />
      </Box>
    </Box>
  );
};

export default ShowerMap;