import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
const TuteeProtectedRoutes = () => {
  const { tutee } = useSelector((state) => state.tuteeAuth);

  return tutee && tutee.role === "tutee" ? (
    <Outlet />
  ) : (
    <Navigate to="/tutee/login" />
  );
};

export default TuteeProtectedRoutes;
