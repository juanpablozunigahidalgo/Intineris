import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const featuresData = [
  { title: 'Safe Storage', description: 'Store your belongings safely while you enjoy the city.' },
  { title: 'Convenient Locations', description: 'Find showers and storage close to your activities.' },
  { title: 'User-Friendly App', description: 'Easily navigate through our app to find what you need.' },
];

const Features: React.FC = () => {
  return (
    <Grid container spacing={2} sx={{ padding: 4 }}>
      {featuresData.map((feature) => (
        <Grid item xs={12} sm={4} key={feature.title}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">{feature.title}</Typography>
            <Typography variant="body1">{feature.description}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Features;