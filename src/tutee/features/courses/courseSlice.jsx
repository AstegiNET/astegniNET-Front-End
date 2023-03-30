import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import courseService from "./courseService";

const initialState = {
  courses: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new course
export const createCourse = createAsyncThunk(
  "courses/create",
  async (courseData, thunkAPI) => {
    try {
      if (thunkAPI.getState().tuteeAuth.user) {
        const token = thunkAPI.getState().tuteeAuth.user.token;
        return await courseService.createCourse(courseData, token);
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user courses
export const getCourses = createAsyncThunk(
  "courses/getAll",
  async (_, thunkAPI) => {
    try {
      if (thunkAPI.getState().tuteeAuth.user) {
        const token = thunkAPI.getState().tuteeAuth.user.token;
        return await courseService.getCourses(token);
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user courses
export const getAllCourses = createAsyncThunk(
  "courses/getAllCourses",
  async (_, thunkAPI) => {
    try {
      if (thunkAPI.getState().tuteeAuth.user) {
        return await courseService.getAllCourses();
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Delete user course
export const deleteCourse = createAsyncThunk(
  "courses/delete",
  async (id, thunkAPI) => {
    try {
      if (thunkAPI.getState().tuteeAuth.user) {
        const token = thunkAPI.getState().tuteeAuth.user.token;
        return await courseService.deleteCourse(id, token);
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.courses.push(action.payload);
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.courses = action.payload;
      })
      .addCase(getCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.courses = state.courses.filter(
          (course) => course._id !== action.payload.id
        );
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.courses = action.payload;
      })
      .addCase(getAllCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = courseSlice.actions;
export default courseSlice.reducer;
