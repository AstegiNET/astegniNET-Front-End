import axios from "axios";
import { FETCH_ALL_COURSES } from "../../../api/API";

const API_URL = "http://localhost:5000/api/courses/";

// Create new course
const createCourse = async (courseData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, courseData, config);

  return response.data;
};

// Get user courses
const getCourses = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Get user courses
const getAllCourses = async () => {
  const response = await axios.get(FETCH_ALL_COURSES);

  return response.data;
};

//getAllCourses

// Delete user course
const deleteCourse = async (courseId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + courseId, config);

  return response.data;
};

const courseService = {
  createCourse,
  getCourses,
  getAllCourses,
  deleteCourse,
};

export default courseService;
