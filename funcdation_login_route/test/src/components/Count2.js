import React from "react";
import { useDispatch } from "react-redux";

const Count2 = () => {
  const dispatch = useDispatch();

  // 상태 패턴을 관리할 때 대문자로 쓰는게 규칙
  const handlerLogin = () => {
    dispatch({ type: "LOGIN", payload: true });
  };

  const handlerLogout = () => {
    dispatch({ type: "LOGOUT", payload: false });
  };

  return (
    <div>
      <button onClick={handlerLogin}>login</button>
      <button onClick={handlerLogout}>logout</button>
    </div>
  );
};

export default Count2;
