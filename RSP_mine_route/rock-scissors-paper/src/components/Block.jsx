import React from "react";

const Block = ({ data, name, result }) => {
  // 똑같은 result를 사용하기 떄문에 player의 승패 결과값을 computer와 공유함
  let temp = "";
  if (name === "player") {
    temp = result;
  } else {
    temp = result === "draw" ? "draw" : result === "win" ? "defaet" : "win";
  }
  return (
    <div className="block">
      <div>{name}</div>
      {/*data && data.img -> 조건부 렌더링. 값이 없으면 터지기 떄문에 조건부 렌더링을 사용  */}
      <img src={data && data.img} alt="" />
      <div>{temp}</div>
    </div>
  );
};

export default Block;
