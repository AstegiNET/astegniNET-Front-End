import React from "react";
import { Link } from "react-router-dom";

const TuteeHeader = ({ tutee }) => {
  return (
    <div className="my-5 px-6">
      <Link
        to="/tutee/profile/viewprofile"
        className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 hover:text-white"
      >
        welcome {tutee.fname} {tutee.lname}
      </Link>
    </div>
  );
};

export default TuteeHeader;
