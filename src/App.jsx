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

import VideoCall from "./videoCall/VideoCall";
import TuteeProfile from "./tutee/pages/users/TuteeProfile";
import TutorProfile from "./tutor/pages/users/TutorProfile";
import UpdateProfile from "./tutee/pages/users/UpdateProfile";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/tutee/register" element={<Register />} />
        <Route path="/tutee/login" element={<Login />} />

        {/* pages that tutee only have acces */}
        <Route element={<TuteeProtectedRoutes />}>
          <Route path="/tutee/allcourses" element={<ViewAllCourses />} />
          <Route path="/tutee/profile" element={<TuteeProfile />} />
        </Route>

        <Route path="/tutor/register" element={<TutorRegister />} />
        <Route path="/tutor/login" element={<TutorLogin />} />

        {/* routes that tutor can only acess */}
        <Route element={<TutorProtectedRoutes />}>
          <Route path="/tutor/profile" element={<TutorProfile />} />
          <Route path="/tutor/allcourses" element={<TutorViewAllCourses />} />
          <Route path="/tutor/addcourses" element={<AddCourse />} />
        </Route>
        <Route path="/tutee/updateprofile" element={<UpdateProfile />} />
        <Route path="/astegninet/videocall" element={<VideoCall />} />
      </Routes>
    </Router>
  );
}
