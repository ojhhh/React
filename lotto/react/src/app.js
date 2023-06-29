// 구조분해할당으로 받을 경우 키를 맞춰줘야함
// import {LoginBtn} from "./components/loginBtn"

// 하나만 받아올 경우 변수명 정하듯 사용할 수 있음
import Login from "./components/loginBtn";

// root 요소 가상 DOM으로 생성
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Login />);
