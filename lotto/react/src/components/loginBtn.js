// es6 문법 사용

// 예전 require로 불러오던 문법이 import로 바뀜
class LoginBtn extends React.Component {
  constructor(props) {
    // 부모의 생성자 호출
    super(props);
    this.state = {
      isLogin: false,
    };
  }
  render() {
    return (
      <button
        onClick={() => {
          this.setState({ isLogin: !this.state.isLogin });
        }}
      >
        {this.state.isLogin ? "Logout" : "Login"}
      </button>
    );
  }
}

console.log("test");

// 내보내기
// component가 여러개일 경우 객체로 보냄
// export { LoginBtn };
// 하나의 component 만 내보낼 경우
export default LoginBtn;
