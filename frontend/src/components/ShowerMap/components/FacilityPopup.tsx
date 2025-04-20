import React from 'react';
import { Card, Typography, Chip, Button } from '@mui/material';
import { ShowerLocation } from '../../../types/showerTypes';

interface FacilityPopupProps {
  facility: ShowerLocation;
}

export const FacilityPopup: React.FC<FacilityPopupProps> = ({ facility }) => (
  <Card className="shower-popup">
    <Typography variant="h6">{facility.name}</Typography>
    <Typography variant="h6" color="secondary" className="pricing-info">
      Shower: {facility.pricing.shower.toFixed(2)} {facility.currency}
    </Typography>
    <Typography variant="subtitle1" color="secondary" className="pricing-info">
      Locker: {facility.pricing.locker.toFixed(2)} {facility.currency}/hr
    </Typography>
    <Typography variant="body2">
      {facility.address}, {facility.zipCode} Barcelona
    </Typography>
    
    <div className="opening-hours">
      {facility.openingHours.map((hours, index) => (
        <Typography key={index} variant="body2">
          {hours.days}: {hours.hours}
        </Typography>
      ))}
    </div>

    <div className="amenities">
      {facility.amenities.map((amenity, index) => (
        <Chip
          key={index}
          label={amenity}
          size="small"
          className="amenity-chip"
        />
      ))}
    </div>

    <div className="contact-info">
      <Typography variant="body2">
        📞 {facility.contact.phone}
      </Typography>
      <Typography variant="body2">
        ✉️ {facility.contact.email}
      </Typography>
    </div>

    <Button 
      variant="contained" 
      color="primary" 
      fullWidth
      className="book-button"
    >
      Book Now
    </Button>
  </Card>
);