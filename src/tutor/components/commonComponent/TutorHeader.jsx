import React from "react";
import { Link } from "react-router-dom";

const TutorHeader = ({ tutor }) => {
  return (
    <div className="my-5 px-6">
      <Link
        to="/tutor/profile/viewprofile"
        className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 hover:text-white"
      >
        welcome {tutor.fname} {tutor.lname}
      </Link>
    </div>
  );
};

export default TutorHeader;
