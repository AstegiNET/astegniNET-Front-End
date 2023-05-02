import { useState } from "react";
import UserCard from "./TutorCard";
import Header from "../commonComponent/Header";
const TutorsList = () => {
  const resultedTutors = [
    {
      id: 1,
      name: "Alice",
      email: "alice@example.com",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      name: "Bob",
      email: "bob@example.com",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      name: "Charlie",
      email: "charlie@example.com",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Diana",
      email: "diana@example.com",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      name: "Eve",
      email: "eve@example.com",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = resultedTutors.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <Header />
      <div className="sm:px-4 md:px-8 lg:px-24 mt-20 items-center">
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
        {searchTerm !== "" ? (
          <h2 className="text-gray-600 font-medium text-center mt-2">
            Search Results:
          </h2>
        ) : (
          <h2 className="text-2xl text-gray-600 font-bold ml-2 mt-2">
            Popular Tutors
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((tutor) => (
              <UserCard key={tutor.id} tutor={tutor} />
            ))
          ) : (
            <p className="text-center">No results found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default TutorsList;
