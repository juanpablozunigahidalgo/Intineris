import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import Home from '../pages/Home/Home';
import PrototypeHome from '../pages/PrototypeHome/PrototypeHome';
import Investors from '../pages/Investors/Investors';
import JoinUs from '../pages/JoinUs/JoinUs';
import Logic from '../pages/Vision/Logic';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/gettashower" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/prototype" element={<PrototypeHome />} />
      <Route path="/investors" element={<Investors />} />
      <Route path="/joinus" element={<JoinUs />} />
      <Route path="/logic" element={<Logic />} />
    </Routes>
  );
};

export default AppRoutes;
