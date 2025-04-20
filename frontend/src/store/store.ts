import { configureStore } from '@reduxjs/toolkit';
import showersReducer from './slices/showersSlice';
import filterReducer from '../features/filtering/store/filterSlice';

export const store = configureStore({
  reducer: {
    showers: showersReducer,
    filters: filterReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;