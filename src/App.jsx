import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./tutee/pages/Home";
import AddCourse from "./tutor/pages/courses/AddCourse";
import AboutUs from "./tutee/components/landing/AboutUs";

import Login from "./tutee/pages/users/Login";
import Register from "./tutee/pages/users/Register";
import TuteeProtectedRoutes from "./tutee/utils/TuteeProtectedRoutes";
import ViewAllCourses from "./tutee/pages/courses/ViewCourses";

import TutorLogin from "./tutor/pages/users/TutorLogin";
import TutorRegister from "./tutor/pages/users/TutorRegister";
import TutorViewAllCourses from "./tutor/pages/courses/TutorViewAllCourses";
import TutorProtectedRoutes from "./tutor/utils/TutorProtectedRoutes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Route>

        {/* pages that tutee only have acces */}
        <Route element={<TuteeProtectedRoutes />}>
          <Route path="/tutee/allcourses" element={<ViewAllCourses />} />
        </Route>

        {/* routes that tutor can only acess */}
        <Route element={<TutorProtectedRoutes />}>
          <Route path="/tutor/allcourses" element={<TutorViewAllCourses />} />
          <Route path="/tutor/addcourses" element={<AddCourse />} />
        </Route>

        <Route path="/tutee/register" element={<Register />} />
        <Route path="/tutee/login" element={<Login />} />
        <Route path="/tutor/register" element={<TutorRegister />} />
        <Route path="/tutor/login" element={<TutorLogin />} />
      </Routes>
    </Router>
  );
}
