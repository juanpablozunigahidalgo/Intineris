import React from 'react';
import { Box, Typography } from '@mui/material';
import './HeroSection2.css'; // Import new styles

const HeroSection2: React.FC = () => {
  return (
    <Box className="hero-section2">
      <Typography variant="h4" className="hero-text">
        We want to provide tourists, cyclists and sport activists the possibility to find showers across the city.
      </Typography>
    </Box>
  );
};

export default HeroSection2;