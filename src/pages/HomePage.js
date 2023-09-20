import React from 'react';
import CardHabit from '../components/CardHabit';
import AddHabitForm from '../components/AddHabitForm';

const HomePage = () => {
  return (
    <>
      <AddHabitForm />
      <CardHabit />
    </>
  );
};

export default HomePage;
