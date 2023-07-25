import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk(
  "/getUser",
  async ({ user_id, user_pw }) => {
    const res = await axios.post(
      "http://127.0.0.1:8080/users/login",
      {
        user_id,
        user_pw,
      },
      { withCredentials: true }
    );
  }
);
export const SignUp = createAsyncThunk(
  "/getUser",
  async ({ user_id, user_pw }) => {
    const res = await axios.post(
      "http://127.0.0.1:8080/users/signup",
      {
        user_id,
        user_pw,
      },
      { withCredentials: true }
    );
    console.log(res);
    if (res.data == 200) {
      alert("가입이 완료되었습니다.");
    } else {
      alert(`${res.data}`);
    }
  }
);

export const userSlice = createSlice({
  name: "userInfo",
  initialState: { id: "", pw: "" },
  reducers: {
    login: (state) => {
      console.log(state);
    },
    logout: (state) => {
      console.log(state);
    },
  },
});

export const { login, logout } = userSlice.actions;
