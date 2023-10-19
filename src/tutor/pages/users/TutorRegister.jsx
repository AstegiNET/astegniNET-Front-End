import { Link } from "react-router-dom";
import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { tutorRegister, tutorReset } from "../../features/auth/tutorAuthSlice";
import { getAllCourses } from "../../features/courses/courseSlice";
import Spinner from "../../components/commonComponent/Spinner";
import { IoIosAddCircleOutline } from "react-icons/io";
import Header from "../../../landingPage/components/Header";

const TutorRegister = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    sex: "Male",
    email: "",
    phone: "",
    salary: "",
    course: "",
    education: "",
    about: "",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU",
    schedule: [],
    password: "",
    password2: "",
  });

  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "wjsh8fle");
    data.append("cloud_name", "dypi9zo6o");
    const value = fetch(
      "  https://api.cloudinary.com/v1_1/dypi9zo6o/image/upload",
      {
        method: "post",
        body: data,
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    console.log(url);
  }, [url]);

  const {
    fname,
    lname,
    email,
    sex,
    phone,
    salary,
    course,
    education,
    about,
    avatar,
    schedule,
    password,
    password2,
  } = formData;

  const { courses } = useSelector((state) => state.course);
  const [scheduleDate, setScheduleDate] = useState({
    date: "Sunday",
    startTime: "1:00",
    endTime: "4:00",
  });

  const { date, startTime, endTime } = scheduleDate;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { tutor, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.tutorAuth
  );

  useEffect(() => {
    dispatch(getAllCourses());
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || tutor) {
      navigate("/tutor/home");
    }

    dispatch(tutorReset());
  }, [tutor, navigate, dispatch]);

  // useEffect(() => {
  //   dispatch(getAllCourses());
  // }, [tutor, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const tutorData = {
        fname,
        lname,
        sex,
        education,
        about,
        email,
        phone,
        salary,
        schedule,
        course,
        avatar,
        password,
      };

      dispatch(tutorRegister(tutorData));
      if (isError) {
        toast.error(message);
      }

      if (isSuccess || tutor) {
        navigate("/tutor/home");
      }
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  const handleSchedule = (e) => {
    setScheduleDate((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value);
  };
  const appendToSchedule = (e) => {
    e.preventDefault();
    schedule.push(
      `${scheduleDate.date} ${scheduleDate.startTime} to ${scheduleDate.endTime}`
    );
    console.log(schedule);
  };
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
            Tutor Register
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Register here if you have no account
          </p>
          <div className="text-md mt-10 leading-6 text-gray-600">
            Or, Register as a
            <Link
              to={"/tutee/register"}
              className="font-semibold hover:ml-2 px-2 py-1 rounded-md hover:bg-indigo-600 hover:text-white text-indigo-600"
            >
              &nbsp;Tutee
            </Link>
          </div>
        </div>
        <form onSubmit={onSubmit} className=" mx-auto max-w-xl sm:mt-4">
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
                  title="name should be in alphabets and at least 3 characters long"
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
                  title="name should be in alphabets and at least 3 characters long"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <label
              htmlFor="sex"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Your sex
            </label>
            <div className="relative mt-2.5">
              <select
                type="text"
                id="sex"
                name="sex"
                value={sex}
                onChange={onChange}
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                {["Male", "Female"].map((s) => (
                  <option value={s} key={s}>
                    {s}
                  </option>
                ))}
              </select>
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
                  title="email should follow a valid email address format"
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

            <label
              htmlFor="education"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Select your educational level
            </label>
            <div className="relative mt-2.5">
              <select
                type="text"
                id="education"
                name="education"
                value={education}
                onChange={onChange}
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                {educational_levels?.length ? (
                  <>
                    {educational_levels.map((educational_level) => (
                      <option
                        value={educational_level.name}
                        key={educational_level.id}
                      >
                        {educational_level.name}
                      </option>
                    ))}
                  </>
                ) : (
                  <h3> not set any courses</h3>
                )}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="salary"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Salary
              </label>
              <div className="relative mt-2.5">
                <input
                  type="integer"
                  name="salary"
                  id="salary"
                  value={salary}
                  onChange={onChange}
                  autoComplete="salary"
                  placeholder="enter salary"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <label
              htmlFor="course"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Course you can teach
            </label>
            <div className="relative mt-2.5">
              <select
                type="text"
                id="course"
                name="course"
                value={course}
                onChange={onChange}
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="select course">select course</option>
                {courses?.map((course) => (
                  <option value={course._id} key={course._id}>
                    {course.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="avatar"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                photo
              </label>
              <div className="relative mt-2.5">
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  // onChange={onChange}
                  placeholder="enter avatar url"
                  autoComplete="avatar"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="about"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                About yourself
              </label>
              <div className="mt-2.5">
                <textarea
                  name="about"
                  id="about"
                  value={about}
                  onChange={onChange}
                  placeholder="write about yourself here, this will appear on your public profile"
                  rows={4}
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Schedule start */}
            <div className="col-span-2 flex flex-col w-full">
              <label
                htmlFor="date"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                When will you be available?
              </label>
              <div className="flex w-full gap-4">
                <div className=" mt-2.5">
                  <select
                    type="text"
                    id="date"
                    name="date"
                    value={date}
                    onChange={handleSchedule}
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    {dates?.length ? (
                      <>
                        {dates.map((date) => (
                          <option value={date.name} key={date.id}>
                            {date.name}
                          </option>
                        ))}
                      </>
                    ) : (
                      <h3> No schedule set</h3>
                    )}
                  </select>
                </div>

                <div className="mt-2.5">
                  <select
                    type="text"
                    name="startTime"
                    id="startTime"
                    value={startTime}
                    onChange={handleSchedule}
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    {dates?.length ? (
                      <>
                        {hours.map((hour) => (
                          <option value={hour.name} key={hour.id}>
                            {hour.name}
                          </option>
                        ))}
                      </>
                    ) : (
                      <h3> No schedule set</h3>
                    )}
                  </select>
                </div>
                <div className="mt-2.5">
                  <select
                    type="text"
                    id="endTime"
                    name="endTime"
                    value={endTime}
                    onChange={handleSchedule}
                    className="w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    {dates?.length ? (
                      <>
                        {hours.map((hour) => (
                          <option value={hour.name} key={hour.id}>
                            {hour.name}
                          </option>
                        ))}
                      </>
                    ) : (
                      <h3> No schedule set</h3>
                    )}
                  </select>
                </div>
                <button
                  className="mt-2.5 p-2 bg-gray-200 flex justify-center hover:bg-indigo-500 border-1 items-center rounded-full text-indigo-500 hover:text-white"
                  onClick={appendToSchedule}
                >
                  <IoIosAddCircleOutline className="w-6 h-6" />
                </button>
              </div>
              <div className="col-span-2 mt-2 bg-gray-100">
                {schedule.map((sch) => (
                  <p className="p-2 hover:bg-gray-500 hover:text-white">
                    {sch}
                  </p>
                ))}
              </div>
            </div>
            {/* Schedule end */}

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
                  pattern=".{3,10}"
                  title="Password must be at least 3, not more than 10 characters long"
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
                  pattern=".{3,10}"
                  title="Password must be at least 3, not more than 10 characters long"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="text-sm leading-6 text-gray-600">
              already have an account
              <Link to="/tutor/login" className="font-semibold text-indigo-600">
                &nbsp;Login
              </Link>
            </div>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="mb-5 block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
const educational_levels = [
  { id: 0, name: "Phd" },
  { id: 2, name: "MSc/MBA degree" },
  { id: 3, name: "BSc/BA degree" },
  { id: 4, name: "Deploma" },
  { id: 5, name: "Highschool graduated" },
  { id: 6, name: "Other" },
];
const dates = [
  { id: 1, name: "Sunday" },
  { id: 2, name: "Monday" },
  { id: 3, name: "Tuesday" },
  { id: 4, name: "Wednesday" },
  { id: 5, name: "Thursday" },
  { id: 6, name: "Friday" },
  { id: 7, name: "Saturday" },
];

const hours = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  name: `${(i + 1).toString()} : 00`,
}));

export default TutorRegister;
