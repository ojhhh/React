import React from "react";
import { Body, Header } from "../components";

const Login = ({ login, setLogin }) => {
  return (
    <div>
      <Header name={"login"}></Header>
      <button
        onClick={() => {
          setLogin(!login);
        }}
      >
        login/loginout
      </button>
      <Body path={"/"} name={"main"} login={login}></Body>
    </div>
  );
};

export default Login;
