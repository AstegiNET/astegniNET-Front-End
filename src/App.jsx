import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./tutee/pages/Home";
import AddCourse from "./tutee/pages/courses/AddCourse";
import AboutUs from "./tutee/components/landing/AboutUs";
import Login from "./tutee/pages/users/Login";
import Register from "./tutee/pages/users/Register";
import TuteeProtectedRoutes from "./tutee/utils/TuteeProtectedRoutes";
import ViewAllCourses from "./tutee/pages/courses/ViewCourses";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Route>

        {/* pages tutee only have acces */}
        <Route element={<TuteeProtectedRoutes />}>
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/allcourses" element={<ViewAllCourses />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
