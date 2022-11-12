import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//project imports
import axiosApi from "utils/axiosApi";
import axios from "utils/axios";
// import store from 'store';
import { User } from "types";
import { RootState } from "store";
import { setCookie } from "utils/cookies";

interface UserSliceState {
  userInfo: User | null;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: any;
}

const initialState: UserSliceState = {
  userInfo: null,
  isFetching: false,
  isSuccess: false,
  isError: false,
  error: null,
};

export const register = createAsyncThunk(
  "user/register",
  async ({
    login,
    email,
    password,
    confirmPassword,
  }: {
    login: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    try {
      const { data } = await axiosApi.post(`/auth/register`, {
        login,
        email,
        password,
        confirmPassword,
      });

      console.log("success response", data);
    } catch (e: any) {
      console.log("errro response", e?.response?.data);
    }

    return {};
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(`/auth/login`, {
        email,
        password,
      });
      console.log("resoonseLoginData", response);
      const { data } = response;
      return data;
    } catch (error: any) {
      console.log("errorsLogin", error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async () => {
    const response = await axios.get(`/auth/user-details`);
    const { data } = response;
    return data;
  }
);

export const slice = createSlice({
  name: "user/logout",
  initialState,
  reducers: {
    logout: (state) => {
      // axiosApi.get(`/auth/logout`);
      state.isFetching = false;
      state.isSuccess = true;
      state.userInfo = null;
      setCookie("user","");
      return state;
    },
  },

  extraReducers: (builder) => {
    //login
    builder.addCase(login.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.userInfo = action.payload as User;
      setCookie("user",action.payload.id);
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    });

    builder.addCase(getUserDetails.pending, (state, action) => {
      // if (!state.loading) {
      state.isFetching = true;
      state.error = null;
      // }
    });
    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      const payload: User = action.payload;
      state.isFetching = false;
      state.isSuccess = true;
      state.userInfo = action.payload as User;
    });
    builder.addCase(getUserDetails.rejected, (state, action) => {
      state.isFetching = false;
      state.isSuccess = true;
      // state.error = action.error;
    });
  },
});

export const selectAccount = (state: RootState) => state.user;

export const { logout } = slice.actions;

export default slice.reducer;
