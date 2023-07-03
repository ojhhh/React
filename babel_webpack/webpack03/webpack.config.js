// httml-webpack-plugin
// html 파일을 만들어줌
// 애플리케이션에 포함된 번들을 관리하는 프로세스를 만들어줌
// 주로 react 같은 애플리케이션(SPA)을 작성할떄 주로 사용
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// webpack 구성 객체 내보내기
module.exports = {
  // 개발 모드 설정
  // 빌드할 떄 최적화 단계를 건너뛰고 컴파일함
  mode: "development",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        // test : .js, .jsx 확장자를 가진 파일에 대한 규칙 설정
        test: /\.(js|jsx)$/,
        // node_modules 폴더를 제외하고 파일 처리
        exclude: /node_modules/,
        // babel-loader를 이용해서 파일을 번들링
        use: ["babel-loader"],
      },
    ],
  },

  // plugin 설정
  plugins: [
    // HtmlWebpackPlugin을 사용해서 index.html 번들링 폴더에 생성
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
    }),
  ],

  // 번들링을 내보낼 속성
  output: {
    // 번들 파일 이름
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
};
