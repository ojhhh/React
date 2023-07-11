import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { weather, logins } from "./middleware";
import { useEffect, useState } from "react";

function App() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  // reducer를 여러개 사용한 경우 전역 상태에서 사용할떄 객체의 키값으로 리듀서 키값을 사용
  const isLogin = useSelector((state) => state.Login.isLogin);
  const userName = useSelector((state) => state.Login.id);
  const weatherData = useSelector((state) => state.weather.weatherData);

  const login = () => {
    dispatch(logins.login(id, pw));
  };

  const logout = () => {
    dispatch(logins.logout());
  };

  const getWeather = () => {
    dispatch(weather.getWeather(name));
  };

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);
  useEffect(() => {
    console.log(isLogin);
    console.log(userName);
  }, [isLogin, userName]);
  useEffect(() => {
    console.log(id, pw);
  }, [id, pw]);

  return (
    <div className="App">
      {/* <LoginBox /> */}
      <label>city name</label>
      <br />
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>{" "}
      <br />
      <button onClick={getWeather}>search weather</button>
      <div>
        city : {weatherData && weatherData.data?.name}, weather :{" "}
        {weatherData && weatherData.data?.weather[0]?.main}
      </div>
      <br />
      <label>id</label>
      <br />
      <input
        onChange={(e) => {
          setId(e.target.value);
        }}
      ></input>
      <br />
      <label>pw</label>
      <br />
      <input
        onChange={(e) => {
          setPw(e.target.value);
        }}
      ></input>
      <br />
      <button onClick={login}>login</button>
      <div>login?</div>
      {isLogin ? (
        <>
          {userName} login<button onClick={logout}>LOGOUT</button>
        </>
      ) : (
        <>not login</>
      )}
    </div>
  );
}

export default App;
