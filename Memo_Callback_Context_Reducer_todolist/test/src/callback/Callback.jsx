import React, { useCallback, useState } from "react";

// 공식문서에 useCallback은 메모이제이션 콜백을 반환

const Callback = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // 첫번째 매개변수 : 콜백함수 전달
  // 두번째 매개변수 : 배열을 전달. 주시하는 값
  // count2의 값이 변하기 전까지 메모이제이션 콜백을 반환
  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, [count2]);

  const handleCount2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  return (
    <div>
      <div>
        <h1>first count : {count}</h1>
        <button onClick={handleCount}>count</button>
      </div>
      <div>
        <h1>second count : {count2}</h1>
        <button onClick={handleCount2}>count2</button>
      </div>
    </div>
  );
};

export default Callback;
