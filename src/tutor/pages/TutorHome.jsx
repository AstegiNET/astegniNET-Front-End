/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import Sidebar from "../components/commonComponent/sidebar/Sidebar";
import TutorProfile from "./users/TutorProfile";

const HomePage = () => {
  return (
    <div className="w-full flex h-screen ">
      <Sidebar />
      <TutorProfile />
    </div>
  );
};

export default HomePage;
