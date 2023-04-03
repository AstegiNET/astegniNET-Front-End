import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/commonComponent/Header";
import Footer from "../../components/commonComponent/Footer";

import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/images/graduate-svgrepo-com.svg";
import { register, reset } from "../../features/auth/tuteeAuthSlice";
import Spinner from "../../components/commonComponent/Spinner";
import { toast } from "react-toastify";

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
    password: tutee.password,
    password2: "",
  });

  const { fname, lname, email, phone, role, password, password2 } = formData;

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    // if (isSuccess || tutee) {
    //   navigate("/");
    // }

    dispatch(reset());
  }, [tutee, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const tuteeData = {
        fname,
        lname,
        email,
        phone,
        role,
        password,
      };

      dispatch(register(tuteeData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

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
              to="/tutee/profile/viewprofile"
              className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 hover:text-white"
            >
              welcome {tutee.fname} {tutee.lname}
            </Link>
          </div>
          <div className="flex justify-between items-center my-5 px-6">
            <Link
              to="/tutee/profile/viewprofile"
              className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
            >
              activites
            </Link>
            <Link
              to="/tutee/profile/updateprofile"
              className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
            >
              update profile
            </Link>
            <Link
              to=""
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

          <div className="w-full mt-10">
            <div className=" w-full flex flex-col items-center overflow-hidden text-sm">
              <h3 className="font-bold text-center text-2xl text-indigo-600">
                update profile
              </h3>

              {/* onSubmit={onSubmit} */}
              <form className=" mx-auto max-w-xl mt-5">
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
                      htmlFor="role"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Role
                    </label>
                    <div className="relative mt-2.5">
                      <input
                        type="text"
                        name="role"
                        id="role"
                        value={role}
                        onChange={onChange}
                        autoComplete="role"
                        placeholder="enter tutee"
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
                <div className="mt-5">
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

      <Footer />
    </>
  );
};
export default UpdateProfile;
