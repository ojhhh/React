// combineReducers() : reducer 함수를 합쳐주는 redux 라이브러리에서 제공되는 함수 사용
import { combineReducers } from "redux";
import Login from "./login";
import weather from "./weather";

const rootReducer = combineReducers({ Login, weather });

export default rootReducer;
