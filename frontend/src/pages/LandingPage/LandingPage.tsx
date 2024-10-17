import React from 'react';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import HeroSection2 from '../../components/HeroSection2/HeroSection2';
import Features from '../../components/Features/Features';
import PrototypeSection from '../../components/PrototypeSection/PrototypeSection';
import Footer from '../../components/Footer/Footer';
import HeroSection3 from '../../components/HeroSection3/HeroSection3';

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <HeroSection2 />
      <HeroSection3 />
      <Features />
      <PrototypeSection />
      <Footer />
    </>
  );
};

export default LandingPage;