import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./landingPage/LandingPage";
import TuteeProtectedRoutes from "./tutee/utils/TuteeProtectedRoutes";
import Login from "./tutee/pages/users/Login";
import Register from "./tutee/pages/users/Register";
import TuteeProfile from "./tutee/pages/users/TuteeProfile";
import UpdateProfile from "./tutee/pages/users/UpdateProfile";

import Pay from "./tutee/pages/payment/Pay";
import VerifyPay from "./tutee/pages/payment/VerifyPay";

import TutorProtectedRoutes from "./tutor/utils/TutorProtectedRoutes";
import TutorLogin from "./tutor/pages/users/TutorLogin";
import TutorRegister from "./tutor/pages/users/TutorRegister";
import UpdateTutorProfile from "./tutor/pages/users/UpdateProfile";

import TutorsList from "./tutee/components/tutorList/TutorsList";
import TutorProfileView from "./tutee/pages/tutor/TutorProfileView";

import Requests from "./tutor/pages/requests/RequestComponent";
import TuteeRequests from "./tutee/pages/requests/Requests";

import TutorEnrollment from "./tutor/pages/enrollments/Enrollment";
import TuteeEnrollment from "./tutee/pages/enrollments/Enrollments";

import CommonProtectedRoutes from "./landingPage/utils/CommonUtils";
import VideoCall from "./video/VideoCall";
import TutorHome from "./tutor/pages/TutorHome";
import Tutors from "./tutee/pages/tutor/tutorList/TutorsList";
import Chat from "./tutee/pages/message/Chat";
import Messages from "./tutee/pages/message/Messages";
import TutorChat from "./tutor/pages/message/Chat";
import TutorMessages from "./tutor/pages/message/Messages";

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

          <Route path="tutee/messages" element={<Messages />} />
          <Route path="tutee/chat" element={<Chat />} />
        </Route>

        <Route path="/tutor/register" element={<TutorRegister />} />
        <Route path="/tutor/login" element={<TutorLogin />} />
        <Route element={<TutorProtectedRoutes />}>
          <Route path="/tutor/home" element={<TutorHome />} />
          <Route path="/tutor/UpdateProfile" element={<UpdateTutorProfile />} />
          <Route path="/tutor/requests" element={<Requests />} />
          <Route path="/tutor/enrollments" element={<TutorEnrollment />} />
          <Route path="tutor/messages" element={<TutorMessages />} />
          <Route path="tutor/chat" element={<TutorChat />} />
        </Route>
        <Route element={<CommonProtectedRoutes />}>
          <Route path="/videoCall/:tutorid" element={<VideoCall />} />
        </Route>
      </Routes>

      {/* <Footer /> */}
    </Router>
  );
}
