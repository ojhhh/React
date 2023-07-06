import React from "react";
import { Body, Header } from "../components";

const Main = ({ login }) => {
  return (
    <div>
      <Header name={"main"}></Header>
      <Body path={"/shop"} name={"shop"} login={login} />
      <Body path={"/login"} name={"login"} login={login} />
      <Body path={"/mypage"} name={"mypage"} login={login} />
    </div>
  );
};

export default Main;
