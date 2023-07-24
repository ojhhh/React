import React from "react";
import { Header } from "../components";
import { useSelector } from "react-redux";

function buylists(buylist) {
  return (
    <div>
      {" "}
      구매항목
      {buylist.map((e) => (
        <div>{e}</div>
      ))}
    </div>
  );
}

const Mypage = () => {
  const buylist = useSelector((state) => state.myitem);
  return (
    <div>
      <Header name={"Mypage"} />
      {buylist.length == 0 ? null : buylists(buylist)}
    </div>
  );
};

export default Mypage;
