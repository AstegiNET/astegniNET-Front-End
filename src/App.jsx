import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./landingPage/LandingPage";
// import Requests from "./landingPage/components/Requests";
import TuteeProtectedRoutes from "./tutee/utils/TuteeProtectedRoutes";
import Login from "./tutee/pages/users/Login";
import Register from "./tutee/pages/users/Register";
import TuteeProfile from "./tutee/pages/users/TuteeProfile";
import UpdateProfile from "./tutee/pages/users/UpdateProfile";
import ViewAllCourses from "./tutee/pages/courses/ViewCourses";
import Pay from "./tutee/pages/payment/Pay";
import VerifyPay from "./tutee/pages/payment/VerifyPay";

import TutorProtectedRoutes from "./tutor/utils/TutorProtectedRoutes";
import TutorLogin from "./tutor/pages/users/TutorLogin";
import TutorRegister from "./tutor/pages/users/TutorRegister";
import TutorProfile from "./tutor/pages/users/TutorProfile";
import UpdateTutorProfile from "./tutor/pages/users/UpdateProfile";
import AddCourse from "./tutor/pages/courses/AddCourse";
import TutorViewAllCourses from "./tutor/pages/courses/TutorViewAllCourses";

import TutorsList from "./tutee/components/tutorList/TutorsList";
import TutorProfileView from "./tutee/pages/tutor/TutorProfileView";
import Header from "./landingPage/components/Header";
// import Footer from "./landingPage/components/Footer";

import Requests from "./tutor/pages/requests/Requests";
import TuteeRequests from "./tutee/pages/requests/Requests";

import TutorEnrollment from "./tutor/pages/enrollments/Enrollment";
import TuteeEnrollment from "./tutee/pages/enrollments/Enrollments";
import VideoChat from "./tutor/pages/videocall/VideoCall";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tutors" element={<TutorsList />} />
        <Route path="tutors/:id" element={<TutorProfileView />} />

        <Route path="/tutee/register" element={<Register />} />
        <Route path="/tutee/login" element={<Login />} />

        <Route element={<TuteeProtectedRoutes />}>
          <Route path="/tutee/allcourses" element={<ViewAllCourses />} />
          <Route path="tutee/tutors/:id" element={<TutorProfileView />} />
          <Route path="/tutee/profile/viewprofile" element={<TuteeProfile />} />
          <Route path="/tuteerequests" element={<TuteeRequests />} />
          <Route path="/tuteeenrollments" element={<TuteeEnrollment />} />
          <Route path="/tutee/pay" element={<Pay />} />
          <Route path="/tutee/verifypay/:id" element={<VerifyPay />} />
          <Route
            path="/tutee/profile/updateprofile"
            element={<UpdateProfile />}
          />
          <Route path="/tutee/videoCall" element={<VideoChat />} />
        </Route>

        <Route path="/tutor/register" element={<TutorRegister />} />
        <Route path="/tutor/login" element={<TutorLogin />} />

        <Route element={<TutorProtectedRoutes />}>
          <Route path="/tutor/profile/viewprofile" element={<TutorProfile />} />
          <Route
            path="/tutor/profile/UpdateProfile"
            element={<UpdateTutorProfile />}
          />
          <Route path="/tutorequests" element={<Requests />} />
          <Route path="/tutorenrollments" element={<TutorEnrollment />} />
          <Route path="/tutor/allcourses" element={<TutorViewAllCourses />} />
          <Route path="/tutor/addcourses" element={<AddCourse />} />
          <Route path="/tutor/videoCall" element={<VideoChat />} />
        </Route>
      </Routes>

      {/* <Footer /> */}
    </Router>
  );
}
