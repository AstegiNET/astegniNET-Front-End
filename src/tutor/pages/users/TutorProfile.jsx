import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/images/graduate-svgrepo-com.svg";

const TutorProfile = () => {
  const { tutor } = useSelector((state) => state.tutorAuth);

  useEffect(() => {});

  return (
    <>
      <div className=" w-full text-left">
        <div className="p-4">
          <div className=" min-h-screen rounded-lg ">
            <div className="  bg-white shadow rounded-lg   mx-auto">
              <div className=" flex justify-center">
                <Link to="/">
                  <img
                    src={logo}
                    alt="logo"
                    className="rounded-full   w-20 h-20 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
                  />
                </Link>
              </div>

              <div className="mt-10">
                <h1 className="font-bold text-center text-3xl text-gray-900">
                አስጠኚNET
                </h1>
                <p className="text-center text-sm text-gray-400 font-medium">
                  cross platform online tutorial app
                </p>

                <div className="my-5 px-6">
                  <div className="text-gray-400 block text-center  rounded-lg text-xl font-bold leading-6 px-6 py-3 bg-gray-100 shadow-md">
                    welcome {tutor.fname} {tutor.lname}
                  </div>
                </div>

                <div className="w-full">
                  <h3 className="font-medium text-gray-900 text-left px-6">
                    Recent activites
                  </h3>
                  <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                    <Link
                      to="#"
                      className=" border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                    >
                      Updated his status
                      <span className="text-gray-500 text-xs">24 min ago</span>
                    </Link>

                    <Link
                      to="#"
                      className=" border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                    >
                      Added new profile picture
                      <span className="text-gray-500 text-xs">42 min ago</span>
                    </Link>

                    <Link
                      to="#"
                      className=" border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                    >
                      <span className="text-gray-500 text-xs">49 min ago</span>
                    </Link>

                    <Link
                      to="#"
                      className=" border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                    >
                      Editedpreference
                      <span className="text-gray-500 text-xs">1 day ago</span>
                    </Link>

                    <Link
                      to="#"
                      className=" border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden"
                    >
                      perform payment
                      <span className="text-gray-500 text-xs">5 days ago</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TutorProfile;
