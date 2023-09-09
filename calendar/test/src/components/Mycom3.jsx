// 함수형 컴포넌트

// ex7 react/redux
// rcc 하고 자동완성 했을떄
// import React, { Component } from "react";

// export default class Mycom3 extends Component {
//   render() {
//     return <div>Mycom3</div>;
//   }
// }

// rafce 하고 자동완성 했을때
import React, { useEffect, useState } from "react";

// 함수형 컴포넌트에서 state와 props의 관리방법
// react hook useState, useEffect
// useState : 상태값을 수정할때 사용할 메소드를 만들어줌
// useEffect 라이프사이클을 지원

// 함수형 컴포넌트의 props 값은 매개변수로 전달
// 구조분해할당으로 사용가능
const Mycom3 = ({ newNum, newNum2, newNum3 }) => {
  console.log(newNum, newNum2, newNum3);
  let count = 0;
  // useState : 첫번째 반환값이 상태변수, 두번째 값은 상태변수를 업데이트할 setState 함수
  // useState : 매개변수로 전달한 값이 초기값
  const [num, setNum] = useState(0);
  const [active, setActive] = useState(false);
  // useEffect : 첫번째 매개변수 함수 전달, 두번째 매개변수 배열을 전달
  // 첫번째로 전달한 함수를 두번째 매개변수의 상태를 확인하고 실행
  // [] 빈 배열을 전달 한 경우 componentDidMount 출력
  // [num] : 배열에 전달된 값이 수정될 경우 componentDidMount, componentDidUpdate 출력
  // [active] 배열에 전달한 값만 주시 num이 변화하면 [num] 만 실행 active가 변화하면 [active]만 실행
  // 여러개의 값을 주시하려면 [num, active] 이런식으로 작성
  useEffect(() => {
    console.log("componentDidMount");
  }, []);
  useEffect(() => {
    console.log("componentDidMount, componentDidUpdate");
    // componentDidUpdate 부분에 num을 찍으면 바로 변경된 값을 출력할 수 있음
    console.log("num", num);
  }, [num]);

  useEffect(() => {
    console.log("active");
  }, [active]);

  useEffect(() => {
    console.log("num or active exchange");
  }, [num, active]);

  // 상태를 값으로 사용하는 이유
  // 이전의 상태값이 보관되어 상태값이 계속 유지가 되는데
  function clickhandler() {
    console.log("click");
    setNum(num + 1);
    count++;
    // 예상하기론 count가 1씩 증가 할거 같았는데 계속 1로 찍힘
    // 한번 실행할때마다 리렌더링 되기 때문에 위에서 count가 0으로 초기화됨
    console.log("count", count);
    // 처음 실행 때 num은 1로 출력될거 같지만 0으로 출력됨
    // 상태값을 수정하고 바로 사용하면 안됨
    // console.log("num", num);
  }

  function activehandler() {
    setActive(!active);
  }
  return (
    <div>
      <span>num : {num}</span>
      <br />
      <button onClick={clickhandler}>click</button>
      <button onClick={activehandler}>active</button>
    </div>
  );
};

export default Mycom3;
