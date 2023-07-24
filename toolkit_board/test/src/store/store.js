import { configureStore } from "@reduxjs/toolkit";
import { countSlice, countSlice2 } from "../features/countSlice";

// 저장소 생성
export const store = configureStore({
  reducer: {
    count: countSlice.reducer,
    count2: countSlice2.reducer,
  },
});
