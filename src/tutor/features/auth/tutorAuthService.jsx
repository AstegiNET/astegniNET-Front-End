import axios from "axios";

const API_URL = "http://localhost:5000/api/tutors/";

// TutorRegister tutor
const tutorRegister = async (tutorData) => {
  const response = await axios.post(API_URL + "register", tutorData);

  if (response.data) {
    localStorage.setItem("tutor", JSON.stringify(response.data));
  }

  return response.data;
};

// TutorLogin tutor
const tutorLogin = async (tutorData) => {
  const response = await axios.post(API_URL + "login", tutorData);

  if (response.data) {
    localStorage.setItem("tutor", JSON.stringify(response.data));
  }

  return response.data;
};

//TutorLogout tutor
const tutorLogout = () => {
  localStorage.removeItem("tutor");
};

const tutorAuthService = {
  tutorRegister,
  tutorLogout,
  tutorLogin,
};

export default tutorAuthService;
