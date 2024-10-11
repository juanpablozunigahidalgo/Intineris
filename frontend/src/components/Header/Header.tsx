import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // For mobile menu
import './Header.css'; // Import new styles

const Header: React.FC = () => {
  return (
    <AppBar position="static" className="header">
      <Toolbar className="toolbar">
        <Typography variant="h6" className="logo">Intineris</Typography>
        <div className="nav-links">
          <Button color="inherit" className="nav-link">Home</Button>
          <Button color="inherit" className="nav-link">About</Button>
          <Button color="inherit" className="nav-link">Contact</Button>
        </div>
        <IconButton edge="end" color="inherit" className="menu-button">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
