import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logins } from "../../../middleware";
import { LoginBoxWrap, LoginBoxInput } from "./Login.styled";

const LoginBox = () => {
  const dispatch = useDispatch();
  // 계정과 패스워드를 담을 상태값 선언
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  // Redux에 있는 상태값을 가져옴
  const isLogin = useSelector((state) => state.Login.isLogin);
  const userName = useSelector((state) => state.Login.id);

  const login = () => {
    dispatch(logins.login(id, pw));
  };

  const logout = () => {
    dispatch(logins.logout());
  };

  return (
    <div>
      <LoginBoxWrap width={"500px"}>
        <p className="login-title">login box</p>
        <label>id</label>
        <input
          onChange={(e) => {
            setId(e.target.value);
          }}
        ></input>
        <label>pw</label>
        <input
          onChange={(e) => {
            setPw(e.target.value);
          }}
        ></input>
        <LoginBoxInput onClick={login}>login</LoginBoxInput>
        <div>login?</div>
        {isLogin ? (
          <>
            {userName} login<button onClick={logout}>LOGOUT</button>
          </>
        ) : (
          <>not login</>
        )}
      </LoginBoxWrap>
    </div>
  );
};

export default LoginBox;
