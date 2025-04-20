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

export const showersData: ShowerLocation[] = [
  {
    id: '1',
    name: 'GymHub Barcelona',
    pricing: {
      shower: 2.50,
      locker: 1.00
    },
    currency: 'EUR',
    coordinates: [41.3851, 2.1734],
    address: 'Plaça de Catalunya, 15',
    zipCode: '08002',
    openingHours: [
      { days: 'Monday - Friday', hours: '06:00 - 22:00' },
      { days: 'Saturday', hours: '08:00 - 20:00' },
      { days: 'Sunday', hours: '09:00 - 18:00' }
    ],
    contact: {
      phone: '+34 932 123 456',
      email: 'central@gymhub.bcn'
    },
    amenities: ['Towel Rental', 'Hair Dryer', 'Lockers']
  },
  {
    id: '2',
    name: 'Barceloneta Sports Club',
    pricing: {
      shower: 2.00,
      locker: 0.75
    },
    currency: 'EUR',
    coordinates: [41.3788, 2.1925],
    address: 'Passeig Marítim, 25',
    zipCode: '08003',
    openingHours: [
      { days: 'Monday - Sunday', hours: '07:00 - 21:00' }
    ],
    contact: {
      phone: '+34 932 234 567',
      email: 'beach@barceloneta.sport'
    },
    amenities: ['Beach Access', 'Lockers']
  }
];