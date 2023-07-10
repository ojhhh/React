// 저장소 만들기
// 줄이 생긴 이유는 다음 업데이트때 없어질 수 있기 때문
import { createStore } from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

// store의 전역상태가 변화하는걸 개발자 모드로 확인 하게 도와줌
let store = createStore(reducer, composeWithDevTools());

export default store;
