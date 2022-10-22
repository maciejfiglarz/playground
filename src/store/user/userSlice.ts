import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//project imports
import axiosApi from "utils/axiosApi";
// import store from 'store';
import { Profile } from "types";
import { RootState } from "store";

interface UserSliceState {
  userInfo: Profile | null;
  loading: boolean;
  error: any;
}

const initialState: UserSliceState = {
  userInfo: null,
  loading: false,
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
  async ({ email, password }: { email: string; password: string }) => {
    const { data } = await axiosApi.post(`/auth/login`, {
      email,
      password,
    });
    return data;
  }
);
export const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async () => {
    const response = await axiosApi.get(`/auth/user-details`);
    const { data } = response;
    console.log("getUserDetails", data);
    return data;
  }
);

export const slice = createSlice({
  name: "user/logout",
  initialState,
  reducers: {
    logout: (state) => {
      axiosApi.get(`/auth/logout`);
      return initialState;
    },
  },

  extraReducers: (builder) => {
    //login
    builder.addCase(login.pending, (state, action) => {
      // if (!state.loading) {
      state.loading = true;
      state.error = null;
      // }
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = action.payload as Profile;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    builder.addCase(getUserDetails.pending, (state, action) => {
      // if (!state.loading) {
      state.loading = true;
      state.error = null;
      // }
    });
    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      const payload: Profile = action.payload;
      state.loading = false;
      state.userInfo = payload ? payload : null;
    });
    builder.addCase(getUserDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const selectAccount = (state: RootState) => state.user;

export const { logout } = slice.actions;

export default slice.reducer;
