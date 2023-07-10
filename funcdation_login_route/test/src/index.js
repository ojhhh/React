import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 리덕스
// 스토어, 액션, 리듀서

// 스토어 : 상태가 관리되는 오직 하나의 공간. 컴포넌트와 별개로 Store라는 메모리 공간이 있어서 필요한 상태값을 담아줌. 특정 컴포넌트에서 전역 상태값이 필요할 때 Store에 접근해서 데이터를 가져옴
// 액션 : 스토어에 전달할 데이터를 자칭. 자바스크립트 객체 형식으로 만들어져 있고 dispatch 함수를 사용해서 매개변수로 액션을 전달하면 리듀서가 호출되면서 매개변수로 액션을 받게됨
// dispatch(액션) => 리듀서가 호출되면서 리듀서에 액션을 전달
// 리듀서 : dispatch 함수를 통해 action을 리듀서함수에 전달. 매개변수로 전달받은 액션 확인 후 스토어에 상태를 업데이트 할지 여부를 결정

// 리덕스란 ?
// 리액트에서 사용할 수 있는 하나의 라이브러리
// 자식 컴포넌트에 props로 전달 받은 값을 사용하는데 다른 컴포넌트와 데이터 공유를 직접하기 불가능
// 그래서 공유해야할 데이터를 공유 받는 자식 컴포넌트들이 사용할 부모 Store를 만들어 데이터를 공유
// 데이터 흐름이 단방향이라는 단점을 보완하기 위해 만들어짐
// dispatch 함수를 사용해서 스토어에 값을 전달

// 리덕스 동작 구조
// component -> useDispatch -> Action -> Reducer -> Store
// 컴포넌트가 Action을 보내고 Reducer가 전달 받고 값을 업데이트할지 여부를 체크한뒤 Store의 값을 최신화

// Action -> 동작할 기능, 이름, 행동 (메뉴 이름)
// Reducer -> 함수를 실행해서 동작할 기능을 조건문으로 작성해둔 파일 (메뉴판)
// Store -> 컴포넌트가 어떤 Action을 실행시킬지 Reducer 함수로 받고 Store의 값을 최신화. Store의 값이 바뀌면 전역상태를 가져오고 있는 컴포넌트들을 리렌더링

// redux설치
// npm install redux
// npm install react-redux

// npm install redux-devtools-extension
