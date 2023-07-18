// 메모이제이션 기법

// 동일한 연산을 할때 이전에 연산된 값을 메모리에 저장하여 동일한 연산을 줄이는 기법
// 실행속도가 빨라짐

let momo = {};

function Memo(m) {
  let result;
  // memo 객체에 키값이 있는지 확인
  // memo 객체에 "a" 값이 있다고 했을때 매개변수로 "a"를 받을 경우 true를 반환
  if (m in memo) {
    // 동일 작업은 연산을 하지 않음
    result = memo[m];
  } else {
    result = str(m);
    memo[m] = result;
  }

  return result;
}

function str(m) {
  return `${m}`;
}
