import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css'; // Import new styles

const Header: React.FC = () => {

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offset = window.innerHeight / 4;  // Middle of the screen
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#001122' }}>
      <Toolbar className="toolbar">
        <div className="nav-links">
          <Button color="inherit" className="nav-link" href="#home">Home</Button>
          <Button color="inherit" className="nav-link" onClick={() => scrollToSection('vision')}>Vision</Button>
          <Button color="inherit" className="nav-link" onClick={() => scrollToSection('features')}>Features</Button>
          {/* Use RouterLink to navigate to /campaign */}
          <Button
            color="inherit"
            className="nav-link"
            component={RouterLink}
            to="/campaign"
          >
            Campaign
          </Button>
          <Button color="inherit" className="nav-link" href="#investors">Investors</Button>
          <Button color="inherit" className="nav-link" onClick={() => scrollToSection('contact')}>Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
