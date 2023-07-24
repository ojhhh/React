import React from "react";
import { Header } from "../components";
import { useDispatch, useSelector } from "react-redux";

function itemFunction(dispatch, items) {
  let list = [];

  for (let i in items) {
    list.push(items[i]);
  }

  const itemHandler = (index) => {
    dispatch({ type: list[index], payload: list[index] });
  };

  return (
    <div>
      {list.map((e, i) => (
        <>
          <div className={i}>{e}</div>
          <button
            onClick={() => {
              itemHandler(i);
            }}
          >
            {e}구매
          </button>
        </>
      ))}
    </div>
  );
}

const Product = () => {
  const dispatch = useDispatch();

  let isLogin = useSelector((state) => state.isLogin);
  const items = useSelector((state) => state.item);

  return (
    <div>
      <Header name={"Product"} />
      {itemFunction(dispatch, items)}
    </div>
  );
};

export default Product;
