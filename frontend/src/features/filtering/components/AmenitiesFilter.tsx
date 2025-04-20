import React from 'react';
import { Chip, Box, Typography } from '@mui/material';
import { AVAILABLE_AMENITIES } from '../types/filterTypes';

interface AmenitiesFilterProps {
  selectedAmenities: string[];
  onToggle: (amenity: string) => void;
}

export const AmenitiesFilter: React.FC<AmenitiesFilterProps> = ({
  selectedAmenities,
  onToggle
}) => {
  return (
    <Box>
      <Typography sx={{ color: '#fff', mb: 2 }}>Amenities</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {AVAILABLE_AMENITIES.map((amenity) => (
          <Chip
            key={amenity}
            label={amenity}
            onClick={() => onToggle(amenity)}
            sx={{
              backgroundColor: selectedAmenities.includes(amenity) 
                ? '#2196f3' 
                : 'transparent',
              color: selectedAmenities.includes(amenity) 
                ? '#fff' 
                : '#2196f3',
              border: '1px solid #2196f3',
              '&:hover': {
                backgroundColor: selectedAmenities.includes(amenity)
                  ? '#1976d2'
                  : 'rgba(33, 150, 243, 0.08)',
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};