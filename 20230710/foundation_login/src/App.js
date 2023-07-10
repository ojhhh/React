import "./App.css";
import { Main, Login, Mypage, Product } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
