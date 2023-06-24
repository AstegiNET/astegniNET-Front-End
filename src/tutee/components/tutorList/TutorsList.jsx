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
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Filter
              <FaFilter
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  <div>
                    <label
                      htmlFor="ratingRange"
                      className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                    >
                      {tutorRating ? tutorRating : "Rating"}
                    </label>
                    <input
                      type="range"
                      className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
                      min="0"
                      max="5"
                      value={tutorRating}
                      step="0.5"
                      id="ratingRange"
                      onChange={(event) => setTutorRating(event.target.value)}
                    />
                  </div>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
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
