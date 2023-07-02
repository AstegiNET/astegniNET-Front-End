import { useEffect, useState } from "react";
import UserCard from "./TutorCard";
import axios from "axios";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FaFilter } from "react-icons/fa";
import { GET_TUTORS } from "../../../api/API";
import Header from "../../../landingPage/components/Header";

const TutorsList = () => {
  const [courseName, setCourseName] = useState("");
  const [tutorName, setTutorName] = useState("");
  const [tutorRating, setTutorRating] = useState(1);
  const [courseFocused, setCourseFocused] = useState(false);
  const [nameFocused, setNameFocused] = useState(false);
  const [tutors, setTutors] = useState([]);

  const handleSearchByName = (event) => {
    setTutorName(event.target.value);
  };
  const handleSearchByCourse = (event) => {
    setCourseName(event.target.value);
  };

  useEffect(() => {
    var API_URL = `${GET_TUTORS}?fname=${tutorName}&course=${courseName}&rating=${tutorRating}`;

    const getTutors = async () => {
      const response = await axios.get(API_URL);
      setTutors(response.data);
    };
    getTutors();
  }, [tutorName, courseName, tutorRating]);

  return (
    <>
      <Header />
      <div className="text-left flex justify-center mt-24">
        <input
          className={`mx-4 max-w-md w-200 border-none p-2 rounded-lg bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-lg focus:outline-none transition-all duration-300 ${
            courseFocused ? "scale-125" : ""
          }`}
          type="text"
          placeholder="Search by course name ..."
          value={courseName}
          onChange={handleSearchByCourse}
          onFocus={() => setCourseFocused(true)}
          onBlur={() => setCourseFocused(false)}
        />
        <input
          className={`max-w-md mx-4 border-none p-2 rounded-lg bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-lg focus:outline-none transition-all duration-300 ${
            nameFocused ? "scale-125" : ""
          }`}
          type="text"
          placeholder="Tutor name (optional) ..."
          value={tutorName}
          onChange={handleSearchByName}
          onFocus={() => setNameFocused(true)}
          onBlur={() => setNameFocused(false)}
        />
      </div>
      <div className="sm:px-4 mt-8 md:px-8 lg:px-24 items-center">
        <h2 className="text-2xl text-gray-600 font-bold ml-2 mt-2">
          {courseName || tutorName
            ? tutors.length + " tutors found"
            : "Popular Tutors"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tutors.map((tutor, index) => (
            <UserCard key={index} tutor={tutor} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TutorsList;
