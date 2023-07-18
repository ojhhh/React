import React, { useContext, useStat } from "react";
import { Wrap, TopBox } from "./Todolist.styled";
import Global from "../../../Global";
import PopUp from "../Popup/PopUp";
import TodolistArr from "./TodolistArr";

const Todolist = () => {
  const { title, setTitle } = useContext(Global);
  const { name, setName } = useContext(Global);

  const { titleChk, setTitleChk } = useContext(Global);
  const { nameChk, setNameChk } = useContext(Global);
  const { listChk, setListChk } = useContext(Global);

  function HandleTitle() {
    setTitleChk(!titleChk);
  }
  function HandleName() {
    setNameChk(!nameChk);
  }
  function HandleAddList() {
    setListChk(!listChk);
  }

  return (
    <Wrap>
      <div className="title">
        <h1>Todolist</h1>
        <span className="addBtn" onClick={HandleAddList}>
          +
        </span>
      </div>
      <TopBox>
        {titleChk ? <PopUp text={{ title: title }}></PopUp> : null}
        {nameChk ? <PopUp text={{ name: name }}></PopUp> : null}
        {listChk ? <PopUp text={{ list: "Add List" }}></PopUp> : null}
        <span onClick={() => HandleTitle()}>{title}</span>
        <span onClick={() => HandleName()}>{name}</span>
      </TopBox>
      <TodolistArr />
    </Wrap>
  );
};

export default Todolist;
