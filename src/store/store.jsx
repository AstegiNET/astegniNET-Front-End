import { configureStore } from "@reduxjs/toolkit";
import tuteeAuthReducer from "../tutee/features/auth/tuteeAuthSlice";
import tutorAuthReducer from "../tutor/features/auth/tutorAuthSlice";
import courseReducer from "../tutee/features/courses/courseSlice";

export const store = configureStore({
  reducer: {
    tuteeAuth: tuteeAuthReducer,
    tutorAuth: tutorAuthReducer,
    course: courseReducer,
  },
});
