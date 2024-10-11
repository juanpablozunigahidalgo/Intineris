import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './HeroSection.css'; // Import new styles

const HeroSection: React.FC = () => {
  return (
    <Box className="hero-section">
      <Typography variant="h2" className="hero-title">Welcome to Intineris</Typography>
      <Typography variant="h5" className="hero-subtitle">Find showers and safe storage for your belongings.</Typography>
      <Button variant="contained" color="secondary" component={Link} to="/prototype" className="hero-button">
        Try Prototype
      </Button>
    </Box>
  );
};

export default HeroSection;
