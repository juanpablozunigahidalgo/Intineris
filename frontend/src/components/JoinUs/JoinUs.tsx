import React, { useState } from 'react';
import './JoinUs.css'; // Import styles for the form

const JoinUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contributorType: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="join-us-container">
      <div className="info-section">
        <h2 className="info-title">Join Us</h2>
        <p className="info-text">
          We are developing this project with React Native Cloud architecture. We need business people but also software engineers to make this vision possible. If you feel motivated to create a better world, please do not hesitate to join us and contribute somehow.
        </p>
      </div>
      <div className="form-section">
        <form className="join-us-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contributorType">Contributor Type</label>
            <select
              id="contributorType"
              name="contributorType"
              value={formData.contributorType}
              onChange={handleChange}
              required
            >
              <option value="">Select...</option>
              <option value="developer">Developer</option>
              <option value="entrepreneur">Entrepreneur</option>
            </select>
          </div>
          <button type="submit" className="submit-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
