import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { PriceRangeFilter } from './PriceRangeFilter';
import { AmenitiesFilter } from './AmenitiesFilter';
import {
  setShowerPriceRange,
  setLockerPriceRange,
  toggleAmenity,
  resetFilters
} from '../store/filterSlice';

export const FilterPanel: React.FC = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);

  return (
    <Box sx={{ color: '#fff', p: 2 }}>
      <Typography 
        variant="h6" 
        sx={{ 
          color: '#fff',
          mb: 3,
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          pb: 1
        }}
      >
        Filters
      </Typography>

      <Box sx={{ mb: 4 }}>
        <PriceRangeFilter
          title="Shower Price (€)"
          value={filters.showerPrice}
          onChange={(range) => dispatch(setShowerPriceRange(range))}
          max={10}
        />
      </Box>

      <Box sx={{ mb: 4 }}>
        <PriceRangeFilter
          title="Locker Price (€/hr)"
          value={filters.lockerPrice}
          onChange={(range) => dispatch(setLockerPriceRange(range))}
          max={5}
        />
      </Box>

      <Box sx={{ mb: 4 }}>
        <AmenitiesFilter
          selectedAmenities={filters.amenities}
          onToggle={(amenity) => dispatch(toggleAmenity(amenity))}
        />
      </Box>

      <Button
        variant="outlined"
        fullWidth
        onClick={() => dispatch(resetFilters())}
        sx={{
          color: '#2196f3',
          borderColor: '#2196f3',
          '&:hover': {
            borderColor: '#1976d2',
            backgroundColor: 'rgba(33, 150, 243, 0.08)'
          }
        }}
      >
        Reset Filters
      </Button>
    </Box>
  );
};