import React from 'react';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import HeroSection2 from '../../components/HeroSection2/HeroSection2';
import Features from '../../components/Features/Features';
import Footer from '../../components/Footer/Footer';
import ImageHero  from '../../components/ImageHero/ImageHero';
import JoinUs from '../../components/JoinUs/JoinUs';

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <HeroSection2 />
      <Features />
      <ImageHero />
      <JoinUs />
      <ImageHero />
      <Footer />
    </>
  );
};

export default LandingPage;
