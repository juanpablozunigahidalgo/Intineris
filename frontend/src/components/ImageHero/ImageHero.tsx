import React from 'react';
import { Box } from '@mui/material';
import './ImageHero.css'; // Import new styles
import ChicasBicicleta from '../../Assets/Images/ChicasBicicleta.jpg'; // Adjust the path as necessary

const ImageHero: React.FC = () => {
  return (
    <Box className="hero-section3">
      <img src={ChicasBicicleta} alt="Chicas Bicicleta" className="hero-image" />
    </Box>
  );
};

export default ImageHero;
