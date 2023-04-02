import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/commonComponent/Header";
import Footer from "../../components/commonComponent/Footer";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/commonComponent/Spinner";
import logo from "../../assets/images/graduate-svgrepo-com.svg";

const TutorProfile = () => {
  return (
    <>
      <Header />

      <div className="bg-white shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
        <div className="mt-32 flex justify-center">
          <img
            src={logo}
            alt="logo"
            className="rounded-full   w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
          />
        </div>

        <div className="mt-10">
          <h1 className="font-bold text-center text-3xl text-gray-900">
            AstegniNET
          </h1>
          <p className="text-center text-sm text-gray-400 font-medium">
            cross platform online tutorial app
          </p>

          <div className="my-5 px-6">
            <Link
              to="#"
              className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 hover:text-white"
            >
              welcome kaleab
            </Link>
          </div>
          <div className="flex justify-between items-center my-5 px-6">
            <Link
              to=""
              className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
            >
              activites
            </Link>
            <Link
              href=""
              className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
            >
              update profile
            </Link>
            <Link
              href=""
              className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
            >
              delete profile
            </Link>
            <Link
              to=""
              className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
            >
              tutors
            </Link>
          </div>

          <div className="w-full">
            <h3 className="font-medium text-gray-900 text-left px-6">
              Recent activites
            </h3>
            <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
              <Link
                to="#"
                className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
              >
                {/* <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"> */}
                Updated his status
                <span className="text-gray-500 text-xs">24 min ago</span>
              </Link>

              <Link
                to="#"
                className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
              >
                {/* <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"> */}
                Added new profile picture
                <span className="text-gray-500 text-xs">42 min ago</span>
              </Link>

              <Link
                to="#"
                className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
              >
                {/* <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"> */}
                take class
                <span className="text-gray-500 text-xs">49 min ago</span>
              </Link>

              <Link
                to="#"
                className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
              >
                {/* <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"> */}
                Editedpreference
                <span className="text-gray-500 text-xs">1 day ago</span>
              </Link>

              <Link
                to="#"
                className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden"
              >
                {/* <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"> */}
                perform payment
                <span className="text-gray-500 text-xs">5 days ago</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default TutorProfile;
