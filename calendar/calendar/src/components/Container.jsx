import React from "react";

function DateArr(Year, Month) {
  let getArr = [];
  let nullArrBefore = [];
  let nullArrAfter = [];
  let getDay = 0;

  // 월의 자리수를 맞추기 위해 1자리 월의 경우 0을 붙여줌
  if (Month < 10) {
    getDay = new Date(`${Year}-0${Month}-01`).getDay();
  } else {
    getDay = new Date(`${Year}-${Month}-01`).getDay();
  }

  // 이번달 일수를 가져옴
  const getArrlength = new Date(Year, Month, 0).getDate();

  // 숫자에 일을 붙여 배열에 저장
  for (let i = 1; i < getArrlength + 1; i++) {
    getArr.push(i + " 일");
  }

  // 앞 부분에 빈공간을 null로 채우기 위해 오늘 요일만큼 null을 채움
  for (let j = 0; j < getDay; j++) {
    nullArrBefore.push(null);
  }

  const Arrlength = 42 - (getArr.length + nullArrBefore.length);

  // 42칸의 배열중 요일수 + null로 채운만큼의 길이를 빼고난 나머지 만큼 null로 채움
  for (let x = 0; x < Arrlength; x++) {
    nullArrAfter.push(null);
  }

  // 앞을 null로 채운뒤 요일을 넣고 남은 공간을 null로 채움
  let Arr = [...nullArrBefore, ...getArr, ...nullArrAfter];

  return Arr.map((e) => (
    <div className="dates">
      <span>{e}</span>
    </div>
  ));
}

const Container = ({ Year, Month }) => {
  return <div className="ContainerWrap">{DateArr(Year, Month)}</div>;
};

export default Container;
