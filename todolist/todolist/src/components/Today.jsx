import React from "react";

export default function Today({ date }) {
  const todate = new Date().getDate();
  const today = new Date().getDay();

  for (let key in date) {
    if (key == today) {
      switch (today) {
        case 0:
          date[parseInt(key)] = todate;
          date[parseInt(key) + 1] = todate + 1;
          date[parseInt(key) + 2] = todate + 2;
          date[parseInt(key) + 3] = todate + 3;
          date[parseInt(key) + 4] = todate + 4;
          date[parseInt(key) + 5] = todate + 5;
          date[parseInt(key) + 6] = todate + 6;
          break;
        case 1:
          date[parseInt(key) - 1] = todate - 1;
          date[parseInt(key)] = todate;
          date[parseInt(key) + 1] = todate + 1;
          date[parseInt(key) + 2] = todate + 2;
          date[parseInt(key) + 3] = todate + 3;
          date[parseInt(key) + 4] = todate + 4;
          date[parseInt(key) + 5] = todate + 5;
          break;
        case 2:
          date[parseInt(key) - 2] = todate - 2;
          date[parseInt(key) - 1] = todate - 1;
          date[parseInt(key)] = todate;
          date[parseInt(key) + 1] = todate + 1;
          date[parseInt(key) + 2] = todate + 2;
          date[parseInt(key) + 3] = todate + 3;
          date[parseInt(key) + 4] = todate + 4;
          break;
        case 3:
          date[parseInt(key) - 3] = todate - 3;
          date[parseInt(key) - 2] = todate - 2;
          date[parseInt(key) - 1] = todate - 1;
          date[parseInt(key)] = todate;
          date[parseInt(key) + 1] = todate + 1;
          date[parseInt(key) + 2] = todate + 2;
          date[parseInt(key) + 3] = todate + 3;
          break;
        case 4:
          date[parseInt(key) - 4] = todate - 4;
          date[parseInt(key) - 3] = todate - 3;
          date[parseInt(key) - 2] = todate - 2;
          date[parseInt(key) - 1] = todate - 1;
          date[parseInt(key)] = todate;
          date[parseInt(key) + 1] = todate + 1;
          date[parseInt(key) + 2] = todate + 2;
          break;
        case 5:
          date[parseInt(key) - 5] = todate - 5;
          date[parseInt(key) - 4] = todate - 4;
          date[parseInt(key) - 3] = todate - 3;
          date[parseInt(key) - 2] = todate - 2;
          date[parseInt(key) - 1] = todate - 1;
          date[parseInt(key)] = todate;
          date[parseInt(key) + 1] = todate + 1;
          break;
        case 6:
          date[parseInt(key) - 6] = todate - 6;
          date[parseInt(key) - 5] = todate - 5;
          date[parseInt(key) - 4] = todate - 4;
          date[parseInt(key) - 3] = todate - 3;
          date[parseInt(key) - 2] = todate - 2;
          date[parseInt(key) - 1] = todate - 1;
          date[parseInt(key)] = todate;
          break;
      }
    }
  }

  return Object.values(date).map((e) => (
    <>
      {todate == e ? (
        <div className="nowday">
          <span className="nowdate">{e}</span>{" "}
        </div>
      ) : (
        <div className="day">
          <span>{e}</span>
        </div>
      )}
    </>
  ));
}
