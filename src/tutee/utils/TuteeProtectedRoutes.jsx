import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
const TuteeProtectedRoutes = () => {
  const { user } = useSelector((state) => state.tuteeAuth);

  return user && user.role === "tutee" ? <Outlet /> : <Navigate to="/login" />;
};

export default TuteeProtectedRoutes;
