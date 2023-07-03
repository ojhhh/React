// babel

// javascript 코드의 변환을 도와주는 도구
// 자바스크립트를 컴파일 해주는 도구

// ES6 문법이 개발되고 ES5에서 쓰던 문법들을 모두 변환하기 힘들어서 babel 문법 사용

// 모듈 시스템

// ES6
// a.js
// const text = "hi";
// 내보내는 방법
// 여러개를 내보낼 경우 : export {text};
// 단일로 내보낼 경우 : export default text;

// b.js
// 불러오는 방법
// 여러개 받아올 경우 : import {text} from "a.js"
// 하나만 받아올 경우 : import text2 from "a.js"
// 하나만 받아올 경우 원하는 이름으로 바꿔서 사용할 수 있음
// console.log(text);

// babel basic usage

// babel은 기본적으로 자바스크립트로 구성
// npm 을 통해 설치 가능

// 1. babel 기본 구성 설치
// npm init -y
// npm install @babel/core @babel/cli @babel/preset-env

// 2. babel 환경 구성
// .babelrc 파일 생성
// rc : Run Commands, Run Controll 등의 의미

/*
  json으로 설정
  {
    "presets" : ["@babel/preset-env"]
  }
*/

// 3. babel 실행
// npx babel [변환할 파일 명] --out-file [내보낼 경로]
// npx babel app.js --out-file dist/app.js

// 4. babel02 폴더 만들기
// npm init -y
// npm install @babel/core @babel/cli
// npm install @babel/plugin-transform-modules-commonjs

/*
{
  // babel 설정
  "plugins": ["@babel/plugin-transform-modules-commonjs"]
}
*/

// 5. bable03 폴더 만들기
// JSX 문법 컴파일
// npm init -y
// npm install @babel/core @babel/cli
// npm install @babel/preset-react

// webpack
// 모듈 번들러. 여러파일을 하나의 파일로 구성
// babel 코드 자체를 변환할때 사용

// 모듈
// 프로그램을 구성할 떄 구성 요소로 관련된 데이터나 함수를 하나로 묶은 단위

// 번들러
// 의존성을 가지고 동작하는 모듈 코드를 하나의 파일로 만들어 주는 것

// webpack
// entry : 진입점. 지정 시작점으로 사용할 모듈을 webpack에 알려줌
// output : 내보내는 번들링 방법을 결정 생성한 번들링 파일의 위치, 이름
// loaders : 번들링 중에 모듈의 소스코드에 적용되는 자바 스크립트나 css 이미지 파일을 처리
// plugins : 추가 기능 사용시 번들 최적화 html 파일 생성이나 환경변수 삽입 등

// babel 속성
// presets, plugins

// webpack01

// webpack 기본 사용
// install package
// npm init -y
// npm install webpack webpack-cli

// 프로젝트 생성
// src 폴더 생성 후 번들링 진행

// webpack의 설정 파일
// webpack.config.js
// npx webpack

// webpack02

// loaders 속성 사용
// 다양한 유형의 파일을 모듈화
// CSS, Image 등을 번들링

// npm init -y
// npm install webpack webpack-cli css-loader style-loader

// src 폴더에 Index.css, index.js 생성

// webpack.config.js 추가

// webpack03

// webpack plugin을 사용하여 html 파일 생성

// npm init -y
// npm install webpack webpack-cli html-webpack-plugin

// babel 설정
// npm install @babel/preset-env @babel/preset-react
// npm install @babel/core babel-loader
// .babelrc
/*
  {
    "presets" : ["@babel/preset-env","@babel/preset-react"]
  }
*/
// react, react-dom 설치
// npm install react react-dom
