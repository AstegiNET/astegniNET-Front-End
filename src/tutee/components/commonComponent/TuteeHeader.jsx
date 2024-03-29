import React from "react";

const TuteeHeader = ({ tutee }) => {
  return (
    <div className="px-6 py-2">
      <div className="text-gray-500 block text-left rounded-lg  font-medium leading-6 px-6 py-3 bg-gray-100 hover:bg-gray-200 hover:text-gray-600">
        {tutee}
      </div>
    </div>
  );
};

export default TuteeHeader;
