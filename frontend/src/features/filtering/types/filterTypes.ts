export interface PriceRange {
  min: number;
  max: number;
}

export interface FilterState {
  showerPrice: PriceRange;
  lockerPrice: PriceRange;
  amenities: string[];
}

export const AVAILABLE_AMENITIES = [
  'Towel Rental',
  'Hair Dryer',
  'Changing Rooms',
  'Shampoo',
  'Shampoo-sale',
  'Monitored-Bike-Parking'
] as const;