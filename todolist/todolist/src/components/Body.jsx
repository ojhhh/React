import React, { useState, useEffect } from "react";
import { Month } from "../components";

function Lists(list) {
  return (
    <ul>
      {list.map((e) => (
        <li>
          <input type="checkbox" />
          {e}
        </li>
      ))}
    </ul>
  );
}

function inputText(list, setList) {
  const addlist = () => {
    let newArr = [...list];
    const msg = document.querySelector("#msg");
    newArr.push(msg.value);

    msg.value = "";
    setList(newArr);
  };

  return (
    <div className="inputArea">
      <input text="text" id="msg" />
      <div id="inputbtn" onClick={addlist}></div>
    </div>
  );
}

const Body = ({ list, setList }) => {
  const [months, setMonths] = useState({
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sept",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  });

  const [days, setDays] = useState([
    { 0: "S" },
    { 1: "M" },
    { 2: "T" },
    { 3: "W" },
    { 4: "T" },
    { 5: "F" },
    { 6: "S" },
  ]);

  const [date, setDate] = useState({
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
  });
  //
  return (
    <div>
      <div className="bodyStart">
        <Month months={months} days={days} date={date} />
        <div className="listContainer">{Lists(list)}</div>
        <div>{inputText(list, setList)}</div>
      </div>
    </div>
  );
};

export default Body;
