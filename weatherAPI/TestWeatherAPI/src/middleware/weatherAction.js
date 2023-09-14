// axios를 활용하여 요청에 대한 응답 처리
import axios from "axios";

function getWeather(name) {
  return async (dispatch) => {
    const data = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=a74b0406ea7cf1f5aaf2298809cdef51`
    );
    dispatch({ type: "GET_WEATHER", payload: data });
  };
}

export const weather = { getWeather };
