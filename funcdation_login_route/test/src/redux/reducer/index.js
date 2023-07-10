// Reducer 함수

// 초기상태가 필요
let init = {
  count: 0,
  isLogin: false,
  userState: {
    userName: "",
    userAge: 1,
  },
};

// 첫번째 매개변수 초기값, 두번째는 전달인자를 받을 매개변수
export default function reducer(state = init, action) {
  console.log(action);
  switch (action.type) {
    case "김치볶음밥":
      // 리듀서 함수의 반환값으로 저장소를 최신화
      // 리듀서에서 반환된 값을 비교하는게 아니라 주소를 비교하기 때문에 값이 변해도 모름
      // 주소를 바꾸기 위해 스프레드 연산자를 사용
      return { ...state, count: state.count + 1 };
    case "계란볶음밥":
      return { ...state, count: state.count - 1 };

    case "LOGIN":
      return { ...state, isLogin: action.payload };
    case "LOGOUT":
      return { ...state, isLogin: action.payload };

    default:
      // 반환값이 무조건 있어야함
      return { ...state };
  }
}
