import React from "react";
import { Body, Header } from "../components";

const MyPage = ({ login }) => {
  return (
    <div>
      <Header name={"detail"} login={login}></Header>
    </div>
  );
};

export default MyPage;
