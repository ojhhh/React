import React, { createContext, useContext, useState, useReducer } from "react";
import "./App.css";
import Todolist from "./components/layout/Todolist/Todolist";
import Global from "./Global";
import Reducer from "./components/Reducer";

function App() {
  const [title, setTitle] = useState("Develop");
  const [name, setName] = useState("oh");
  const [inputText, setIntputText] = useState("");

  const [titleChk, setTitleChk] = useState(false);
  const [nameChk, setNameChk] = useState(false);
  const [listChk, setListChk] = useState(false);

  const { init, reducer } = Reducer();
  const [state, dispatch] = useReducer(reducer, init);
  // console.log(state);

  const todoTopTitle = {
    title,
    setTitle,
    name,
    setName,
    titleChk,
    setTitleChk,
    nameChk,
    setNameChk,
    listChk,
    setListChk,
    inputText,
    setIntputText,
    state,
    dispatch,
  };
  return (
    <Global.Provider value={todoTopTitle}>
      <div className="App">
        <Todolist></Todolist>
      </div>
    </Global.Provider>
  );
}

export default App;
