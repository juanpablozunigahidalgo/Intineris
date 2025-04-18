import React, { useState, useEffect } from 'react';
import './Logic.css';

const Logic: React.FC = () => {
  const [isReadingMode, setIsReadingMode] = useState(false);
  const [typedContent, setTypedContent] = useState('');

  const handleToggleReadingMode = () => {
    setIsReadingMode(!isReadingMode);
    setTypedContent(''); // Reset the typing effect on toggle
  };

  const content = `
    The Context:

    Many people are migrating to cities. Today, 55% of the world’s population lives in urban areas, and this is expected to grow to 68% by 2050 (UN). Across the world, cities are evolving to become more sustainable. Beautiful cities like Tokyo, Paris, Barcelona, Santiago de Chile, Buenos Aires, and Mexico City are transforming themselves to provide a better quality of life to their residents. Through urban infrastructure improvement programs, sustainable mobility systems are being implemented, promoting the use of bicycles or simply walking instead of using cars. This results in healthier populations and lower energy demands.

    Additionally, the use of digital technologies has made cities more accessible, allowing residents to enjoy common spaces more effectively. Today, platforms exist where apartments can be rented in cities around the world (Airbnb). Similarly, bicycles and electric scooter transportation systems are available for rent (Bolt, Tier, etc.).

    In summary, the world is concentrating into megacities. These cities are becoming more sustainable and efficient, offering a better quality of life in terms of aesthetics and practical conditions like transportation. Residents have access to infrastructure that allows them to enjoy city attractions regardless of their social or income status.

    The Opportunity:

    High-population cities, or megacities, offer tremendous growth potential for network-based ideas where available infrastructure can improve people’s quality of life. ITINERIS can help in the process of making cities more sustainable by promoting the use of bicycles and walking or running for transportation, thus reducing public transportation and car usage.

    The tourism industry also encourages consumption within cities, enabling tourists to make more efficient use of their limited vacation time. High-traffic cities like Barcelona, Madrid, Rome, or Milan could greatly benefit from this system.

    Additionally, megacities provide almost unlimited growth in the use of shower infrastructure and secure storage systems. These cities are increasingly focused on sustainability, encouraging bicycle use, and facilitating access to previously underutilized neighborhoods. For example, residents can run or enjoy parks in the city center and then continue with their daily activities.
  `;

  // Typing effect logic
  useEffect(() => {
    if (!isReadingMode) return;

    let index = 0;
    const speed = 25; // Adjust typing speed here

    const typeText = () => {
      if (index < content.length) {
        setTypedContent((prev) => prev + content[index]);
        index++;
        setTimeout(typeText, speed);
      }
    };

    typeText();

    return () => setTypedContent(''); // Reset when leaving typing mode
  }, [isReadingMode]);

  return (
    <div className="vision-container">
      <button onClick={handleToggleReadingMode} className="toggle-button">
        {isReadingMode ? 'Reading Mode Off' : 'Reading Mode On'}
      </button>

      <section className="text-section-vision">
        <h1>Vision</h1>
        <p style={{ textAlign: 'justify' }}>
          {isReadingMode ? typedContent : content}
        </p>
      </section>
    </div>
  );
};

export default Logic;