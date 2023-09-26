import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import CardHabitDetail from '../components/CardWeekView';
import { useSelector } from 'react-redux';
import CardWeekView from '../components/CardWeekView';

const HabitDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const habit = useSelector((state) => state.habits.find((h) => h.id === id));
  if (!habit) {
    navigate('/');
    return null;
  }
  const getPreviousDays = (n) => {
    const days = [];
    for (let i = n - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      days.push(new Date(d));
    }
    return days;
  };
  const days = getPreviousDays(7);

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

export default HabitDetailPage;
