import React from "react";
import { useSelector } from "react-redux";
import CountView2 from "./CountView2";

// 저장소 값 가져오기
const CountView = () => {
  // useSelecter : 전역 상태값을 조회 할때 사용
  // 상태에서 count를 반환. count가 변경되었을때 리렌더링 됨
  const count = useSelector((state) => state.count);
  return (
    <div>
      {count}
      <CountView2></CountView2>
    </div>
  );
};

export default CountView;
