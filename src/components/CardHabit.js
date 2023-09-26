import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { deleteHabit } from '../features/habitSlice';

const CardHabit = ({ habit }) => {
  const dispatch = useDispatch();
  const count = habit?.days
    ? Object.values(habit.days).filter((status) => status === 'Done').length
    : 0;

  const handleDelete = () => {
    dispatch(deleteHabit(habit.id));
  };
  return (
    <div className="cardHabit">
      <div className="content">
        <h2>{habit?.name}</h2>
        <p className="count">Count: {count}/7</p>
      </div>
      <div className="">
        <button className="deleteBtn" onClick={handleDelete}>
          Delete Habit
        </button>
        <NavLink to={`/habit/${habit?.id}`}>
          {({ isActive, isPending }) => (
            <span className={'viewDetail'}>View Detail</span>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default CardHabit;
