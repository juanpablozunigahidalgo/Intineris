import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const PrototypeSection: React.FC = () => {
  return (
    <Box sx={{ padding: 4, textAlign: 'center' }}>
      <Typography variant="h4">Try Our Prototype</Typography>
      <Button variant="contained" color="primary" href="/prototype/home">Access Prototype</Button>
    </Box>
  );
};

export default PrototypeSection;