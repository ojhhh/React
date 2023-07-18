import React, { useContext, useCallback } from "react";
import { useSelector } from "react-redux";
import Global from "../../../Global";
import { ListBox } from "./TodolistArr.styled";

const TodolistArr = () => {
  const { state } = useContext(Global);
  const arr = [...state.todolist];

  return (
    <div>
      {arr.map((e) => (
        <ListBox>
          <div className="listContainer">
            <div className="CheckBox">
              <input type="checkbox" />
            </div>
            <div className="ListBody">
              <span>{e}</span>
            </div>
          </div>
        </ListBox>
      ))}
    </div>
  );
};

export default TodolistArr;
