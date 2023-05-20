import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
const CommonProtectedRoutes = () => {
  const { tutee } = useSelector((state) => state.tuteeAuth);
  const { tutor } = useSelector((state) => state.tutorAuth);

  return (tutee && tutee.role === "tutee")  || (tutor && tutor.role === "tutor" )? (
    <Outlet />
  ) : (
    <Navigate to="tutor/login" />
  );
};

export default CommonProtectedRoutes;
