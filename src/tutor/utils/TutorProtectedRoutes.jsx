import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
const TutorProtectedRoutes = () => {
  const { tutor } = useSelector((state) => state.tutorAuth);

  return tutor && tutor.role === "tutor" ? (
    <Outlet />
  ) : (
    <Navigate to="/tutor/login" />
  );
};

export default TutorProtectedRoutes;
