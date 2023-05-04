import { useEffect, useState } from "react";
import UserCard from "./TutorCard";
import Header from "../commonComponent/Header";
import axios from "axios";

const TutorsList = () => {
  const API_URL = "http://localhost:5000/api/tutors/search";
;
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [tutors, setTutors]=useState([]);

  const getTutors = async () => {
  
    const response = await axios.get(API_URL);
    setTutors(response.data);
    // return response.data;

  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // const filteredUsers = resultedTutors.filter((user) =>
  //   user.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  useEffect(() => {
    getTutors();
  },[]);
  // console.log(tutors);
  return (
    <>
      <Header />
      <div className="sm:px-4 md:px-8 lg:px-24 mt-24 items-center">
        <div
          className={`max-w-md mx-auto mb-4 relative transition-all duration-300 ${
            isFocused ? "w-full" : ""
          }`}
        >
          <input
            className={`w-full border-none p-2 rounded-lg bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-md focus:outline-none transition-all duration-300 ${
              isFocused ? "scale-110" : ""
            }`}
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearch}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
        <h2 className="text-2xl text-gray-600 font-bold ml-2 mt-2">
          Popular Tutors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          { 
          tutors.map((tutor,index) => (
            <UserCard key={index} tutor={tutor} />
          ))
          }
        </div>
      </div>
    </>
  );
};

export default TutorsList;
