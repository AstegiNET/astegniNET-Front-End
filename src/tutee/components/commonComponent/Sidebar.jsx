import React from "react";
import { FaCcAmazonPay, FaUserEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/graduate-svgrepo-com.svg";
import { logout, reset } from "../../features/auth/tuteeAuthSlice";

// tutee/features/auth/tuteeAuthSlice
import { useDispatch } from "react-redux";
import { AiOutlineMessage } from "react-icons/ai";
const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <aside className="fixed  top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 shadow-2xl">
        <div className="h-full px-3 py-5 overflow-y-auto bg-gray-50 ">
          {/* <div className="bottom-0 ">
      <aside className="shadow-2xl min-h-screen rounded-lg dark:border-gray-700 z-20 hidden w-64 overflow-y-auto bg-white  md:block flex-shrink-0">
        <div className="py-4 text-gray-500 "> */}

          <div className="mt-5 flex px-4 pb-5">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="rounded-full   w-10 h-10 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
              />
            </Link>
          </div>
          <ul className="space-y-2 font-medium">
            <li className="relative px-4 ">
              <Link
                className="inline-flex items-center w-full text-md py-1 font-semibold transition-colors duration-150 text-gray-500 hover:text-gray-900   rounded-lg  hover:bg-gray-100 "
                to="/tutee/home"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                <span className="ml-4">Dashboard</span>
              </Link>
            </li>

            <li className="relative px-4">
              <Link
                className="inline-flex items-center w-full text-md py-1 font-semibold transition-colors duration-150 text-gray-500 hover:text-gray-900   rounded-lg  hover:bg-gray-100 "
                to="/tutee/requests"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
                <span className="ml-4">Requests</span>
              </Link>
            </li>
            <li className="relative px-4 ">
              <Link
                className="inline-flex items-center w-full text-md py-1 font-semibold transition-colors duration-150 text-gray-500 hover:text-gray-900   rounded-lg  hover:bg-gray-100 "
                to="/tutee/enrollments"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                </svg>
                <span className="ml-4">enrollements</span>
              </Link>
            </li>

            <li className="relative px-4">
              <Link
                className="inline-flex items-center w-full text-md py-1 font-semibold transition-colors duration-150 text-gray-500 hover:text-gray-900   rounded-lg  hover:bg-gray-100 "
                to="/tutee/UpdateProfile"
              >
                <FaUserEdit />
                <span className="ml-4">Update Profile</span>
              </Link>
            </li>
            <li className="relative px-4 ">
              <Link
                className="inline-flex items-center w-full text-md py-1 font-semibold transition-colors duration-150 text-gray-500 hover:text-gray-900   rounded-lg  hover:bg-gray-100 "
                to="/tutee/home"
              >
                <AiOutlineMessage />
                <span className="ml-4">Messages</span>
              </Link>
            </li>
            <li>
              <div className="px-4 my-6">
                <button
                  onClick={onLogout}
                  className="flex items-center justify-between w-full px-4 py-2 text-md py-1 font-medium leading-5 text-white transition-colors duration-150 bg-indigo-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                >
                  logout
                </button>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
