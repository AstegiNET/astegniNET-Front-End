import React, { useState } from "react";
import Rating from "react-rating-stars-component";


const UserCard = ({ tutor }) => {
    const [rating, setRating] = useState(4.5);

    const handleChange = (newRating) => {
      setRating(newRating);
    };
  return (
    <div className=" rounded-lg overflow-hidden shadow-lg p-6 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg flex">
      <div className="flex-none">
        <img
          className="sm:w-50 sm:h-50 md:w-60 md:h-60 object-cover rounded mx-auto"
          src={tutor.avatar}
          alt={tutor.name}
        />
      </div>
      <div className="flex-grow pl-6">
        <h2 className="text-lg font-medium">{tutor.name}</h2>
        <p className="text-gray-600">{tutor.email}</p>
        <p className="text-gray-600">Mathematics</p>
        <p className="text-gray-600">2000 ETB / month</p>
        <div className="mt-4">
          <p className="text-gray-600 mb-2">Rating:</p>
          <Rating
            value={rating}
            size={24}
            activeColor="#ffd700"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};
export default UserCard;
