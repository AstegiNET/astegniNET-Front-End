import { Link } from "react-router-dom";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { FETCH_RATES } from "../../../../api/API";

const UserCard = ({ tutor }) => {
  const [ratings, setRatings] = useState([]);

  const getRatings = async () => {
    const response = await axios.get(`${FETCH_RATES}/${tutor._id}`);
    setRatings(response.data);
    console.log(ratings);
  };


  function RatingBar() {
    var rating;
    var sum = 0;
    if (ratings?.length > 0) {
      ratings.map((r) => (sum += r.rate));
      rating = sum / ratings?.length;
      console.log(rating);
    }
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} size={16} className="text-yellow-400" />);
      } else if (i - 0.5 === rating) {
        stars.push(
          <FaStarHalfAlt key={i} size={16} className="text-yellow-400" />
        );
      } else {
        stars.push(<FaRegStar key={i} size={16} className="text-gray-400" />);
      }
    }
    return (
      <div className="flex justify-center items-center">
        {stars} <span className="ml-2">{ratings?.length} votes</span>
      </div>
    );
  }

  useEffect(()=> {
    getRatings();
  },[])
  // console.log(tutor.id)
  return (
    <Link to={`/tutors/${tutor.id}`}>
      <div className=" rounded-xl overflow-hidden shadow-lg p-6 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg flex">
        <div className="flex-none">
          <img height = {"100px"} width = {"100px"}
            className="w-50 h-50 object-cover rounded mx-auto"
            src={tutor.avatar}
            alt={tutor.fname}
          />
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-lg font-medium">
            {tutor.fname} {tutor.lname}
          </h2>
          <p className="text-gray-600">{tutor.courseName}</p>
          <p className="text-gray-600">{tutor.courseLevel} level</p>
          <p className="text-gray-600">{tutor.salary} ETB / month</p>
          <div className="mt-4">
            {RatingBar()}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default UserCard;
