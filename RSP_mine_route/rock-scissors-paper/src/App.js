import "./App.css";
import React, { useState, useEffect } from "react";
import Block from "./components/Block";
import { img01, img02, img03 } from "./img";

// 가위바위보 만들기
// player 1, computer 1
// computer는 랜덤으로 가위바위보
// player는 가위바위보 선택
function App() {
  // computer와 player가 사용할 객체 생성
  const select = {
    scissors: {
      name: "scissors",
      img: img01,
    },
    rock: {
      name: "rock",
      img: img02,
    },
    paper: {
      name: "paper",
      img: img03,
    },
  };

  // player가 선택한 값을 주시
  const [userSelect, setUserSelect] = useState(null);

  // computer의 선택값 주시
  const [comSelect, setComSelect] = useState(null);

  // victory or defeat 값
  const [result, setResult] = useState("");

  // 선택한 변수를 상태변수에 저장
  function userClick(_select) {
    setUserSelect(select[_select]);

    // computer는 랜덤으로 선택
    let Arr = Object.keys(select)[Math.floor(Math.random() * 3)];

    setComSelect(select[Arr]);

    // victory or defeat
    let player = select[_select];
    let computer = select[Arr];
    if (player.name == computer.name) {
      setResult("draw");
    } else if (player.name == "scissors") {
      let result = computer.name == "paper" ? "win" : "defeat";
      setResult(result);
    } else if (player.name == "rock") {
      let result = computer.name == "scissors" ? "win" : "defeat";
      setResult(result);
    } else if (player.name == "paper") {
      let result = computer.name == "rock" ? "win" : "defeat";
      setResult(result);
    }
  }

  useEffect(() => {}, [userSelect]);

  useEffect(() => {}, [result]);

  return (
    <>
      <div className="App">
        <Block data={userSelect} name={"player"} result={result} />
        <Block data={comSelect} name={"computer"} result={result} />
      </div>
      <div>
        {/* button Area */}
        <button
          onClick={() => {
            userClick("scissors");
          }}
        >
          scissors
        </button>
        <button
          onClick={() => {
            userClick("rock");
          }}
        >
          rock
        </button>
        <button
          onClick={() => {
            userClick("paper");
          }}
        >
          paper
        </button>
      </div>
    </>
  );
}

export default App;
