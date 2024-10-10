import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ padding: 2, textAlign: 'center' }}>
      <Typography variant="body2">© 2024 Intineris. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;