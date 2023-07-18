import { useReducer, useContext } from "react";
import Global from "../../Global";

const Reducer = () => {
  let init = { todolist: ["Brushing teeth"] };
  const reducer = (state = init, action) => {
    const { type, payload } = action;
    // console.log(payload);
    switch (type) {
      case "ADDLIST":
        let temp = [...state.todolist];
        temp.push(payload);
        // console.log(temp);
        return { ...state, todolist: temp };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, init);
  // const { inputText, setIntputText } = useContext(Global);
  // return (
  //   <button
  //     onClick={() => {
  //       dispatch({ type: "ADDLIST", payload: inputText });
  //     }}
  //   >
  //     Update
  //   </button>
  // );

  return { init, reducer };
};

export default Reducer;
