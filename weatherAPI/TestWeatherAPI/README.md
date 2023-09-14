## API 가져오기

- api를 가져와 스토어의 상태값을 바꿀때 비동기 처리를 하기위해 미들웨어 추가

## style component

- npm install styled-components
- 스타일에 관련되어 props로 값을 전달하여 스타일 값을 적용
- 클래스명이 겹치지 않음

## redux-thunk

- api를 요청하고 처리가 된 뒤에 상태를 업데이트하기 위해 dispatch를 지연시키는 함수
- actions라는 함수를 만들어 사용
- dispatch 함수를 실행할때 매개변수로 객체를 넘기느냐 함수를 넘기느냐의 차이
- Action Createors 함수는 함수를 반환

### redux-thunk 미들웨어로 추가하는 방법

- npm install redux-thunk

- 날씨 api 사용 openweathermap.org

## project build

- 개발 환경에선 npm start를 사용
- 배포 하기 위해선 빌드된 파일이 있어야함
- npm run build
