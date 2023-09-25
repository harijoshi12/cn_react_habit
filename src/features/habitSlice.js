import { createSlice } from '@reduxjs/toolkit';

// Load habits from local storage
const loadHabits = () => {
  const habitsData = localStorage.getItem('habits');
  return habitsData ? JSON.parse(habitsData) : [];
};

export const habitSlice = createSlice({
  name: 'habits',
  initialState: loadHabits(),
  reducers: {
    addHabit: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('habits', JSON.stringify(state));
    },
    updateHabitStatus: (state, action) => {
      const { id, day, status } = action.payload;
      const habit = state.find((h) => h.id === id);
      if (habit) {
        if (!habit.days) {
          habit.days = {};
        }
        habit.days[day] = status;
        localStorage.setItem('habits', JSON.stringify(state)); // Update local storage
      }
    },
  },
});

export const { addHabit, updateHabitStatus } = habitSlice.actions;
export default habitSlice.reducer;
