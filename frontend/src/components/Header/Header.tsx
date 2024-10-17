import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import './Header.css'; // Import new styles

const Header: React.FC = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ backgroundColor: '#001122' }} // Use sx prop for styling
    >
      <Toolbar className="toolbar">
        <div className="nav-links">
          <Button color="inherit" className="nav-link">Home</Button>
          <Button color="inherit" className="nav-link">About</Button>
          <Button color="inherit" className="nav-link">Contact</Button>
        </div>
        <Typography variant="h6" className="logo">Intineris</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
