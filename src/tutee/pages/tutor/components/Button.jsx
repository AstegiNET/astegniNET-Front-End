
import React from 'react';

const OutlineButton = ({ label }) => {
  return (
    <button className="w-full px-4 py-2 font-medium text-indigo-600  bg-transparent border border-indigo-600 rounded-md hover:bg-indigo-600  hover:text-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
      {label}
    </button>
  );
};

export default OutlineButton;
