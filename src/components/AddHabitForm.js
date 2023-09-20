import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHabit } from '../features/habitSlice';

const AddHabitForm = () => {
  const [habitName, setHabitName] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim === '') return;
    const newHabit = {
      id: nanoid(),
      name: habitName,
      days: Array(7).fill('None'),
    };
    dispatch(addHabit(newHabit));
    setHabitName('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Habit Name"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
      />
      <button type="submit">Add Habit</button>
    </form>
  );
};

export default AddHabitForm;
