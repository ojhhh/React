import React, { useContext, useEffect } from "react";
import { MainWrap, LoginWrap } from "./Main.styled";
import { useState } from "react";
import { getUser } from "../../../features/users";
import Global from "../../../Global";

const Main = () => {
  const { dispatch, nav } = useContext(Global);
  let [user_id, setUser_id] = useState("");
  let [user_pw, setUser_pw] = useState("");

  useEffect(() => {
    console.log(user_pw);
  }, [user_pw]);

  return (
    <MainWrap>
      <div className="MainTitle">
        <h1>Logins</h1>
      </div>
      <LoginWrap>
        <div className="LoginContainer">
          <label>ID</label>
          <input name="user_id" onChange={(e) => setUser_id(e.target.value)} />
          <label>PW</label>
          <input
            type="password"
            name="user_pw"
            onChange={(e) => setUser_pw(e.target.value)}
          />
          <button onClick={() => dispatch(getUser({ user_id, user_pw }))}>
            Login
          </button>
          <button onClick={() => nav("/signup")}>SignUp</button>
        </div>
      </LoginWrap>
    </MainWrap>
  );
};

export default Main;
