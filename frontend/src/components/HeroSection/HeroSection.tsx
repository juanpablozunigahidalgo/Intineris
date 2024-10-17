import React from 'react';
import { Box, Typography } from '@mui/material';
import './HeroSection.css'; // Import new styles
import IntinerisLogo from './Intineris-Logo.svg'; // Adjust the path as necessary

const HeroSection: React.FC = () => {
  return (
    <Box className="hero-section">
      <Box className="hero-left">
        <Typography variant="h2" className="hero-title">Intineris</Typography>
        <Typography variant="h5" className="hero-slogan">The city is our gym</Typography>
      </Box>
      <Box className="hero-right">
        <img src={IntinerisLogo} alt="Intineris Logo" className="hero-logo" />
      </Box>
    </Box>
  );
};

export default HeroSection;
