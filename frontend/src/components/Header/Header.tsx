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
        {/* <Typography variant="h6" className="logo">Intineris</Typography> */}
        <div className="nav-links">
          <Button color="inherit" className="nav-link">Home</Button>
          <Button color="inherit" className="nav-link">Vision</Button>
          <Button color="inherit" className="nav-link">Campaing</Button>
          <Button color="inherit" className="nav-link">Join Us</Button>
          <Button color="inherit" className="nav-link">Get APP</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
