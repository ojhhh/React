import { Component } from "react";

// 클래스형 컴포넌트
class Mycom extends Component {
  // 구조는 같은데 내용이 다른 경우 props로 값을 받아 그려줌
  constructor(props) {
    super(props);
    // super : 부모의 생성자 함수를 호출 해줘야 this 사용 가능
    // this
    this.state = {
      num: 0,
    };
  }

  // 컴포넌트가 초기 생성
  // constructor -> render -> componentDidMount 순서로 실행됨
  componentDidMount() {
    console.log("create");
  }

  // 컴포넌트의 상태가 변화
  componentDidUpdate() {
    console.log(this.props.name + "state change");
  }

  render() {
    return (
      <div className={"com " + this.props.Cname}>
        {this.props.name}
        <button
          onClick={() => {
            this.setState({ ...this.state, num: this.state.num + 1 });
            console.log(this.state.num);
          }}
        >
          state change
        </button>
      </div>
    );
  }
}

class Mycom2 extends Component {
  render() {
    return <div>hi im component2</div>;
  }
}

// 다수의 컴포넌트를 내보낼경우
export { Mycom, Mycom2 };
