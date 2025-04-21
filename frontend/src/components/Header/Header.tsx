import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#001122' }}>
      <Toolbar className="toolbar">
        <IconButton
          color="inherit"
          className="menu-button"
          onClick={toggleMenu}
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Button
            color="inherit"
            className="nav-link"
            component={RouterLink}
            to="/gettashower"
            onClick={() => setIsMenuOpen(false)}
          >
            HOME
          </Button>
          <Button
            color="inherit"
            className="nav-link"
            component={RouterLink}
            to="/fullmap"
            onClick={() => setIsMenuOpen(false)}
          >
            FULL MAP
          </Button>
          <Button
            color="inherit"
            className="nav-link"
            component={RouterLink}
            to="/logic"
            onClick={() => setIsMenuOpen(false)}
          >
            LOGIC
          </Button>
          <Button
            color="inherit"
            className="nav-link"
            component={RouterLink}
            to="/Prototype"
            onClick={() => setIsMenuOpen(false)}
          >
            GET APP
          </Button>
          <Button
            color="inherit"
            className="nav-link"
            component={RouterLink}
            to="/joinus"
            onClick={() => setIsMenuOpen(false)}
          >
            JOIN US
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
