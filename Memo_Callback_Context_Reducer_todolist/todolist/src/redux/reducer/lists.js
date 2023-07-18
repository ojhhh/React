let init = { todolist: [["here?"]] };

const reducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADDLIST":
      let temp = [...state.todolist];
      temp.push(payload);
      return { ...state, todolist: temp };

    default:
      return state;
  }
};

export default reducer;
