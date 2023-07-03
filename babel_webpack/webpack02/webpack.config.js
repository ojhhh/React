const path = require("path");

// webpack 구성 객체 내보내기
module.exports = {
  entry: "./src/index.js",
  // 모듈 규칙 설정
  module: {
    rules: [
      {
        // test : 파일 확장자와 일치하는 정규식의 키
        // .css 확장자를 가진 파일의 규칙을 설정
        test: /\.css$/,
        // use 확장자에 맞는 파일을 처리할 떄 사용할 로더 지정
        // style-loader, css-loader를 사용하여 css 파일 번들링
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  // 번들링된 파일 내보내기
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
};
