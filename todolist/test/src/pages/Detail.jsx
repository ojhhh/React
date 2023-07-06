import React from "react";
import { Body, Header } from "../components";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

// useLocation : hook 함수 현재 브라우저의 url 위치 값을 가져오는데 사용

// useParams : hook 함수 urldp params값을 접근하는데 사용 객체의 형태로 가져옴

// useSearchParams : hook 함수 url의 쿼리 값을 가져올떄 사용 문자열을 해석해서 쿼리 매개변수의 값을 가져옴

const Detail = ({ login }) => {
  let temp = [
    { num: 10, name: "shirt" },
    { num: 20, name: "pant" },
    { num: 30, name: "hat" },
    { num: 40, name: "glove" },
  ];
  const location = useLocation();
  console.log(location);
  const params = useParams();

  console.log(params);
  const [query, setQuery] = useSearchParams();

  // query.get() : 쿼리문의 키로 값을 가져옴
  console.log(query.get("id"));

  return (
    <div>
      <Header name={"login"}></Header>
      <div>{temp && temp[params.id].num}</div>
      <div>name {temp && temp[params.id].num}</div>
    </div>
  );
};

export default Detail;
