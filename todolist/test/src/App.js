import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Detail, Login, Main, MyPage, Shop } from "./pages";
import React, { useState } from "react";

function App() {
  // 리덕스를 배우면 다시 처리할 예정 그전에 로그인 정보를 여기에 담아두고 실습진행
  const [login, setLogin] = useState(false);
  // 함수형 컴포넌트
  const Redirect = () => {
    // Navigate : 브라우저의 경로를 바꿔줌
    // 로그인이 되어있으면 MyPage 안되있으면 main
    return login == true ? <MyPage login={login} /> : <Navigate to={"/"} />;
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main login={login} />} />
        <Route
          path="/login"
          element={<Login login={login} setLogin={setLogin} />}
        />
        <Route path="/shop" element={<Shop login={login} />} />
        {/* 로그인 상태일때 경우에만 접근 할 수 있게 설정 */}
        <Route
          path="/detail/:id/:num/:name"
          element={<Detail login={login} />}
        />
        <Route path="/mypage" element={<Redirect />} />
      </Routes>
    </div>
  );
}

export default App;
