import React from "react";
import { useDispatch } from "react-redux";

// 전역상태에 있는 값을 업데이트
// useDispatch 액션을 보낼 수 있게 react hook 함수를 사용
const Count = () => {
  const dispatch = useDispatch();
  // dispatch 함수를 사용하여 매개변수로 객체를 전달
  // 객체의 규칙 : {type, payload}
  // type : 동작 시킬 행동의 이름
  // payload : 선택사항. 상태를 변경할 때 데이터 전달이 필요하면 사용 없어도됨. 키값만 전달됨

  const handlerAdd = () => dispatch({ type: "김치볶음밥" });
  const handlerRemove = () => dispatch({ type: "계란볶음밥" });
  return (
    <div>
      <button onClick={handlerAdd}>김치볶음밥</button>
      <button onClick={handlerRemove}>계란볶음밥</button>
    </div>
  );
};

export default Count;
