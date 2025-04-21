import React from 'react';
import { Box, Typography } from '@mui/material';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import { useFacilities } from '../ShowerMap/hooks/useFacilities';
import { LoadingState } from '../ShowerMap/components/LoadingState';
import { ErrorState } from '../ShowerMap/components/ErrorState';
import { MapView } from '../ShowerMap/components/MapView';
import 'leaflet/dist/leaflet.css';
import './MapPreviewSection.css';

const MapPreviewSection: React.FC = () => {
  const navigate = useNavigate();
  const { facilities, status, error } = useFacilities();

  if (status === 'loading') {
    return (
      <Box sx={{ 
        position: 'relative', 
        width: '100%', 
        height: '400px',
        overflow: 'hidden',
        backgroundColor: 'rgba(18, 24, 38, 0.85)'
      }}>
        <LoadingState />
      </Box>
    );
  }

  if (status === 'failed') {
    return (
      <Box sx={{ 
        position: 'relative', 
        width: '100%', 
        height: '400px',
        overflow: 'hidden',
        backgroundColor: 'rgba(18, 24, 38, 0.85)'
      }}>
        <ErrorState error={error} />
      </Box>
    );
  }

  return (
    <Box 
      sx={{ 
        position: 'relative', 
        width: '100%', 
        height: '400px',
        overflow: 'hidden',
        cursor: 'pointer',
        '& > div': {
          height: '100%',
          width: '100%'
        }
      }}
      onClick={() => navigate('/map')}
    >
      <MapView facilities={facilities} />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(18, 24, 38, 0.2)',
          transition: 'background-color 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(18, 24, 38, 0.3)',
          },
          zIndex: 1000,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            backgroundColor: 'rgba(18, 24, 38, 0.85)',
            color: 'white',
            padding: '15px 30px',
            borderRadius: '8px',
            backdropFilter: 'blur(8px)',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 500,
          }}
        >
          Click to view full map
        </Typography>
      </Box>
    </Box>
  );
};

export default MapPreviewSection;