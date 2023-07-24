import "./App.css";
import { produce } from "immer";
import { add, remove, add2, remove2, temp } from "./features/countSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const num = useSelector((state) => state.count.num);
  const num2 = useSelector((state) => state.count2.num);
  const val = useSelector((state) => state.count2.value);
  // const state = {
  //   value: 0,
  //   arr: [],
  // };
  // const nextState = produce(state, (dra) => {
  //   console.log(dra);
  //   dra.value += 1;
  //   dra.arr.push("a");
  // });

  // 기존 객체를 유지하고 새로운 값을 생성해서 반환
  // 기존 객체
  // console.log("state");
  // console.log(state);
  // 새로운 객체
  // console.log("nextState");
  // console.log(nextState);

  return (
    <div className="App">
      <div>
        num : {num}
        <button onClick={() => dispatch(add())}>add</button>
        <button onClick={() => dispatch(remove())}>minus</button>
      </div>
      <div>
        loading : {val}
        <button onClick={() => dispatch(temp("seoul"))}>
          weather info
        </button>{" "}
        <br />
        num : {num2}
        <button onClick={() => dispatch(add2())}>add</button>
        <button onClick={() => dispatch(remove2())}>minus</button>
      </div>
    </div>
  );
}

export default App;
