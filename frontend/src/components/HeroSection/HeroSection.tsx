import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("your-image-url.jpg")',
        height: '100vh',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2">Welcome to Intineris</Typography>
      <Typography variant="h5">Find showers and safe storage for your belongings.</Typography>
      <Button variant="contained" color="secondary" component={Link} to="/prototype">
        Try Prototype
      </Button>
    </Box>
  );
};

export default HeroSection;