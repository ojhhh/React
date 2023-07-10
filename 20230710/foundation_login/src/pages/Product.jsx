import React from "react";
import { Header } from "../components";
import { useDispatch, useSelector } from "react-redux";

function itemFunction(items) {
  console.log(items);
  let list = [];

  for (let i in items) {
    list.push(items[i]);
  }

  return (
    <div>
      {list.map((e) => (
        <div>{e}</div>
      ))}
    </div>
  );
}

const Product = () => {
  let isLogin = useSelector((state) => state.isLogin);
  const items = useSelector((state) => state.item);

  return (
    <div>
      <Header name={"Product"} />
      {itemFunction(items)}
    </div>
  );
};

export default Product;
