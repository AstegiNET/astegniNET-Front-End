import axios from "axios";

const API_URL = "http://localhost:5000/api/tutees/";

// Register tutee
const register = async (tuteeData) => {
  const response = await axios.post(API_URL + "register", tuteeData);

  if (response.data) {
    localStorage.setItem("tutee", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

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
