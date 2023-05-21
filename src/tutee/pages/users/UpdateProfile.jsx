import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/images/graduate-svgrepo-com.svg";
import { reset } from "../../features/auth/tuteeAuthSlice";
import Spinner from "../../components/commonComponent/Spinner";
import Sidebar from "../../components/commonComponent/Sidebar";
// import { toast } from "react-toastify";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { tutee, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.tuteeAuth
  );

  const [formData, setFormData] = useState({
    fname: tutee.fname,
    lname: tutee.lname,
    email: tutee.email,
    phone: tutee.phone,
    role: tutee.role,
    password: "",
    password2: "",
  });

  const { fname, lname, email, phone, role, password, password2 } = formData;

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(reset());
  }, [tutee, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="pt-50">
        <Sidebar />
        <div className="p-4 ">
          <div className="py-16 shadow-2xl min-h-screen rounded-lg dark:border-gray-700">
            <div className="  bg-white shadow rounded-lg w-5/6 md:w-4/6  mx-auto">
              <div className="mt-5 flex justify-center">
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
                  AstegniNET
                </h1>
                <p className="text-center text-sm text-gray-400 font-medium">
                  cross platform online tutorial app
                </p>

                <div className="my-5 px-6">
                  <Link
                    to="/tutee/profile/viewprofile"
                    className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 hover:text-white"
                  >
                    welcome {tutee.fname} {tutee.lname}
                  </Link>
                </div>

                <div className="w-full">
                  <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                    <h3 className="font-medium text-gray-900 text-left px-6">
                      update profile
                    </h3>
                    {/* onSubmit={onSubmit} */}
                    <form className=" w-full p-10">
                      <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="fname"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                          >
                            First name
                          </label>
                          <div className="mt-2.5">
                            <input
                              type="text"
                              name="fname"
                              id="fname"
                              value={fname}
                              onChange={onChange}
                              placeholder="enter first name"
                              autoComplete="given-name"
                              className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="lname"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                          >
                            Last name
                          </label>
                          <div className="mt-2.5">
                            <input
                              type="text"
                              name="lname"
                              id="lname"
                              value={lname}
                              onChange={onChange}
                              placeholder="enter last name"
                              autoComplete="family-name"
                              className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

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
                              onChange={onChange}
                              placeholder="enter email"
                              autoComplete="email"
                              className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="phone"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                          >
                            Phone number
                          </label>
                          <div className="relative mt-2.5">
                            <input
                              type="tel"
                              name="phone"
                              id="phone"
                              value={phone}
                              onChange={onChange}
                              placeholder="enter phone number"
                              autoComplete="tel"
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
                              onChange={onChange}
                              placeholder="enter password"
                              autoComplete="password"
                              className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label
                            htmlFor="password2"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                          >
                            Confirm Password
                          </label>
                          <div className="relative mt-2.5">
                            <input
                              type="password"
                              name="password2"
                              id="password2"
                              value={password2}
                              autoComplete="password2"
                              onChange={onChange}
                              placeholder="enter password"
                              className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="my-10">
                        <button
                          type="submit"
                          className="mb-5 block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          update profile
                        </button>
                      </div>
                    </form>
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
export default UpdateProfile;
