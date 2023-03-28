import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCourse from "./pages/courses/AddCourse";
import AboutUs from "./components/landing/AboutUs";
import Login from "./pages/users/Login";
import Register from "./pages/users/Register";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Route>
        <Route path="/addcourse" element={<AddCourse />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
