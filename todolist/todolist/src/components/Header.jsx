import React, { useState, useEffect } from "react";
import { wifi, battery, magnifying, more } from "../img";
import { Body } from "../components";

function getClock() {
  let getHour = new Date().getHours().toLocaleString();
  let getMin = new Date().getMinutes().toLocaleString();
  if (getMin < 10) {
    getMin = "0" + getMin;
  }

  let getTime = getHour + ":" + getMin;

  return getTime;
}

const Header = () => {
  const [time, setTime] = useState(getClock());

  useEffect(() => {
    setInterval(() => {
      setTime(getClock());
    }, 1000);
  }, []);

  const [list, setList] = useState(["test1", "test2"]);

  useEffect(() => {
    console.log(list);
  }, [list]);

  useEffect(() => {}, [time]);

  return (
    <div className="header">
      <div className="Wrap">
        <div className="headerContainer">
          <div className="headerTop">
            <div className="nowTime">
              <span>{getClock()}</span>
            </div>
            <div className="punch"></div>
            <div className="iconWrap">
              <div className="icon1">
                <div className="icon1_1"></div>
                <div className="icon1_2"></div>
                <div className="icon1_3"></div>
                <div className="icon1_4"></div>
              </div>
              <div className="icon2">
                <img src={wifi} alt="" />
              </div>
              <div className="icon3">
                <img src={battery} alt="" />
              </div>
            </div>
          </div>
          <div className="headerBtm">
            <div className="btmTitle">
              <span>TodoList</span>
            </div>
            <div className="SearchHamber">
              <div className="btmSearch">
                <img src={magnifying} alt="" />
              </div>
              <div className="btmHamber">
                <img src={more} alt="" />
              </div>
            </div>
          </div>
        </div>
        <Body list={list} setList={setList} />
      </div>
    </div>
  );
};

export default Header;
