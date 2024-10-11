import React from 'react';
import { Box, Typography } from '@mui/material';
import './Footer.css'; // Import new styles

const Footer: React.FC = () => {
  return (
    <Box className="footer">
      <Typography variant="body2">© 2024 Intineris. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
