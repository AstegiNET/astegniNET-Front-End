import React from "react";
import { FaCcAmazonPay } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/graduate-svgrepo-com.svg";
import { logout, reset } from "../../features/auth/tuteeAuthSlice";

// tutee/features/auth/tuteeAuthSlice
import { useDispatch } from "react-redux";
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
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed  top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 shadow-2xl"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-16 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="my-5  lg:hidden  justify-center">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="rounded-full   w-14 h-14 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
              />
            </Link>
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-gray-500 hover:text-gray-900 font-medium  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaCcAmazonPay className="mr-2" />
                <span className="ml-3">AstegniNET</span>
              </Link>
            </li>
            <li>
              <Link
                to="/tutee/profile/updateprofile"
                className="flex items-center p-2 text-gray-500 hover:text-gray-900  font-medium  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaCcAmazonPay className="mr-2" />
                <span className="ml-3">update profile</span>
              </Link>
            </li>
            <li>
              <Link
                to="/tutee/profile/viewprofile"
                className="flex items-center p-2 text-gray-500 hover:text-gray-900 font-medium  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaCcAmazonPay className="mr-2" />
                <span className="ml-3">view profile</span>
              </Link>
            </li>

            <li>
              <Link
                to="/tuteerequests"
                className="flex items-center p-2 text-gray-500 hover:text-gray-900  font-medium  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaCcAmazonPay className="mr-2" />
                <span className="ml-3">Requests</span>
              </Link>
            </li>
            <li>
              <Link
                to="/tuteeenrollments"
                className="flex items-center p-2 text-gray-500 hover:text-gray-900  font-medium  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaCcAmazonPay className="mr-2" />
                <span className="ml-3">enrollments</span>
              </Link>
            </li>
            <li>
              <Link
                onClick={onLogout}
                className="flex items-center p-2 text-gray-500 hover:text-gray-900  font-medium  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaCcAmazonPay className="mr-2" />
                <span className="ml-3">logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
