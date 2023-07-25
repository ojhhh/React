import React from "react";
import BoardList from "./BoardList";
import { BoardMainWrap, BoardWrap } from "./Board.styled";

const Board = () => {
  return (
    <BoardMainWrap>
      <div className="MainTitle">
        <h1>Board</h1>
      </div>
      <BoardWrap>
        <div className="boardContainer">
          <div className="innerTitle">
            <span>title</span>
          </div>
          <div className="innerContent">
            <span>content</span>
          </div>
          <div className="innerWrite">
            <span>writer</span>
          </div>
          <div className="innerbtn">
            <button>Insert</button>
          </div>
        </div>
        <BoardList></BoardList>
      </BoardWrap>
    </BoardMainWrap>
  );
};

export default Board;
