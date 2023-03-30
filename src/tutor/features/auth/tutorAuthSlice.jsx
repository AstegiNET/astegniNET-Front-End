import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tutorAuthService from "./tutorAuthService";

// Get tutor from localStorage
const tutor = JSON.parse(localStorage.getItem("tutor"));

const initialState = {
  tutor: tutor ? tutor : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// TutorRegister tutor
export const tutorRegister = createAsyncThunk(
  "auth/tutorRegister",
  async (tutor, thunkAPI) => {
    try {
      return await tutorAuthService.tutorRegister(tutor);
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

export const tutorLogin = createAsyncThunk(
  "auth/tutorLogin",
  async (tutor, thunkAPI) => {
    try {
      return await tutorAuthService.tutorLogin(tutor);
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

export const tutorLogout = createAsyncThunk("auth/tutorLogout", async () => {
  await tutorAuthService.tutorLogout();
});

export const tutorAuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    tutorReset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(tutorRegister.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(tutorRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tutor = action.payload;
      })
      .addCase(tutorRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.tutor = null;
      })
      .addCase(tutorLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(tutorLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tutor = action.payload;
      })
      .addCase(tutorLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.tutor = null;
      })
      .addCase(tutorLogout.fulfilled, (state) => {
        state.tutor = null;
      });
  },
});

export const { tutorReset } = tutorAuthSlice.actions;
export default tutorAuthSlice.reducer;
