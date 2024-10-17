import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import PrototypeHome from '../pages/PrototypeHome/PrototypeHome';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<LandingPage />} />
      {/* Prototype Page */}
      <Route path="/prototype" element={<PrototypeHome />} />
    </Routes>
  );
};

export default AppRoutes;
