import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 실습
// 메인페이지 -> 로그인페이지 -> 음식 주문 페이지 -> 마이페이지
// 주문한 음식들은 마이페이지에 보이고 로그인을 해야지 음식 주문 페이지, 마이페이지로 갈 수 있음
// react-router, react-redux

// 메인페이지에서는 로그인 페이지로 가는 버튼 만 보임
// 로그인 페이지에서 로그인에 성공하면 메인페이지로 돌아오는데 돌아오면 로그아웃, 음식 주문페이지, 마이페이지 버튼이 활성화됨
//
