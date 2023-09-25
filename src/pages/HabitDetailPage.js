import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
    const d = new Date();
    for (let i = 0; i < n; i++) {
      d.setDate(d.getDate() - 1);
      days.push(new Date(d));
    }
    return days;
  };
  const days = getPreviousDays(7);

  return (
    <div className="wrapper" id="habitDetalPage">
      <h3>{habit.name}</h3>
      <div className="weekCardsContainer">
        {days?.map((day, index) => (
          <CardWeekView key={index} date={day} habit={habit} />
        ))}
      </div>
    </div>
  );
};

export default HabitDetailPage;
