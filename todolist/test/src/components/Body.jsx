import React from "react";
import { Link, useNavigate } from "react-router-dom";

// 리액트에서 Link는 html에 a태그와 같은 역활
// 페이지가 새로고침되지않고 url만 변경
const Body = ({ path, name, login, item }) => {
  // useNavigate() : 페이지 전환에 사용되는 react Hook 함수
  const nav = useNavigate();

  return (
    <div className="body">
      <Link to={path}>{name} page</Link>
      <button
        onClick={() => {
          nav(path);
        }}
      >
        {name} page
      </button>
      {item && item.id ? <div>ID : {item.id}</div> : null}
      {item && item.num ? <div>NUM : {item.num}</div> : null}
      {item && item.name ? <div>NAME : {item.name}</div> : null}
      {login ? <div>login</div> : <div>not login</div>}
    </div>
  );
};

export default Body;
