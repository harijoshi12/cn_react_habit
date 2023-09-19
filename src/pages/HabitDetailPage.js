import React from 'react';
import { useParams } from 'react-router-dom';
import StatusButton from '../components/StatusButton';
import CardHabitDetail from '../components/CardHabitDetail';

const HabitDetailPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h3>Habit Id: {id}</h3>
      <CardHabitDetail />
    </div>
  );
};

export default HabitDetailPage;
