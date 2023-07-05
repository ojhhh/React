import "./App.css";
import React, { useState, useEffect } from "react";
import Main from "./components/Main";

function App() {
  const [gameKey, setGameKey] = useState(0);

  const restartGame = () => {
    setGameKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {}, [gameKey]);

  return (
    <div className="App">
      <Main gameKey={gameKey} onGameOver={restartGame} />
    </div>
  );
}

export default App;
