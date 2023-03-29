import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../tutee/features/auth/authSlice";
import courseReducer from "../tutee/features/courses/courseSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
  },
});
