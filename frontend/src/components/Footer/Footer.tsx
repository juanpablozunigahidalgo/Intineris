import React from 'react';
import { Box } from '@mui/material';
import './Footer.css'; // Import new styles

const Footer: React.FC = () => {
  return (
    <div className="footer">
      {/* Other content above the copyright notice */}
      <div>Contact Address: Goteborg Entrepreneur Share Office Space</div>
      <div>Email: <a href="mailto:info@intineris.com">info@intineris.com</a></div>
      <div>
        <a href="/investors-documents">Investors Documents</a>
        <a href="/other-relevant-data">Other Relevant Data</a>
      </div>
      {/* Copyright notice at the bottom */}
      <div className="copyright">© 2024 Intineris. All rights reserved.</div>
    </div>
  );
};

export default Footer;
