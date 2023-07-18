import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import Global from "../../../Global";
import { ListBox } from "./TodolistArr.styled";
// import Reducer from "../../Reducer";
// import { useReducer } from "react";
const TodolistArr = () => {
  // const { init, reducer } = Reducer();
  // const [state, dispatch] = useReducer(reducer, init);
  // console.log(state);

  // const getList = useSelector((state) => state.todolist);
  // console.log(getList);
  // const { state } = useContext(Global);
  // useEffect(() => {
  //   console.log(getList);
  // }, [getList]);
  return (
    <>
      <ListBox>
        <div className="listContainer">
          <div className="CheckBox">
            <input type="checkbox" />
          </div>
          <div className="ListBody">
            <span>{"hi"}</span>
          </div>
        </div>
      </ListBox>
    </>
  );
};

export default TodolistArr;
