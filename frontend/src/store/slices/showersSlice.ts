import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ShowerLocation } from '../../types/showerTypes';

interface ShowersState {
  facilities: ShowerLocation[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ShowersState = {
  facilities: [],
  status: 'idle',
  error: null
};

export const fetchShowers = createAsyncThunk(
  'showers/fetchShowers',
  async () => {
    const response = await fetch('https://api.jsonbin.io/v3/b/680514b68960c979a589452d', {
      headers: {
        'X-Master-Key': '$2b$10$xFC7BlC/9mfhK2jwRMo.IemTR8HRFha0TZyWFgA8n./iRCF2kjqpG'
      }
    });
    const data = await response.json();
    return data.record;
  }
);

const showersSlice = createSlice({
  name: 'showers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShowers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchShowers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.facilities = action.payload;
      })
      .addCase(fetchShowers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch data';
      });
  },
});

export default showersSlice.reducer;