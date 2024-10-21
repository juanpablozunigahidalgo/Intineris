import React from 'react';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import HeroSection2 from '../../components/HeroSection2/HeroSection2';
import Features from '../../components/Features/Features';
import Footer from '../../components/Footer/Footer1';
import ImageHero2 from '../../components/ImageHero2/ImageHero';
import ContactForm from '../../components/ContactForm/ContactForm';

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <HeroSection2 />
      <Features />
      <ImageHero2 />
      <ContactForm /> 
      <Footer />
    </>
  );
};

export default LandingPage;
