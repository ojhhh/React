import React from "react";
import { Header } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  let isLogin = useSelector((state) => state.isLogin);

  const loginHandler = () => {
    if (isLogin) {
      dispatch({ type: "LOGOUT", payload: false });
    } else {
      dispatch({ type: "LOGIN", payload: true });
    }
  };

  return (
    <div>
      <Header name={"Login"} />
      <button onClick={loginHandler}>{isLogin ? "Logout" : "Login"}</button>
      <Link to="/">MAIN PAGE</Link>
    </div>
  );
};

export default Login;
