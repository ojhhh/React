import { useReducer, useContext } from "react";

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

  return { init, reducer };
};

export default Reducer;
