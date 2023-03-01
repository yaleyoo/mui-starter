import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/UserSlice';
import CommonSlice from './slices/CommonSlice';
export default configureStore({
  reducer: {
    user: userReducer,
    common: CommonSlice
  },
});
