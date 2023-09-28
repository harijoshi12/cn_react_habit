// Importing createSlice from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Function to load habits from local storage
const loadHabits = () => {
  const habitsData = localStorage.getItem('habits');
  // Parse JSON data if available, otherwise return an empty array
  return habitsData ? JSON.parse(habitsData) : [];
};

// Creating a Redux slice for habits
export const habitSlice = createSlice({
  name: 'habits', // Slice name
  initialState: loadHabits(), // Initial state loaded from local storage

  // Reducers
  reducers: {
    // Reducer to add a new habit
    addHabit: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('habits', JSON.stringify(state));
    },
    // Reducer to update the status of a habit
    updateHabitStatus: (state, action) => {
      const { id, day, status } = action.payload;
      // Find the habit by ID
      const habit = state.find((h) => h.id === id);
      if (habit) {
        // Initialize days object if it doesn't exist
        if (!habit.days) {
          habit.days = {};
        }
        // Update the status for the specific day
        habit.days[day] = status;
        // Update local storage
        localStorage.setItem('habits', JSON.stringify(state));
      }
    },
    // Reducer to delete a habit
    deleteHabit: (state, action) => {
      const id = action.payload;
      // Filter out the habit to be deleted
      const newState = state.filter((habit) => habit.id !== id);
      // Update local storage
      localStorage.setItem('habits', JSON.stringify(newState));
      return newState;
    },
  },
});

// Exporting actions and reducer
export const { addHabit, updateHabitStatus, deleteHabit } = habitSlice.actions;
export default habitSlice.reducer;
