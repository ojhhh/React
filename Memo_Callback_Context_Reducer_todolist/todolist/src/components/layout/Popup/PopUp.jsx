import React, { useContext, useEffect, useReducer, useState } from "react";
import { PopUpWrap } from "./PopUp.styled";
import Global from "../../../Global";
// import Reducer from "../../Reducer";

const PopUp = ({ text }) => {
  const { titleChk, setTitleChk } = useContext(Global);
  const { nameChk, setNameChk } = useContext(Global);
  const { listChk, setListChk } = useContext(Global);
  let { inputText, setIntputText } = useContext(Global);
  let { title, setTitle } = useContext(Global);
  let { name, setName } = useContext(Global);
  const { state, dispatch } = useContext(Global);

  function closePopup() {
    if (text?.title) {
      setTitleChk(!titleChk);
    }

    if (text?.name) {
      setNameChk(!nameChk);
    }
    if (text?.list) {
      setListChk(!listChk);
    }
    return;
  }

  function getTitleInput(data) {
    title = data;
    return;
  }
  function getNameInput(data) {
    name = data;
    return;
  }
  function getInputValue(data) {
    inputText = data;
    return;
  }

  function updateValue() {
    setTitle(title);
    setName(name);
    setIntputText(inputText);
    setTitleChk(false);
    setNameChk(false);
    setListChk(false);
    return;
  }

  useEffect(() => {
    // console.log(state);
  }, [state]);

  return (
    <PopUpWrap>
      <div className="popupContainer">
        <div className="Container">
          <div className="ContainerTop">
            <h2>
              {text && text?.title
                ? "Change Title"
                : text?.name
                ? "Change Name"
                : "Add List"}
            </h2>
            <span
              onClick={() => {
                closePopup();
              }}
            >
              X
            </span>
          </div>
          <div className="ContainerBody">
            {text && text?.title ? (
              <input onChange={(e) => getTitleInput(e.target.value)}></input>
            ) : text?.name ? (
              <input onChange={(e) => getNameInput(e.target.value)}></input>
            ) : (
              <input onChange={(e) => getInputValue(e.target.value)}></input>
            )}
            {text && text?.title ? (
              <button onClick={() => updateValue()}>Update</button>
            ) : text?.name ? (
              <button onClick={() => updateValue()}>Update</button>
            ) : (
              // <Reducer />
              <button
                onClick={() => {
                  dispatch({ type: "ADDLIST", payload: inputText });
                }}
              >
                Update
              </button>
            )}
          </div>
        </div>
      </div>
    </PopUpWrap>
  );
};

export default PopUp;
