import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("/getUser", async () => {
  const res = await axios.get();
});

export const userSlice = createSlice({
  name: "userInfo",
  initialState: { id: "test", pw: "test" },
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
