import "./App.css";
import { Main, Signup, Board } from "./components/layout";
import { Routes, Route, useNavigate } from "react-router-dom";
import Global from "./Global";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const GlobalValue = {
    dispatch,
    nav,
  };
  return (
    <Global.Provider value={GlobalValue}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </div>
    </Global.Provider>
  );
}

export default App;
