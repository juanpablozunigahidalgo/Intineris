import React from 'react';
import './Investors.css';  // Import the CSS file

const Investors: React.FC = () => {
  return (
    <div className="investors-container">
      
      {/* Text Section */}
      <section className="text-section-investors">
        <h1>Become Part of Our Journey</h1>
        <p>We invite investors to be part of our success story. Learn more about our vision, and contact us for exciting opportunities.</p>
      </section>
      
      {/* Hero Section */}
      <section className="hero-section-investors">
        <a 
          href="https://drive.google.com/your-pitch-deck-link" 
          target="_blank" 
          rel="noopener noreferrer"
          className="pitch-button"
        >
          Our Pitch Deck
        </a>
      </section>
      
      {/* Contact Form */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} />
          
          <button type="submit">Submit</button>
        </form>
      </section>
      
    </div>
  );
};

export default Investors;
