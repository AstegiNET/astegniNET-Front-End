import axios from "axios";

import { REGISTER_TUTEE, LOGIN_TUTEE } from "../../../api/API";

// Register tutee
const register = async (tuteeData) => {
  const response = await axios.post(REGISTER_TUTEE, tuteeData);

  if (response.data) {
    localStorage.setItem("tutee", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(LOGIN_TUTEE, userData);

  if (response.data) {
    localStorage.setItem("tutee", JSON.stringify(response.data));
  }

  return response.data;
};

//Logout tutee
const logout = () => {
  localStorage.removeItem("tutee");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
