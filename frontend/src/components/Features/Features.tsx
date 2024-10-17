import React from 'react';
import { Grid, Typography } from '@mui/material';
import './Features.css'; // Import new styles

const featuresData = [
  { title: 'Safe Storage', description: 'Store your belongings safely while you enjoy the city.' },
  { title: 'Convenient Locations', description: 'Find showers and storage close to your activities.' },
  { title: 'User-Friendly App', description: 'Easily navigate through our app to find what you need.' },
];

const Features: React.FC = () => {
  return (
    <Grid container spacing={2} className="features-container">
      {featuresData.map((feature, index) => (
        <Grid item xs={12} sm={4} key={feature.title} className="feature-item">
          <div className="feature-circle">
            <Typography variant="h6" className="feature-title">{feature.title}</Typography>
          </div>
          <Typography variant="body1" className="feature-description">{feature.description}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Features;
