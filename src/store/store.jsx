import { configureStore } from "@reduxjs/toolkit";
import tuteeAuthReducer from "../tutee/features/auth/tuteeAuthSlice";
import courseReducer from "../tutee/features/courses/courseSlice";

export const store = configureStore({
  reducer: {
    tuteeAuth: tuteeAuthReducer,
    course: courseReducer,
  },
});
