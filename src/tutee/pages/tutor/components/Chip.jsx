import React from 'react';

const Chip = ({ label }) => {
  return (
    <div className="py-1 px-2 text-sm rounded-full bg-indigo-600 text-white">
      <span>{label}</span>
    </div>
  );
};

export default Chip;