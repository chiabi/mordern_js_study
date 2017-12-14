// import rollup plugins
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';

// export ES modules
// rollup src/main.js -f umd > dist/bundle.js
// entry => input          --- src/main.js
// dest  => output.file    --- dist/bundle.js
// format => output.format --- umd
export default {
    // 인풋
    // ※ 멀티 인풋이 지원되지 않으므로 싱글페이지 어플리케이션에는 좋지만 멀티페이지에는 쓰기 어려움
    input: './src/main.js',
    // 아웃풋
    output: {
        // 파일
        file: './dist/bundle.js',
        // 모듈포맷
        // iife | cjs | amd | umd | iife
        format: 'iife'
    },
    // 플러그인
    plugins: [
        eslint({
            // ?: 있거나 없거나
            // include: './src/**/*.jsx?'
            include: './src/**/*.js'
        }),
        babel({
            // include: './src/**',

            // node_modules 하위 종속 파일은 제외함
            // ** : grab
            exclude: 'node_modules/**'
        })
    ]
}