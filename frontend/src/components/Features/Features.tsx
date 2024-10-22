import React from 'react';
import { Grid, Typography } from '@mui/material';
import './Features.css'; // Import new styles

const featuresData = [
  { title: 'Showers', description: 'Store your belongings safely while you enjoy the city.' },
  { title: 'Storage', description: 'Find showers close to your activities. The city is yours.' },
  { title: 'Trust', description: 'All users are ID checked and evaluated by the community.' },
];

const Features: React.FC = () => {
  return (
    <div className="section-position">
      <div className="center-vertical" >
      <Grid container spacing={5} className="features-container">
        {featuresData.map((feature, index) => (
          <Grid item xs={12} sm={4} key={feature.title} className="feature-item">
            <Typography variant="h2" className="feature-title">{feature.title}</Typography>
            <Typography variant="body1" className="feature-description">{feature.description}</Typography>
          </Grid>
        ))}
      </Grid>
      </div>
    </div>
  );
};

export default Features;