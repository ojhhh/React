import React from "react";
import { Days } from "../components";

export default function Month({ months, days, date }) {
  let month = new Date().getMonth() + 1;
  return (
    <>
      <div className="months">
        <div className="month">
          <span>{months[month]}</span>
        </div>
      </div>
      <Days days={days} date={date} />
    </>
  );
}
