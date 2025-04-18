import React from 'react';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import HeroSection2 from '../../components/HeroSection2/HeroSection2';
import Features from '../../components/Features/Features';
import Footer from '../../components/Footer/Footer1';
import BlueHero from '../../components/BlueHero/BlueHero';
import ContactForm from '../../components/ContactForm/ContactForm';

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <section id="vision">
        <HeroSection2 />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="campaign">
        <BlueHero />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <Footer />
    </>
  );
};

export default LandingPage;