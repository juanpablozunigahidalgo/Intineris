import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import Features from '../components/Features/Features';
import PrototypeSection from '../components/PrototypeSection/PrototypeSection';
import Footer from '../components/Footer/Footer';
import PrototypeHome from '../pages/PrototypeHome/PrototypeHome';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Landing Page */}
      <Route
        path="/"
        element={
          <>
            <Header />
            <HeroSection />
            <Features />
            <PrototypeSection />
            <Footer />
          </>
        }
      />
      {/* Prototype Page */}
      <Route path="/prototype" element={<PrototypeHome />} />
    </Routes>
  );
};

export default AppRoutes;
