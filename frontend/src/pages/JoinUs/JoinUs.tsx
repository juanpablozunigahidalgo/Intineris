import React from 'react';
import { useNavigate } from 'react-router-dom';
import './JoinUs.css';

const JoinUs: React.FC = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/'); // Navigate to the homepage

    // Add a short delay to ensure the page loads before scrolling
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Adjust timing if needed
  };

  return (
    <div className="joinus-container--joinus">
      
      {/* Text Section */}
      <section className="text-section-joinus">
        <h1>Join Us</h1>
        <p>
          Intineris is on a mission to create a more sustainable and convenient world by offering people access to showers and safe storage for their belongings. Whether you're a tourist, hiker, cyclist, runner, or swimmer, Intineris is about transforming cities into a vast gym where you can be active and access every corner of the city. The city is yours. The city is for everyone to enjoy.
        </p>
        <p>
          If you want to contribute as an engineer, business idealist, or individual, you are welcome! This is about finding passionate people who want to better the world, reduce the use of petrol transportation, and incentivize human-powered transport.
        </p>
      </section>
      
      {/* Contact Button */}
      <section className="contact-section-joinus">
        <button onClick={handleContactClick} className="join-button">
          Contact Us
        </button>
      </section>
      
    </div>
  );
};

export default JoinUs;
