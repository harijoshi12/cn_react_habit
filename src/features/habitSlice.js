import { createSlice } from '@reduxjs/toolkit';

export const habitSlice = createSlice({
  name: 'habits',
  initialState: [],
  reducers: {
    addHabit: (state, action) => {
      state.habits.push(action.payload);
    },
    updateHabitStatus: (state, action) => {
      const { id, status, day } = action.payload;
      const habit = state.habits.find((habit) => habit.id === id);
      if (habit) {
        habit.days[day] = status;
      }
    },
  },
});

export const { addHabit, updateHabitStatus } = habitSlice.actions;
export default habitSlice.reducer;
