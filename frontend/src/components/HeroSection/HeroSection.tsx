import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import Typed from 'typed.js';
import './HeroSection.css'; // Import new styles
import IntinerisLogo from './Intineris-Logo.svg'; // Adjust the path as necessary

const HeroSection: React.FC = () => {
  const typedElement = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const options = {
      strings: [" Tourists.", " Runners.", " Cyclists.", " Hikers.", " Swimmers.", " Bike commuters."],
      typeSpeed: 55,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typedElement.current!, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Box className="hero-section">
      <Box className="hero-left">
        <Typography variant="h2" className="hero-title">Intineris</Typography>
        <Typography variant="h5" className="hero-slogan">
          Showers and storage for : <span ref={typedElement}></span>
        </Typography>
      </Box>
      <Box className="hero-right">
        <img src={IntinerisLogo} alt="Intineris Logo" className="hero-logo" />
      </Box>
    </Box>
  );
};

export default HeroSection;
