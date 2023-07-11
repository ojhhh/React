// 함수를 반환
function login(id, pw) {
  return (dispatch) => {
    // 데이터베이스 응답 요청이 일어나는 부분

    dispatch({ type: "LOGIN", payload: { id, pw } });
  };
}

function logout() {
  return (dispatch) => {
    dispatch({ type: "LOGOUT" });
  };
}

export const logins = { login, logout };
