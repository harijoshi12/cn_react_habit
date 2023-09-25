import React from 'react';
import { useDispatch } from 'react-redux';
import StatusButton from './StatusButton';
import { updateHabitStatus } from '../features/habitSlice';

const CardWeekView = ({ date, habit }) => {
  const dispatch = useDispatch();
  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const weekDay = weekDays[date.getDay()];
  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  const currentStatus = habit.days[formattedDate] || 'None';

  const handleStatusChange = (status) => {
    if (habit && habit.id) {
      dispatch(updateHabitStatus({ id: habit.id, day: formattedDate, status }));
    } else {
      console.error('Habit or habit.id is undefined');
    }
  };
  return (
    <div className={`cardWeek ${currentStatus == 'Done' ? 'active' : ''}`}>
      <h3>{`${weekDay}, ${formattedDate}`}</h3>
      <div className="statusBtnWrapper">
        <StatusButton
          title={'Done'}
          handleStatusChange={() => handleStatusChange('Done')}
          active={currentStatus === 'Done'}
        />
        <StatusButton
          title={'Not Done'}
          handleStatusChange={() => handleStatusChange('Not Done')}
          active={currentStatus === 'Not Done'}
        />
        <StatusButton
          title={'None'}
          handleStatusChange={() => handleStatusChange('None')}
          active={currentStatus === 'None'}
        />
      </div>
    </div>
  );
};

export default CardWeekView;
