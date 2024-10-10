import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const PrototypeHome: React.FC = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2">Prototype Version</Typography>
      <Typography variant="body1" sx={{ margin: '20px 0' }}>
        This is the prototype version of Intineris.
      </Typography>
      <Button variant="contained" color="primary" href="/">
        Back to Home
      </Button>
    </Box>
  );
};

export default PrototypeHome;