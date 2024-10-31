import React from 'react';
import './JoinUs.css';  // Import the CSS file

const JoinUs: React.FC = () => {
  return (
    <div className="joinus-container--joinus">
      
      {/* Text Section */}
      <section className="text-section-joinus">
        <h1>Join US</h1>
        <p>
          Intineris is on a mission to create a more sustainable and convenient world by offering people access to showers and safe storage for their belongings. Whether you're a tourist, hiker, cyclist, runner, or swimmer, Intineris is about transforming cities into a vast gym where you can be active and access every corner of the city. The city is yours. The city is for everyone to enjoy. 
        </p>
        <p>
          If you want to contribute as an engineer, business idealist, or individual, you are welcome! This is about finding passionate people who want to better the world, reduce the use of petrol transportation, and incentivize human-powered transport. 
        </p>
      </section>
      
      
      {/* Contact Form */}
      <section className="contact-section-joinus">
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
