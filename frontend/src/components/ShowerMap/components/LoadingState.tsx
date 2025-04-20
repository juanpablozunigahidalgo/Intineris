import React from 'react';
import { CircularProgress, Typography } from '@mui/material';

export const LoadingState: React.FC = () => (
  <div className="loading-container">
    <CircularProgress />
    <Typography>Loading shower facilities...</Typography>
  </div>
);