import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './PrototypeHome.css'; // Import the CSS file

const PrototypeHome: React.FC = () => {
  return (
    <Box className="prototype-home">
      <Typography variant="h2" className="prototype-title">Prototype Version</Typography>
      <Typography variant="body1" className="prototype-description">
        This is the prototype version of Intineris.
      </Typography>
      <Button variant="contained" color="secondary" href="/" className="prototype-button">
        Back to Home
      </Button>
    </Box>
  );
};

export default PrototypeHome;
