import React from "react";
import { LoginBoxWrap, LoginBoxInput } from "./Login.styled";

const LoginBox = () => {
  return (
    <div>
      <LoginBoxWrap width={"500px"}>
        <p className="login-title">login box</p>
        <LoginBoxInput>button</LoginBoxInput>
      </LoginBoxWrap>
    </div>
  );
};

export default LoginBox;
