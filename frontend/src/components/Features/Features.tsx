import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import './Features.css'; // Import new styles

const featuresData = [
  { title: 'Safe Storage', description: 'Store your belongings safely while you enjoy the city.' },
  { title: 'Convenient Locations', description: 'Find showers and storage close to your activities.' },
  { title: 'User-Friendly App', description: 'Easily navigate through our app to find what you need.' },
];

const Features: React.FC = () => {
  return (
    <Grid container spacing={2} className="features-container">
      {featuresData.map((feature) => (
        <Grid item xs={12} sm={4} key={feature.title} className="feature-item">
          <Paper elevation={3} className="feature-card">
            <Typography variant="h6" className="feature-title">{feature.title}</Typography>
            <Typography variant="body1" className="feature-description">{feature.description}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Features;
