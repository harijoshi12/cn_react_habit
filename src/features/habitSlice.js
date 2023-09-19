import { createSlice } from '@reduxjs/toolkit';

export const habitSlice = createSlice({
  name: 'habits',
  initialState: [],
  reducers: {
    addHabit: (state, action) => {
      // add a habit
    },
    updateHabitStatus: (statue, action) => {
      // update habit status
    },
  },
});

export const { addHabit, updateHabitStatus } = habitSlice.actions;
export default habitSlice.reducer;
