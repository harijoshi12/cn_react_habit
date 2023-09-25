import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const CardHabit = ({ habit }) => {
  return (
    <div className="cardHabit">
      <div className="content">
        <h2>{habit?.name}</h2>
        <p className="count">Count: 4/7</p>
      </div>
      <NavLink to={`/habit/${habit?.id}`}>
        {({ isActive, isPending }) => (
          <span className={'viewDetail'}>View Detail</span>
        )}
      </NavLink>
    </div>
  );
};

export default CardHabit;
