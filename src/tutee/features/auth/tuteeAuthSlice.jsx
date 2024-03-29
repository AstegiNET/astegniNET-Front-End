import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./tuteeAuthService";

// Get tutee from localStorage
const tutee = JSON.parse(localStorage.getItem("tutee"));

const initialState = {
  tutee: tutee ? tutee : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register tutee
export const register = createAsyncThunk(
  "auth/register",
  async (tutee, thunkAPI) => {
    try {
      return await authService.register(tutee);
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

export const login = createAsyncThunk("auth/login", async (tutee, thunkAPI) => {
  try {
    return await authService.login(tutee);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tutee = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.tutee = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tutee = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.tutee = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.tutee = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
