import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import PrototypeHome from '../pages/PrototypeHome/PrototypeHome';

import Investors from '../pages/Investors/Investors';
import JoinUs from '../pages/JoinUs/JoinUs';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<LandingPage />} />
      {/* Prototype Page */}
      <Route path="/prototype" element={<PrototypeHome />} />
      <Route path="/investors" element={<Investors />} />
      <Route path="/joinus" element={<JoinUs />} />
    </Routes>
  );
};

export default AppRoutes;
