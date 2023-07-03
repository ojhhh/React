const path = require("path");

// webpack 구성 객체를 만들어 내보내기
module.exports = {
  mode: "development",
  // 진입점 시작점 설정
  entry: "./src/index.js",

  // 번들된 파일의 내보낼 파일 옵션
  output: {
    filename: "bundle.js",
    // 파일의 폴더 설정
    path: path.join(__dirname, "dist"),
  },
};
