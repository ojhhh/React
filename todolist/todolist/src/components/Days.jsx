import React from "react";
import { Today } from "../components";

export default function Days({ days, date }) {
  const today = new Date().getDay();
  return (
    <div className="days">
      {days.map((e, i) => (
        <div className="day">
          {today == Object.keys(e) ? (
            <span className="nowdate">{Object.values(e)}</span>
          ) : (
            <span>{Object.values(e)}</span>
          )}
        </div>
      ))}
      <Today date={date} />
    </div>
  );
}
