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
      
      {/* Add an id for Home */}
      <section id="home">
        <HeroSection />
      </section>
      
      {/* Add an id for Vision */}
      <section id="vision">
        <HeroSection2 />
      </section>
      
      {/* Add an id for Features */}
      <section id="features">
        <Features />
      </section>
      
      {/* Add an id for Campaign */}
      <section id="campaign">
        <ImageHero2 />
      </section>
      
      {/* Add an id for Contact */}
      <section id="contact">
        <ContactForm />
      </section>

      <Footer />
    </>
  );
};

export default LandingPage;