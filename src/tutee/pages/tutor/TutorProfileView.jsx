import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import Rating from "@mui/material/Rating";
import {
  GET_TUTOR,
  SEND_REQUEST,
  GET_REQUESTS,
  GET_COURSE,
  GET_TUTORS,
  FETCH_RATES,
  ADD_RATE,
} from "../../../api/API";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Box, Button, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Popper from "@mui/material/Popper";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import Fade from "@mui/material/Fade";
import AddIcon from "@mui/icons-material/Add";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const UserProfile = () => {
  const id = useParams().id;
  const [tutor, setTutor] = useState([]);
  const [tutors, setTutors] = useState([]);
  const [course, setCourse] = useState({});
  const [ratings, setRatings] = useState([]);
  const [ratingValue, setRatingValue] = useState(0);
  const [ratingHover, setRatingHover] = React.useState(-1);
  const [requestSent, setRequestSent] = useState(false);
  const { tutee } = useSelector((state) => state.tuteeAuth);
  const navigate = useNavigate();

  const API_URL = `${GET_TUTOR}/${id}`;

  const sendRequest = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${tutee.token}`,
      },
    };
    const request = {
      tutee: tutee.id,
      tutor: id,
      course: tutor.course,
    };
    const response = await axios.post(SEND_REQUEST, request, config);
    if (response.statusText === "OK") {
      navigate("/tutors");
    }
    return response.data;
  };
  const getRequest = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${tutee?.token}`,
      },
    };
    const response = await axios.get(GET_REQUESTS, config);
    setRequestSent(
      response.data?.filter(
        (item) =>
          item.tutor === id &&
          item.tutee === tutee._id &&
          item.course === tutor.course
      ).length > 0
    );
  };

  const getRatings = async () => {
    const response = await axios.get(`${FETCH_RATES}/${tutor._id}`);
    setRatings(response.data);
    console.log(ratings);
  };

  const rateTutor = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${tutee.token}`,
      },
    };
    const rating = {
      rate: ratingValue,
    };
    const response = await axios.post(
      `${ADD_RATE}/${tutor._id}`,
      rating,
      config
    );
    if (response.statusText === "OK") {
      getRatings();
    }
    return response.data;
  };

  const API_URL1 = `${GET_TUTORS}?course=${course.name}`;
  useEffect(() => {
    const getTutor = async () => {
      const response = await axios.get(API_URL);
      setTutor(response.data);
    };

    const getCourse = async () => {
      const response = await axios.get(`${GET_COURSE}/${tutor.course}`);
      setCourse(response.data);
    };

    const getTutors = async () => {
      const response = await axios.get(API_URL1);
      setTutors(response.data?.filter((tut) => tut.id !== tutor._id));
    };

    getTutor();
    getRequest();
    getCourse();
    getTutors();
    getRatings();
  }, [API_URL, API_URL1, tutor._id, tutor.course]);

  const handleGoBack = () => {
    window.history.back();
  };

  function RatingBar() {
    var rating;
    var sum = 0;
    if (ratings?.length > 0) {
      ratings.map((r) => (sum += r.rate));
      rating = sum / ratings?.length;
      console.log(rating);
    }
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} size={16} className="text-yellow-400" />);
      } else if (i - 0.5 === rating) {
        stars.push(
          <FaStarHalfAlt key={i} size={16} className="text-yellow-400" />
        );
      } else {
        stars.push(<FaRegStar key={i} size={16} className="text-gray-400" />);
      }
    }
    return (
      <div className="flex justify-center items-center">
        {stars} <span className="ml-2">{ratings?.length} votes</span>
      </div>
    );
  }

  const handleRating = () => {
    rateTutor();
  };

  const labels = {
    0.5: "Useless",
    1: "Useless",
    1.5: "Poor",
    2: "Poor",
    2.5: "Ok",
    3: "Not Bad",
    3.5: "Good",
    4: "Very Good",
    4.5: "Excellent",
    5: "Amazing",
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  return (
    <div className="relative">
      <div className="flex justify-between">
        <button
          onClick={() => handleGoBack()}
          className="flex justify-center items-center py-2  mt-4 ml-4  px-4 font-semibold leading-tight bg-gray-200 text-gray-600 hover:bg-indigo-500 hover:text-gray-100 rounded-md"
        >
          <IoIosArrowBack />
          Go Back
        </button>
        <div></div>
      </div>
      <div className="container mx-auto p-5">
        <div className="md:flex no-wrap md:mx-20 ">
          <div className="bg-gray-50 shadow-sm rounded-lg p-5 w-full md:w-5/12 md:mx-2">
            <div className=" p-3 border-t-4 border-green-400">
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
              <div className="my-4"></div>
              <button
                disabled={requestSent}
                onClick={tutee ? sendRequest : navigate("/tutee/login")}
                className={`w-full px-4 py-2 font-medium text-indigo-600  bg-transparent border border-indigo-600 rounded-md ${
                  !requestSent && "hover:bg-indigo-600 hover:text-white"
                } hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2`}
              >
                {requestSent ? "Request sent" : "Send Request"}
              </button>
              <div className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <div className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="bg-indigo-600 py-1 px-2 rounded-full text-white text-sm">
                      {tutor.isVerified ? "Verified" : "Not Verified"}
                    </span>
                  </span>
                </div>
                <div className="flex items-center py-3">
                  <span>Course</span>
                  <span className="ml-auto">
                    <span className="bg-indigo-600 py-1 px-2 rounded-full text-white text-sm">
                      <span>{course.name}</span>
                    </span>
                  </span>
                </div>
                <div className="flex flex-col py-3">
                  <span>Availability</span>
                  <span className="py-1 px-2 rounded-full text-md">
                    {tutor.schedule?.map((sch, index) => (
                      <div className="p-2 mb-2 bg-indigo-100" key={index}>
                        {sch}
                      </div>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 w-full md:w-7/12 mx-2 h-64">
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
                    {tutor.about}
                  </p>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Sex</div>
                    <div className="px-4 py-2">{tutor.sex}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Member since</div>
                    <div className="px-4 py-2">
                      {`${tutor.createdAt}`.slice(0, 10)}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">{RatingBar()}</div>
                    <div>
                      <PopupState variant="popper" popupId="demo-popup-popper">
                        {(popupState) => (
                          <div>
                            <Popper {...bindPopper(popupState)} transition>
                              {({ TransitionProps }) => (
                                <Fade {...TransitionProps} timeout={350}>
                                  <Box
                                    sx={{
                                      width: "200px",
                                      marginTop: "8px",
                                      alignItems: "center",
                                    }}
                                  >
                                    <div className="flex justify-center items-center">
                                      <Rating
                                        name="hover-feedback"
                                        value={ratingValue}
                                        precision={0.5}
                                        getLabelText={getLabelText}
                                        onChange={(event, newValue) => {
                                          setRatingValue(newValue);
                                        }}
                                        onChangeActive={(event, newHover) => {
                                          setRatingHover(newHover);
                                        }}
                                        emptyIcon={
                                          <StarIcon
                                            style={{ opacity: 0.55 }}
                                            fontSize="inherit"
                                          />
                                        }
                                      />
                                      <IconButton
                                        aria-label="send"
                                        size="large"
                                        onClick={handleRating}
                                      >
                                        <SendOutlinedIcon
                                          color="success"
                                          fontSize="large"
                                        />
                                      </IconButton>
                                    </div>
                                    {ratingValue !== null && (
                                      <Box sx={{ ml: 2 }}>
                                        {
                                          labels[
                                            ratingHover !== -1
                                              ? ratingHover
                                              : ratingValue
                                          ]
                                        }
                                      </Box>
                                    )}
                                  </Box>
                                </Fade>
                              )}
                            </Popper>
                            <Button
                              disabled={
                                !tutor.enrolledTutee?.includes(tutee?._id)
                              }
                              variant="text"
                              {...bindToggle(popupState)}
                            >
                              <AddIcon color="indigo" sx={{ mr: 1 }} />
                              Rate Tutor
                            </Button>
                          </div>
                        )}
                      </PopupState>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
                    <div className="text-teal-600">{tutor.education}</div>
                  </li>
                </ul>
              </div>
            </div>

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
                {tutors?.map((tut, index) => (
                  <a key={index} href={`/tutors/${tut.id}`}>
                    <div key={index} className="text-center my-2">
                      <img
                        className="h-16 w-16 rounded-full mx-auto"
                        src={tut.avatar}
                        alt={tut.fname}
                      />
                      <span className="text-main-color">
                        {tut.fname} {tut.lname}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
