let init = {
  isLogin: false,
  item: {
    item01: "아이템01",
    item02: "아이템02",
  },
  myitem: [],
};

function reducer(state = init, action) {
  if (action.type == "LOGIN") {
    return { ...state, isLogin: action.payload };
  }

  if (action.type == "LOGOUT") {
    return { ...state, isLogin: action.payload };
  }
  if (action.type == "아이템01") {
    let temp = [...state.myitem];
    temp.push(action.payload);
    return { ...state, myitem: temp };
  }
  if (action.type == "아이템02") {
    let temp = [...state.myitem];

    temp.push(action.payload);
    return { ...state, myitem: temp };
  }

  return { ...state };
}

export default reducer;
