import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterState, PriceRange } from '../types/filterTypes';

const initialState: FilterState = {
  showerPrice: { min: 0, max: 10 },
  lockerPrice: { min: 0, max: 5 },
  amenities: []
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setShowerPriceRange: (state, action: PayloadAction<PriceRange>) => {
      state.showerPrice = action.payload;
    },
    setLockerPriceRange: (state, action: PayloadAction<PriceRange>) => {
      state.lockerPrice = action.payload;
    },
    toggleAmenity: (state, action: PayloadAction<string>) => {
      const amenity = action.payload;
      const index = state.amenities.indexOf(amenity);
      if (index === -1) {
        state.amenities.push(amenity);
      } else {
        state.amenities.splice(index, 1);
      }
    },
    resetFilters: (state) => {
      Object.assign(state, initialState);
    }
  }
});

export const { setShowerPriceRange, setLockerPriceRange, toggleAmenity, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;