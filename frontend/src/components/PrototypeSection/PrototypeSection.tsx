import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './PrototypeSection.css'; // This should match the CSS file name exactly

const PrototypeSection: React.FC = () => {
  return (
    <Box className="prototype-section">
      <Typography variant="h4" className="prototype-title">Try Our Prototype</Typography>
      <Button variant="contained" color="secondary" href="/prototype/home" className="prototype-button">
        Access Prototype
      </Button>
    </Box>
  );
};

export default PrototypeSection;
