import React from 'react';
import { useDispatch } from 'react-redux';
import { updateHabitStatus } from '../features/habitSlice';

const StatusButton = ({ title, habit, day }) => {
  const dispatch = useDispatch();
  const handleToggleStatus = () => {
    dispatch(updateHabitStatus({ id: habit.id, status: title, day }));
  };
  return <button onClick={handleToggleStatus}>{title}</button>;
};

export default StatusButton;
