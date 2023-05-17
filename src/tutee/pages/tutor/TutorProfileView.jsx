import React, { useEffect } from "react";
import OutlineButton from "./components/Button";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const UserProfile = () => {
  const id = useParams().id;
  const [tutor, setTutor] = useState([]);
  const [course, setCourse] = useState({});

  const API_URL = `http://localhost:5000/api/tutors/tutor/${id}`;
  const getTutor = async () => {
    const response = await axios.get(API_URL);
    setTutor(response.data);
    // return response.data;
  };

  useEffect(() => {
    getTutor();
    getCourse();
  }, [tutor, course]);
  const getCourse = async () => {
    // const response = await axios.get(`http://localhost:5000/api/courses/getCourse/64539e07e30e5e90588899b2`);
    const response = await axios.get(
      `http://localhost:5000/api/courses/getCourse/${tutor.course}`
    );

    setCourse(response.data);
    // return response.data;
  };

  console.log(course);
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          <div className="w-full md:w-6/12 md:mx-2">
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className="image overflow-hidden">
                <img
                  className="h-100 w-100 rounded-full mx-auto"
                  src={tutor.avatar}
                  alt="Jane Doe"
                />
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                {tutor.fname} {tutor.lname}
              </h1>
              <h3 className="text-gray-600 font-lg text-semibold leading-6"></h3>
              <div className="my-4"></div>
              <OutlineButton label={"Send Request"} />

              <div className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <div className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="bg-indigo-600 py-1 px-2 rounded-full text-white text-sm">
                      Active
                    </span>
                  </span>
                </div>
                <div className="flex flex-wrap py-3">
                  <div className="py-1 px-2 m-2 text-sm rounded-full bg-indigo-600 text-white">
                    <span>{course.name}</span>
                  </div>
                  <div className="py-1 px-2 m-2 text-sm rounded-full bg-indigo-600 text-white">
                    <span>Physics</span>
                  </div>
                  <div className="py-1 px-2 m-2 text-sm rounded-full bg-indigo-600 text-white">
                    <span>Biology</span>
                  </div>
                  <div className="py-1 px-2 m-2 text-sm rounded-full bg-indigo-600 text-white">
                    <span>Chemistry</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-6/12 mx-2 h-64">
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide">About</span>
              </div>
              <div className="text-gray-700">
                <div className="text-left text-sm">
                  <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Atque ut, culpa magnam saepe quis excepturi omnis ad nisi
                    facere quia earum autem, quisquam odit, dolore cum obcaecati
                    sit consectetur beatae. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Impedit enim consequatur dicta
                    repellendus temporibus placeat ad ex hic beatae. Cumque,
                    reprehenderit possimus dolorum provident deleniti tenetur ex
                    sapiente quam dolore!
                  </p>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <div className="px-4 py-2">Female</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Address</div>
                    <div className="px-4 py-2">
                      Lideta, Addis Ababa, Ethiopia
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Member since</div>
                    <div className="px-4 py-2">{tutor.createdAt}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-4"></div>

            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div>
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                  <span clas="text-green-500">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path
                        fill="#fff"
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">Education</span>
                </div>
                <ul className="list-inside space-y-2">
                  <li>
                    <div className="text-teal-600">
                      Masters Degree in Oxford
                    </div>
                    <div className="text-gray-500 text-xs">
                      March 2020 - Now
                    </div>
                  </li>
                  <li>
                    <div className="text-teal-600">
                      Bachelors Degreen in LPU
                    </div>
                    <div className="text-gray-500 text-xs">
                      March 2020 - Now
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="my-4"></div>
            <div className="bg-white p-3 hover:shadow">
              <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                <span className="text-green-500">
                  <svg
                    className="h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>
                <span>Similar Profiles</span>
              </div>
              <div className="grid grid-cols-3">
                <div className="text-center my-2">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                    alt=""
                  />
                  <span className="text-main-color">Kojstantin</span>
                </div>
                <div className="text-center my-2">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"
                    alt=""
                  />
                  <span className="text-main-color">James</span>
                </div>
                <div className="text-center my-2">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="text-main-color">Ashly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;