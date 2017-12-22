const webpack = require('webpack'); 

const path = require('path');

const config = {
    // 진입: entry
    // 문자, 배열, 객체 등
    entry: './src/main.js',
    // 출력: output
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './bundle.js'
    },
    // 모듈: module
    // 플러그인: plugin
}

// CommonJS 방식을 사용해야함
// ES6 형식 지원안함
module.exports = config;