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
import UpdateTutorProfile from "./tutor/pages/users/UpdateProfile";

import TutorsList from "./tutee/components/tutorList/TutorsList";
import TutorProfileView from "./tutee/pages/tutor/TutorProfileView";
import Header from "./landingPage/components/Header";
// import Footer from "./landingPage/components/Footer";

import Requests from "./tutor/pages/requests/RequestComponent";
import TuteeRequests from "./tutee/pages/requests/Requests";

import TutorEnrollment from "./tutor/pages/enrollments/Enrollment";
import TuteeEnrollment from "./tutee/pages/enrollments/Enrollments";
import TuteeVideoChat from "./tutee/pages/videocall/VideoCall";
import CommonProtectedRoutes from "./landingPage/utils/CommonUtils";
import VideoCall from "./video/VideoCall";
import TutorHome from "./tutor/pages/TutorHome";
import Tutors from "./tutee/pages/tutor/tutorList/TutorsList";

export default function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tutors" element={<TutorsList />} />
        <Route path="tutors/:id" element={<TutorProfileView />} />
        <Route path="/tutee/register" element={<Register />} />
        <Route path="/tutee/login" element={<Login />} />

        <Route element={<TuteeProtectedRoutes />}>
          <Route path="tutee/tutors/:id" element={<TutorProfileView />} />
          <Route path="/tutorlist" element={<Tutors />} />
          <Route path="/tutee/home" element={<TuteeProfile />} />
          <Route path="/tutee/requests" element={<TuteeRequests />} />
          <Route path="/tutee/enrollments" element={<TuteeEnrollment />} />
          <Route path="/tutee/pay" element={<Pay />} />
          <Route path="/tutee/verifypay/:id" element={<VerifyPay />} />
          <Route path="/tutee/updateprofile" element={<UpdateProfile />} />
        </Route>

        <Route path="/tutor/register" element={<TutorRegister />} />
        <Route path="/tutor/login" element={<TutorLogin />} />
        <Route element={<TutorProtectedRoutes />}>
          <Route path="/tutor/home" element={<TutorHome />} />
          <Route path="/tutor/UpdateProfile" element={<UpdateTutorProfile />} />
          <Route path="/tutor/requests" element={<Requests />} />
          <Route path="/tutor/enrollments" element={<TutorEnrollment />} />
        </Route>

        <Route element={<CommonProtectedRoutes />}>
          <Route path="/videoCall" element={<VideoCall />} />
        </Route>
      </Routes>

      {/* <Footer /> */}
    </Router>
  );
}
