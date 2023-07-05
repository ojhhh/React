import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// 리액트 라우터 라이브러리 사용
// https://reactrouter.com/en/v6.3.0
// npm install react-router-dom@6

// 리액트는 spa로 페이지가 1개 인데 여러개 페이지 쓰기
// index.html 한개로 페이지를 보여주는데
// 페이지를 컴포넌트로 구성하고 하위컴포넌트들을 모아서 페이지의 형태로 구색을 맞춰 브라우저에 보여줌
// 페이지 컴포넌트를 조건마다 바꿔서 보여줌
// 브라우저가 새로고침되지 않고 내용만 교체되는 구조
// 조건은 브라우저의 url에 따라 페이지 컴포넌트를 맞춰서 보여줌

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
