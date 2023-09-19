import React from 'react';
import StatusButton from './StatusButton';

const CardHabitDetail = () => {
  return (
    <div>
      <h2>Weeek Name and date</h2>
      <div>
        <StatusButton title="Done" />
        <StatusButton title="Not Done" />
        <StatusButton title="None" />
      </div>
    </div>
  );
};

export default CardHabitDetail;
