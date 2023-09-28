// Importing required modules and components
import React from 'react';
import CardHabit from '../components/CardHabit';
import AddHabitForm from '../components/AddHabitForm';
import { useSelector } from 'react-redux';

// HomePage component
const HomePage = () => {
  // Using Redux useSelector hook to get the state of habits
  const habits = useSelector((state) => state.habits);
  // Render the component
  return (
    <div className="wrapper">
      <AddHabitForm />
      {habits?.map((habit, index) => (
        <CardHabit key={index} habit={habit} />
      ))}
    </div>
  );
};

// Exporting HomePage component
export default HomePage;
