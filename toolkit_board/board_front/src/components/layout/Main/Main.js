import React from "react";
import { MainWrap, LoginWrap } from "./Main.styled";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getUser } from "../../../features/users";

const Main = () => {
  const dispatch = useDispatch();
  let [userId, setUserId] = useState("");
  let [userPw, setUserPw] = useState("");

  return (
    <MainWrap>
      <div className="MainTitle">
        <h1>Logins</h1>
      </div>
      <LoginWrap>
        <div className="LoginContainer">
          <label>ID</label>
          <input name="user_id" onChange={(e) => setUserId(e.target.value)} />
          <label>PW</label>
          <input
            type="password"
            name="user_pw"
            onChange={(e) => setUserPw(e.target.value)}
          />
          <button onClick={dispatch(getUser(userId, userPw))}>Login</button>
        </div>
      </LoginWrap>
    </MainWrap>
  );
};

export default Main;
