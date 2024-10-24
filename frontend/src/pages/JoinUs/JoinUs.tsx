import React from 'react';
import './JoinUs.css';  // Import the CSS file

const JoinUs: React.FC = () => {
  return (
    <div className="joinus-container--joinus">
      
      {/* Text Section */}
      <section className="text-section-joinus">
        <h1>Join Intineris - The Sustainable Shower Sharing App</h1>
        <p>
          Intineris is on a mission to create a more sustainable and convenient way for hikers, cyclists, and eco-conscious individuals to find safe and accessible showers after their outdoor adventures. 
          We're building a platform that connects people who need a clean, secure space to refresh with hosts willing to share their facilities.
        </p>
        <p>
          We're looking for dedicated programmers, engineers, business leaders, and individuals passionate about sustainable solutions to join our growing team. Together, we can build a community that supports eco-friendly travel and healthy living.
        </p>
      </section>
      
      {/* Hero Section */}
      <section className="hero-section-joinus">
        <a 
          href="https://drive.google.com/intineris-pitch-deck" 
          target="_blank" 
          rel="noopener noreferrer"
          className="join-button"
        >
          View Our Pitch Deck
        </a>
      </section>
      
      {/* Why Join Us Section */}
      <section className="why-join-section-joinus">
        <h2>Why Join Intineris?</h2>
        <ul>
          <li>
            <strong>Innovate:</strong> Help us revolutionize the way people travel and stay clean on the go, offering a unique service to outdoor enthusiasts and commuters.
          </li>
          <li>
            <strong>Sustainability:</strong> Be part of an eco-conscious community that promotes resource sharing and reducing environmental impact.
          </li>
          <li>
            <strong>Growth:</strong> Work on a dynamic, fast-growing project with potential for global reach, creating meaningful social impact.
          </li>
          <li>
            <strong>Diverse Roles:</strong> Whether you're a developer, business strategist, or marketer, there's a place for you to make a difference in our mission.
          </li>
        </ul>
      </section>

      {/* Contact Form */}
      <section className="contact-section-joinus">
        <h2>Get in Touch and Join Us</h2>
        <form className="contact-form-joinus">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} placeholder="Tell us how you'd like to contribute!" />
          
          <button type="submit">Submit</button>
        </form>
      </section>
      
    </div>
  );
};

export default JoinUs;
