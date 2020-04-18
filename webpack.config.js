const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.ts', // Entry 파일 설정
  output: {
    // 번들링 결과 파일 이름과 경로 지정
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    // 모듈과 관련된 설정
    rules: [
      // 모듈이 어떻게 다루어질지에 대한 규칙
      // 모듈을 해석할 로더를 정의
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // 모듈 처리 방식을 정함 (import 또는 require로 모듈을 불러올 때)
    extensions: ['.ts'], // 지정한 경로가 파일인 경우 파일을 어떤 확장자로 정할지 정의
  },
  devServer: {
    contentBase: __dirname,
    publicPath: '/dist/',
    inline: true,
    hot: true,
    host: 'localhost',
    port: 9000,
  },
};
