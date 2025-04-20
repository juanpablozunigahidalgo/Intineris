export interface ShowerLocation {
  id: string;
  name: string;
  pricing: {
    shower: number;
    locker: number;
  };
  currency: string;
  coordinates: [number, number];
  address: string;
  zipCode: string;
  openingHours: {
    days: string;
    hours: string;
  }[];
  contact: {
    phone: string;
    email: string;
  };
  amenities: string[];
}