import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      Main
      <Link to={"/shop"}>shop</Link>
    </div>
  );
};

export default Main;
