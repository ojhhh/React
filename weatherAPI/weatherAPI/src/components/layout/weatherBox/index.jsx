import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { weather } from "../../../middleware";
import { WeatherWrap } from "./weather.styled";

const WeatherBox = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const weatherData = useSelector((state) => state.weather.weatherData);

  const getWeather = () => {
    dispatch(weather.getWeather(name));
  };

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  return (
    <WeatherWrap>
      <div className="weatherTop">
        <label>city name : </label>

        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>

        <button onClick={() => getWeather()}>search weather</button>
      </div>

      <div className="weatherBottom">
        <span> city : {weatherData && weatherData.data?.name}</span>
        <span>
          {" "}
          weather :{weatherData && weatherData.data?.weather[0]?.main}{" "}
        </span>
      </div>
    </WeatherWrap>
  );
};

export default WeatherBox;
