import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer1';

const JoinUs: React.FC = () => {
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
            Join Us
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, fontSize: '1.2rem', lineHeight: 1.6 }}>
            Gettashower is on a mission to create a more sustainable and convenient world by offering people access to showers and safe storage for their belongings. Whether you're a tourist, hiker, cyclist, runner, or swimmer, Gettashower is about transforming cities into a vast gym where you can be active and access every corner of the city. The city is yours. The city is for everyone to enjoy.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem', lineHeight: 1.6 }}>
            If you want to contribute as an engineer, business idealist, or individual, you are welcome! This is about finding passionate people who want to better the world, reduce the use of petrol transportation, and incentivize human-powered transport.
          </Typography>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default JoinUs;
