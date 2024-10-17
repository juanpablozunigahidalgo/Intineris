import React from 'react';
import { Box } from '@mui/material';
import './HeroSection3.css'; // Import new styles
import ChicasBicicleta from '../../Assets/Images/ChicasBicicleta.jpg'; // Adjust the path as necessary

const HeroSection3: React.FC = () => {
  return (
    <Box className="hero-section3">
      <Box className="hero-left3">
        <img src={ChicasBicicleta} alt="Chicas Bicicleta" className="hero-image" />
      </Box>
      <Box className="hero-right3">
        {/* Empty white space */}
      </Box>
    </Box>
  );
};

export default HeroSection3;