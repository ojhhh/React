import React, { useMemo, useState } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleCount = () => {
    console.log("count");
    setCount(count + 1);
  };

  // 컴포넌트의 리렌더링을 관리
  // count2를 주시하고 있다가 값이 변하면 업데이트
  const handleCount2 = useMemo(() => {
    console.log("count2");
    return count2 + 1;
  }, [count2]);

  return (
    <div>
      <p>memo</p>
      <button onClick={handleCount}>+</button>
      {/* +를 누르면 리렌더링 되기 때문에 handleCount2()를 계속 실행하게됨 */}
      <p>handleCount2 : {handleCount2}</p>
    </div>
  );
};

export default Memo;
