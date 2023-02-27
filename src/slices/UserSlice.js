import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {}
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  }
});
export default userSlice.reducer;

export const { setUser } = userSlice.actions;

export const getBookings = (conditions) => async dispatch => {
//   let bookings = await SvcGetBookings(conditions);
//   let uids = new Set();
//   bookings.forEach(b => {
//     uids.add(b.provider_uid);
//   });
//   uids.forEach(u => dispatch(getProviderByUID(u)));
//   dispatch(setBookings(bookings));
};

// export const selectCurrentBookings = createSelector(
//   state => state.booking.bookings,
//   bookings => {
//     return bookings.filter(v => new Date(TransferSlotIdToDateAndTime((v.detail.slot_id)?.toString())) >new Date());
//   }
// );
// export const selectPastBookings = createSelector(
//   state => state.booking.bookings,
//   bookings => {
//     return bookings.filter(v => new Date(TransferSlotIdToDateAndTime((v.detail.slot_id)?.toString())) <= new Date());
//   }
// );

