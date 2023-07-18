import React, { createContext, useContext, useState } from "react";

// useContext : react에서 제공하는 내장 hook으로 전역 상태 관리를 도와주는 함수
// react의 데이터의 흐름은 단방향이기 때문에 자식에게만 props를 전달하기 때문에 불편
// props로 데이터를 넘겨주지 않아도 컴포넌트들이 데이터를 공유 할 수 있도록 해줌

// createContext() 함수를 호출하여 Global 객체 생성
const Global = createContext();

const Context01 = () => {
  return <Context02></Context02>;
};
const Context02 = () => {
  // Global.Provider value로 전달한 값을 받기 위해 useContext() 매개변수로 context 객체를 전달
  const { name, setName } = useContext(Global);
  return (
    <>
      my name is {name}
      <button
        onClick={() => {
          setName("oh");
        }}
      >
        change name
      </button>
    </>
  );
};

const Context = () => {
  // 부모의 상태 변수 선언
  const [name, setName] = useState("o");
  // 부모의 상태 변수를 객체의 키값으로 obj 선언
  const obj = {
    name,
    setName,
  };

  // value : 전역상태를 관리할때 Global.Provider를 최상단 트리로 감싸주고 value에 전달할 데이터를 넣어줌(고정)
  return (
    <Global.Provider value={obj}>
      <Context01></Context01>
    </Global.Provider>
  );
};

export default Context;
