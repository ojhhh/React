import React, { useState, useEffect } from "react";

function getMonth(months) {
  let month = new Date().getMonth() + 1;
  return months[month];
}

function getDays(days) {
  return days.map((e, i) => (
    <div className="day">
      <span>{Object.values(e)}</span>
    </div>
  ));
}
function getToday() {
  let dayTemp = [];
  console.log(new Date().getDate());
  console.log(new Date().getDay());
}
getToday();
const Body = () => {
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
    { 5: "S" },
  ]);

  return (
    <div>
      <div className="bodyStart">
        <div className="months">
          <div className="month">
            <span>{getMonth(months)}</span>
          </div>
        </div>
        <div className="days">{getDays(days)}</div>
      </div>
    </div>
  );
};

export default Body;
