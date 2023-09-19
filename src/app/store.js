import { configureStore } from '@reduxjs/toolkit';
import habitReducer from '../features/habitSlice';

export default configureStore({
  reducer: {
    habits: habitReducer,
  },
});
