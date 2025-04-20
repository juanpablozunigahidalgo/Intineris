import React from 'react';
import { Typography } from '@mui/material';

interface ErrorStateProps {
  error: string | null;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ error }) => (
  <div className="error-container">
    <Typography color="error">Error: {error}</Typography>
  </div>
);