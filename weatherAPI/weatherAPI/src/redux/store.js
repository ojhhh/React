import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

// 미들웨어 추가
// applyMiddleware 함수로 미들웨어 추가 반환되는 객체로 추가

// 미들웨어로 thunk를 추가 하는 방법
// applyMiddleware(thunk) 함수에 매개변수로 사용할 미들웨어 전달

export const store = createStore(rootReducer, applyMiddleware(thunk));
