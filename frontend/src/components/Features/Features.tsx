import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import ShowerIcon from '@mui/icons-material/Shower';
import LockIcon from '@mui/icons-material/Lock';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import './Features.css';

const featuresData = [
  { 
    title: 'Showers', 
    description: 'Find showers close to your activities. The city is yours.',
    icon: <ShowerIcon sx={{ fontSize: 50 }} />
  },
  { 
    title: 'Storage', 
    description: 'Store your belongings safely while you enjoy the city.',
    icon: <LockIcon sx={{ fontSize: 50 }} />
  },
  { 
    title: 'Trust', 
    description: 'All users are ID checked and evaluated by the community.',
    icon: <VerifiedUserIcon sx={{ fontSize: 50 }} />
  },
];

const Features: React.FC = () => {
  return (
    <div className="section-position">
      <div className="center-vertical">
        <Typography variant="h2" className="features-title">
          Our Features
        </Typography>
        <Grid container spacing={4} className="features-container">
          {featuresData.map((feature) => (
            <Grid item xs={12} sm={4} key={feature.title}>
              <Paper elevation={3} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <Typography variant="h4" className="feature-title">
                  {feature.title}
                </Typography>
                <Typography variant="body1" className="feature-description">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Features;