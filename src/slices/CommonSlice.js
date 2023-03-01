import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

export const commonSlice = createSlice({
  name: 'common',
  initialState: {
    isLoading: false
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }
});
export default commonSlice.reducer;

export const { setIsLoading } = commonSlice.actions;

