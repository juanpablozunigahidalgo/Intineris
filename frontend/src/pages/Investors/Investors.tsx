import React from 'react';
import './Investors.css';

const Investors: React.FC = () => {
  return (
    <div className="investors-container">
      <section className="text-section-investors">
        <h1>Invest</h1>
        <p>We invite investors to be part of our building story. Learn more about our vision, and contact us for the opportunity Gettashower offers.</p>
      </section>

      <a 
        href="https://drive.google.com/your-pitch-deck-link" 
        target="_blank" 
        rel="noopener noreferrer"
        className="pitch-button"
      >
        Our Pitch Deck
      </a>
    </div>
  );
};

export default Investors;
