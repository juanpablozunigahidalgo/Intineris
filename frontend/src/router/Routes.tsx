import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import PrototypeHome from '../pages/PrototypeHome/PrototypeHome';
import CampaignPage from '../pages/CampaignPage/CampaignPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<LandingPage />} />
      {/* Prototype Page */}
      <Route path="/prototype" element={<PrototypeHome />} />
      <Route path="/campaign" element={<CampaignPage />} />
    </Routes>
  );
};

export default AppRoutes;
