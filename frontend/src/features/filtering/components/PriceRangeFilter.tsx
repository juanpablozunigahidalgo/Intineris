import React from 'react';
import { Slider, Typography, Box } from '@mui/material';
import { PriceRange } from '../types/filterTypes';

interface PriceRangeFilterProps {
  title: string;
  value: PriceRange;
  onChange: (newValue: PriceRange) => void;
  max: number;
}

export const PriceRangeFilter: React.FC<PriceRangeFilterProps> = ({
  title,
  value,
  onChange,
  max
}) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography sx={{ color: '#fff', mb: 1 }}>{title}</Typography>
      <Slider
        value={[value.min, value.max]}
        onChange={(_, newValue: number | number[]) => {
          const [min, max] = newValue as number[];
          onChange({ min, max });
        }}
        valueLabelDisplay="auto"
        min={0}
        max={max}
        step={0.5}
        sx={{
          color: '#2196f3',
          '& .MuiSlider-thumb': {
            backgroundColor: '#fff',
          },
          '& .MuiSlider-track': {
            backgroundColor: '#2196f3',
          },
          '& .MuiSlider-rail': {
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          },
        }}
      />
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        color: '#2196f3',
        mt: 1
      }}>
        <Typography variant="caption">{value.min}€</Typography>
        <Typography variant="caption">{value.max}€</Typography>
      </Box>
    </Box>
  );
};