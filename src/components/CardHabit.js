import React from 'react';
import { Link } from 'react-router-dom';

const CardHabit = ({ habit }) => {
  return (
    <div>
      <h2>{habit?.name}</h2>
      <p>4/7</p>
      <Link to={`/habit/${habit?.id}`}>Details</Link>
    </div>
  );
};

export default CardHabit;
