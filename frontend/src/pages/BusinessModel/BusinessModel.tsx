import React from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './BusinessModel.css';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BusinessModel: React.FC = () => {
  // Sample Data for Charts
  const cityData = {
    labels: ['Barcelona', 'Rome', 'Porto'],
    datasets: [
      {
        label: 'Total Users per Year',
        data: [395000, 310000, 115000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const revenueData = {
    labels: ['Barcelona', 'Rome', 'Porto'],
    datasets: [
      {
        label: 'Local Revenue (Millions €)',
        data: [15.95, 12.18, 4.92],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Tourist Revenue (Millions €)',
        data: [1.29, 1.27, 0.39],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Render the page with sections explaining the business model
  return (
    <Box className="business-model">
      <Typography variant="h2" className="business-title">
        Showermap Business Model
      </Typography>
      
      <Typography variant="h5" className="business-step">
        Step 1: Market Size (Locals and Tourists)
      </Typography>
      <Typography variant="body1" className="business-description">
        We are targeting both locals and tourists who engage in outdoor sports or are in need of showers. 
        Cities like Barcelona, Rome, and Porto have a high population and significant tourism.
      </Typography>
      <Bar data={cityData} options={{ responsive: true }} />

      <Typography variant="h5" className="business-step">
        Step 2: Pricing Strategy
      </Typography>
      <Typography variant="body1" className="business-description">
        We offer a flexible pricing model with three tiers: Basic Shower + Storage (€10), Premium Shower (€15), 
        and Monthly Membership (€50). The average revenue depends on usage patterns by locals and tourists.
      </Typography>

      <Typography variant="h5" className="business-step">
        Step 3: Revenue Estimation
      </Typography>
      <Typography variant="body1" className="business-description">
        Revenue is estimated based on the projected number of users and their selected services in each city.
      </Typography>
      <Bar data={revenueData} options={{ responsive: true }} />

      <Typography variant="h5" className="business-step">
        Step 4: Operating Costs and Profit Calculation
      </Typography>
      <Typography variant="body1" className="business-description">
        Total revenue is compared to operating costs (platform maintenance, marketing, operations). 
        The estimated net profit from the three cities is €34.28M in the first year.
      </Typography>

      <Box className="action-buttons">
        <Button variant="contained" color="secondary" href="/" className="back-button">
          Back to Home
        </Button>
      </Box>
    </Box>
  );
};

export default BusinessModel;
