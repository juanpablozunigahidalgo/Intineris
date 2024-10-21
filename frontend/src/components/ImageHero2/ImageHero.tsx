import React from 'react';
import { Box } from '@mui/material';
import './ImageHero2.css'; // Import new styles
import ChicasBicicleta from '../../Assets/Images/BicicletaNewYork.jpg'; // Adjust the path as necessary

const ImageHero2: React.FC = () => {
  return (
    <Box className="hero-section3">
      <img src={ChicasBicicleta} alt="Chicas Bicicleta" className="hero-image" />
    </Box>
  );
};

export default ImageHero2;
