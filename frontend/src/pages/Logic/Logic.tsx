import React from 'react';
import { Box, Typography } from '@mui/material';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer1';

const Logic: React.FC = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundColor: '#001122',
          color: 'white',
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px'
        }}
      >
        <Box
          sx={{
            maxWidth: '800px',
            width: '100%',
            textAlign: 'justify'
          }}
        >
          <Typography variant="h2" sx={{ mb: 4, fontWeight: 700 }}>
            Our Logic
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, fontSize: '1.2rem', lineHeight: 1.6 }}>
            At Gettashower, we believe in making cities more accessible and sustainable. Our platform connects people with shower facilities and secure storage spaces across urban areas, enabling a more active and sustainable lifestyle.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, fontSize: '1.2rem', lineHeight: 1.6 }}>
            We understand that cities should be designed for people, not just vehicles. By providing convenient access to showers and storage, we're removing barriers that prevent people from choosing active transportation methods like cycling, running, or walking.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
            Our network of facilities supports tourists, commuters, and sports enthusiasts, making it easier to integrate physical activity into daily urban life while reducing reliance on motorized transport.
          </Typography>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Logic;