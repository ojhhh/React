import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { weather, logins } from "./middleware";
import { useEffect, useState } from "react";
import { LoginBox, WeatherBox } from "./components/layout";

function App() {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");

  // reducer를 여러개 사용한 경우 전역 상태에서 사용할떄 객체의 키값으로 리듀서 키값을 사용
  const isLogin = useSelector((state) => state.Login.isLogin);
  const userName = useSelector((state) => state.Login.id);

  const login = () => {
    dispatch(logins.login(id, pw));
  };

  const logout = () => {
    dispatch(logins.logout());
  };

  // const getWeather = () => {
  //   dispatch(weather.getWeather(name));
  // };

  // useEffect(() => {
  //   console.log(weatherData);
  // }, [weatherData]);
  useEffect(() => {
    console.log(isLogin);
    console.log(userName);
  }, [isLogin, userName]);
  useEffect(() => {
    console.log(id, pw);
  }, [id, pw]);

  return (
    <div className="App">
      {/* <WeatherBox /> */}
      <WeatherBox></WeatherBox>
      {/*  */}
      <LoginBox></LoginBox>
    </div>
  );
}

export default App;
