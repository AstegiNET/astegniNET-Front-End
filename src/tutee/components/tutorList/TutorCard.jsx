import { Link } from "react-router-dom";
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const UserCard = ({ tutor }) => {


function RatingBar() {
  
  let rating = tutor.rating;
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <FaStar key={i} size={16} className="text-yellow-400" />
      );
    } else if (i - 0.5 === rating) {
      stars.push(
        <FaStarHalfAlt key={i} size={16} className="text-yellow-400" />
      );
    } else {
      stars.push(
        <FaRegStar key={i} size={16} className="text-gray-400" />
      );
    }
  }

  return <div className="flex">{stars}</div>;
}
// console.log(tutor.id)
  return (
    <Link to={`/tutee/tutors/${tutor.id}`}>
      <div className=" rounded-lg overflow-hidden shadow-lg p-6 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg flex">
        <div className="flex-none">
          <img
            className="w-50 h-50 object-cover rounded mx-auto"
            src={tutor.avatar}
            alt={tutor.fname}
          />
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-lg font-medium">{tutor.fname} {tutor.lname}</h2>
          <p className="text-gray-600">{tutor.email}</p>
          <p className="text-gray-600">{tutor.courseName}</p>
          <p className="text-gray-600">{tutor.courseLevel} level</p>
          <p className="text-gray-600">{tutor.salary} ETB / month</p>
          <div className="mt-4">
            {
              RatingBar()
            }
            <span className="pl-2 text-gray-600">460+ vote</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default UserCard;
