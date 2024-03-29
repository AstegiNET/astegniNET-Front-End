import React from "react";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { tutorLogin, tutorReset } from "../../features/auth/tutorAuthSlice";
import Spinner from "../../components/commonComponent/Spinner";
import Header from "../../../landingPage/components/Header";

const TutorLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { tutor, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.tutorAuth
  );

  const [errorMessage, setErrorMessage] = useState("");
  // useEffect(() => {
  //   if (isSuccess || tutor) {
  //     navigate("/tutor/home");
  //   }
  // }, [tutor, isSuccess, navigate]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const tutorData = {
      email,
      password,
    };

    dispatch(tutorLogin(tutorData));
    if (isError) {
      setErrorMessage(message);
    }
    dispatch(tutorReset());
    if (isSuccess || tutor) {
      navigate("/tutor/home");
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <div className="isolate bg-white py-24 px-6 sm:py-32 lg:px-8 ">
        <div className="  absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tutor Login
          </h2>
          <div className="text-md mt-10 leading-6 text-gray-600">
            Login as a
            <Link
              to={"/tutee/login"}
              className="font-semibold hover:ml-2 px-2 py-1 rounded-md hover:bg-indigo-600 hover:text-white text-indigo-600"
            >
              &nbsp;Tutee
            </Link>
          </div>
        </div>
        <form
          action="#"
          method="POST"
          className=" mx-auto max-w-xl mt-4"
          onSubmit={onSubmit}
        >
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            {errorMessage.length > 0 && (
              <p className="col-span-2 text-red-600">{errorMessage}</p>
            )}
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  required
                  onChange={onChange}
                  placeholder="enter email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="email should follow a valid email address format"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="Password"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="relative mt-2.5">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  required
                  onChange={onChange}
                  placeholder="enter password"
                  pattern="[A-Z0-9a-z]{3,16}"
                  title="password should be at least 3 characters long"
                  autoComplete="password"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="text-sm leading-6 text-gray-600">
              Not registered yet?
              <Link
                to="/tutor/register"
                className="font-semibold text-indigo-600"
              >
                &nbsp;Register Now
              </Link>
            </div>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TutorLogin;
