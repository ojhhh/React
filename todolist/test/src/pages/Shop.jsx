import React from "react";
import { Body, Header } from "../components";

const Shop = ({ login }) => {
  return (
    <div>
      <Header name={"shop"}></Header>

      <Body name={"main"} path={"/"} login={login} />
      <Body name={"detail"} path={"/detail"} login={login} />

      <Body
        name={"product 1"}
        path={"/detail/1/10/shirt"}
        item={{ id: 0, num: 10, name: "shirt" }}
      />
      <Body
        name={"product 2"}
        path={"/detail/2/20/pant"}
        item={{ id: 1, num: 20, name: "pant" }}
      />
      <Body
        name={"product 3"}
        path={"/detail/3/30/hat"}
        item={{ id: 2, num: 30, name: "hat" }}
      />
      <Body
        name={"product 4"}
        path={"/detail/4/40/glove"}
        item={{ id: 3, num: 40, name: "glove" }}
      />
    </div>
  );
};

export default Shop;
