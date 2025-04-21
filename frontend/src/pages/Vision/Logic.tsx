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
            Vision
          </Typography>
          
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
            The Context
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem', lineHeight: 1.6 }}>
            Many people are migrating to cities. Today, 55% of the world's population lives in urban areas, and this is expected to grow to 68% by 2050 (UN). Across the world, cities are evolving to become more sustainable. Beautiful cities like Tokyo, Paris, Barcelona, Santiago de Chile, Buenos Aires, and Mexico City are transforming themselves to provide a better quality of life to their residents. Through urban infrastructure improvement programs, sustainable mobility systems are being implemented, promoting the use of bicycles or simply walking instead of using cars. This results in healthier populations and lower energy demands.
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem', lineHeight: 1.6 }}>
            Additionally, the use of digital technologies has made cities more accessible, allowing residents to enjoy common spaces more effectively. Today, platforms exist where apartments can be rented in cities around the world (Airbnb). Similarly, bicycles and electric scooter transportation systems are available for rent (Bolt, Tier, etc.).
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem', lineHeight: 1.6 }}>
            In summary, the world is concentrating into megacities. These cities are becoming more sustainable and efficient, offering a better quality of life in terms of aesthetics and practical conditions like transportation. Residents have access to infrastructure that allows them to enjoy city attractions regardless of their social or income status.
          </Typography>

          <Typography variant="h4" sx={{ mb: 3, mt: 4, fontWeight: 600 }}>
            The Opportunity
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem', lineHeight: 1.6 }}>
            High-population cities, or megacities, offer tremendous growth potential for network-based ideas where available infrastructure can improve people's quality of life. Gettashower can help in the process of making cities more sustainable by promoting the use of bicycles and walking or running for transportation, thus reducing public transportation and car usage.
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem', lineHeight: 1.6 }}>
            The tourism industry also encourages consumption within cities, enabling tourists to make more efficient use of their limited vacation time. High-traffic cities like Barcelona, Madrid, Rome, or Milan could greatly benefit from this system.
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem', lineHeight: 1.6 }}>
            Additionally, megacities provide almost unlimited growth in the use of shower infrastructure and secure storage systems. These cities are increasingly focused on sustainability, encouraging bicycle use, and facilitating access to previously underutilized neighborhoods. For example, residents can run or enjoy parks in the city center and then continue with their daily activities.
          </Typography>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Logic;