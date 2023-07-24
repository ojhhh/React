import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios를 활용해 날씨 정보 가져오기
export const temp = createAsyncThunk("/temp", async (name) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=a74b0406ea7cf1f5aaf2298809cdef51`
  );
  const { data } = res;
  console.log(data);
  return data;
});

// createSlice 메서드를 사용해서 create함수를 가지고 있는 객체를 만듬
export const countSlice = createSlice({
  // Slice 구분 이름
  name: "count",
  // 초기값
  initialState: { num: 0 },
  reducers: {
    // 이전 상태가 매개변수로 들어옴
    add: (state) => {
      state.num += 1;
    },
    remove: (state) => {
      state.num -= 1;
    },
  },
});
export const countSlice2 = createSlice({
  // Slice 구분 이름
  name: "count2",
  // 초기값
  initialState: { num: 0, value: "state" },
  // 동기작업 처리
  reducers: {
    // 이전 상태가 매개변수로 들어옴
    add2: (state) => {
      state.num += 1;
    },
    remove2: (state) => {
      state.num -= 1;
    },
  },
  // 비동기 작업 처리
  extraReducers: (builder) => {
    // extraReducers의 builder를 매개변수로 받고 상태 케이스 추가
    // ex) 로딩 케이스, 완료 케이스, 실패 케이스 등
    // 케이스 추가
    builder.addCase(temp.pending, (state, action) => {
      state.value = "loading";
    });
    builder.addCase(temp.fulfilled, (state, action) => {
      console.log(action);
      state.value = "commit";
      state.num += 1;
    });
    builder.addCase(temp.rejected, (state, action) => {
      state.value = "rejected";
      state.num -= 1;
    });
  },
});

// action함수를 내보내서 dispatch로 전달
export const { add, remove } = countSlice.actions;
export const { add2, remove2 } = countSlice2.actions;
