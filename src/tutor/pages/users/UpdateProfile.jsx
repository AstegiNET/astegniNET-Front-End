import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/images/graduate-svgrepo-com.svg";
import { tutorReset } from "../../features/auth/tutorAuthSlice";
import Spinner from "../../components/commonComponent/Spinner";
import Sidebar from "../../components/commonComponent/sidebar/Sidebar";
// import { toast } from "react-toastify";

const UpdateTutorProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { tutor, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.tutorAuth
  );

  const [formData, setFormData] = useState({
    fname: tutor.fname,
    lname: tutor.lname,
    email: tutor.email,
    phone: tutor.phone,
    salary: tutor.salary,
    password: "",
    password2: "",
  });

  const { fname, lname, email, phone, salary, password, password2 } = formData;

  useEffect(() => {
    console.log(tutor.fname);
    if (isError) {
      console.log(message);
    }

    // if (isSuccess || tutor) {
    //   navigate("/");
    // }

    dispatch(tutorReset());
  }, [tutor, isError, isSuccess, message, navigate, dispatch]);

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
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <div>
            <div className="bg-white shadow rounded-lg xs:w-full sm:w-5/6 lg:w-1/2 mx-auto">
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
                  {tutor.fname} {tutor.lname}
                </h1>
                <p className="text-center text-sm text-gray-400 font-medium">
                  cross platform online tutorial app
                </p>

                <div className="w-full">
                  <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
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
                              pattern="[A-Za-z]{3,20}"
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
                              pattern="[A-Za-z]{3,20}"
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
                              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
                              pattern="09[0-9]{8}"
                              title="Phone number must be 10 digits long and start with '09'"
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
                              pattern=".{6,}"
                              title="Password must be at least 6 characters long"
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
export default UpdateTutorProfile;
