import React, { useReducer } from "react";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const Reducer = () => {
  const init = {
    count: 0,
  };
  // reducer 함수 매개변수로 상태와 액션을 넣어줄 예정
  const reducer = (state, action) => {
    // type
    const { type } = action;
    switch (type) {
      case INCREMENT:
        return { ...state, count: state.count + 1 };
      case DECREMENT:
        return { ...state, count: state.count - 1 };

      default:
        return state;
    }
  };
  // useReducer 함수에 매개변수로 첫번째는 메뉴판 두번째는 초기값을 전달
  const [state, dispatch] = useReducer(reducer, init);
  return (
    <div>
      count : {state.count}{" "}
      <button
        onClick={() => {
          dispatch({ type: INCREMENT });
        }}
      >
        +
      </button>{" "}
      <button
        onClick={() => {
          dispatch({ type: DECREMENT });
        }}
      >
        -
      </button>{" "}
    </div>
  );
};

export default Reducer;
