import "./App.css";
import { Main, Login, Shop } from "./pages";
// Routes는 Route의 부모 컴포넌트
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* 조건부 렌더링 */}
      {/* path : browser path */}
      {/* element : path 경로에 브라우저 경로가 맞으면 속성에 넣은 컴포넌트를 보여줌 */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
