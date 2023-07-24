import React from "react";
import { Header } from "../components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Main = () => {
  let isLogin = useSelector((state) => state.isLogin);
  return (
    <div>
      <Header name={"Main"} />
      <Link to={"/login"}>LOGIN PAGE</Link> <br />
      {isLogin == false ? null : <Link to={"/mypage"}>MYPAGE</Link>}
      <br />
      {isLogin == false ? null : <Link to={"/product"}>PRODUCT</Link>}
      <br />
    </div>
  );
};

export default Main;
