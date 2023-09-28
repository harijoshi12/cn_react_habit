// Importing required modules and components
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CardWeekView from '../components/CardWeekView';

// HabitDetailPage component
const HabitDetailPage = () => {
  // Extracting habit ID from the URL parameters

  const { id } = useParams();
  // Initializing navigation function from react-router

  const navigate = useNavigate();

  // Fetching the specific habit data from Redux store
  const habit = useSelector((state) => state.habits.find((h) => h.id === id));

  // Redirect to home if habit is not found
  if (!habit) {
    navigate('/');
    return null;
  }

  // Function to get the previous n days
  const getPreviousDays = (n) => {
    const days = [];
    for (let i = n - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      days.push(new Date(d));
    }
    return days;
  };

  // Get the last 7 days
  const days = getPreviousDays(7);

  // Render the component
  return (
    <div className="wrapper" id="habitDetalPage">
      <Link to="/">
        <span className="goBack">&larr; Go Back to Home</span>
      </Link>
      <h3 className="title">Habit: {habit.name}</h3>
      <div className="weekCardsContainer">
        {days?.map((day, index) => (
          <CardWeekView key={index} date={day} habit={habit} />
        ))}
      </div>
    </div>
  );
};

// Exporting HabitDetailPage component
export default HabitDetailPage;
