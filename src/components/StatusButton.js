import React from 'react';
const StatusButton = ({ title, handleStatusChange, active }) => {
  return (
    <button
      onClick={() => handleStatusChange(title)}
      className={`statusBtn ${active ? 'active' : ''}`}
    >
      {title}
    </button>
  );
};

export default StatusButton;
