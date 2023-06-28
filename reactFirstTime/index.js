// react : 페이스북에서 2011년도 쯤에 만듬. 개발자들 사이에서 라이브러리다 프레임워크다 말이 많지만 공식홈페이지에서는 라이브러리라고 칭함

// 라이브러리와 프레임워크의 차이 : 폴더의 구조 유무

// 패키지 설치 가능
// 리액트는 초기 세팅을 받아 사용 할 수 있음
// 메타에서 react, react-router 개발

// 리액트를 프레임워크라 부르는 이유
// 메타에서 라이브러리를 개발하고 npx creat-react-app [폴더명] 구문으로 패키지를 제공하여 react를 개발할때 권장 개발환경을 구성해줌
// react 프로젝트를 설정해서 사용하기 떄문에 블로그나 개발자들 사이에서 프레임워크라고 칭하기도 함

// 리액트는 자바스크립트를 활용해서 HTML을 조작함 (DOM)
// 리액트는 가상 DOM을 사용해서 변경된 부분만 다시 그림(업데이트)
// 일반적인 HTML은 변경된 부분만 업데이트 하지않고 전체 페이지를 다시 그려주는데 리액트는 가상 DOM은 메모리에 남아있고 실제 페이지의 DOM은 분리 되어 있는 상태
// 리액트의 상태가 변하면 새 가상 DOM이 생성되고 이전 상태의 가상 DOM과 비교해서 업데이트해야할 부분을 찾고 실제 DOM에 업데이트해주기 때문에 효율적인 업데이트가 가능

// 리액트를 사용하는 이유
// 리액트의 부분렌더링
// 리액트는 view 중심 보여주는것에 집중된 라이브러리

// CSR : Client Side Render
// SPA(Single Page Application)을 만들기 위해 사용
// SPA : 하나의 페이지에서 내용을 바꿔서 보여주어 페이지가 전환된것 처럼 보이게 함
