import React from 'react';
import CardHabit from '../components/CardHabit';
import AddHabitForm from '../components/AddHabitForm';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const habits = useSelector((state) => state.habits);
  return (
    <div className="wrapper">
      <AddHabitForm />
      {habits?.map((habit, index) => (
        <CardHabit key={index} habit={habit} />
      ))}
    </div>
  );
};

export default HomePage;
