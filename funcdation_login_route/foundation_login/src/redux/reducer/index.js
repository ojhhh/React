let init = {
  isLogin: false,
  item: {
    item01: "아이템01",
    item02: "아이템02",
  },
};

function reducer(state = init, action) {
  if (action.type == "LOGIN") {
    return { ...state, isLogin: action.payload };
  }

  if (action.type == "LOGOUT") {
    return { ...state, isLogin: action.payload };
  }
  return { ...state };
}

export default reducer;
