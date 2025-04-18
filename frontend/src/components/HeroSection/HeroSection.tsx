import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import Typed from 'typed.js';
import './HeroSection.css'; // Import your CSS file
import IntinerisLogo from './Intineris-Logo.svg'; // Adjust the path as necessary
import App1 from '../../Assets/Images/App1.png';
import App2 from '../../Assets/Images/App2.png';
import App3 from '../../Assets/Images/App3.png';

const HeroSection: React.FC = () => {
  const typedElement = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const options = {
      strings: [" Tourists.", " Runners.", " Cyclists.", " Hikers.", " Swimmers.", " Bike commuters.", " City hikers. ", " Skaters. ", " Walk commuters. "],
      typeSpeed: 130,
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
        <Typography 
          variant="h2" 
          sx={{ 
            fontSize: '50px',
            fontWeight: 'bold',
            marginBottom: '5px'
          }}
        >
          Gettashower
        </Typography>
        <Typography 
          variant="h5" 
          sx={{ 
            marginBottom: '20px',  // Add more space below the text
            lineHeight: 1.5         // Adjust the line height for better spacing
          }}
        >
          Showers and storage for <span ref={typedElement} style={{ 
               // Larger font size
            fontWeight: 'bold' // Bolder text
             // Increase space below 
             }}></span>
        </Typography>
      </Box>
      <Box className="hero-right">
        <img src={App1} alt="App 1" className="app-image" />
        <img src={App2} alt="App 2" className="app-image" />
        <img src={App3} alt="App 3" className="app-image" />
      </Box>
    </Box>
  );
};

export default HeroSection;
