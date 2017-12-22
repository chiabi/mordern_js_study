# 모던 자바스크립트 라이브러리 프레임워크 (DAY02)

[ESLint](http://slides.com/yamoo9/eslint#/)
[Rollup](http://slides.com/yamoo9/rollup#/)

[NVM for windows](https://github.com/coreybutler/nvm-windows) 설치

```sh
$ nvm version

// 설치 가능한 버전 찾기 (테이블로 보여짐)
$ nvm list available
// 설치된 버전들을 보여줌
$ nvm list

// 설치하고 싶은 버전을 뒤에 써서 설치
$ nvm install 8.1.2

// 원격(remote)에서 다운 가능 한 것을 출력함 - nvm 옵션을 보여줌
$ nvm ls -remote
```
버전이 달라지면 문제가 생길 수 있음, Sass는 아직 6버전이 더 문제해결에 나았다고 함


Rollup : 성능면에서 본다면 트리셰이킹이란 걸 써서 webpack보다 더 좋지만 webpack을 많이들 사용한다.

```sh
// Git
// 브랜치 정해서 카피할 경우 
git clone -b 2017.12 https://github...
```


JQUERY+ES6 폴더에서 index.html, package.json 만들어준다.
yarn을 설치해서 사용할 것임
```sh
$ echo {} > package.json

$ npm i -g yarn

// 설치되었는 지 확인
$ npm ll -g yarn

$ yarn -v

// 제이쿼리 로컬로 설치
$ yarn add jquery
```
yarn은 버전관리 잘해주고 엄청 빠름!!!  
`yarn.lock`는 패키지를 관리하기 위한 설계도 같은 거 지우면 안됨

제이쿼리 노드모듈 파일을 보면 모듈로 관리하고 있음  
ES6부터는 모듈의 개념이 생겼지만 백엔드의 기술(node.js)을 사용해서 브라우저에서 사용할 수 있도록 해야한다.


WEEK__02/LECUTRE/
```sh
// 제이쿼리 로컬로 설치 배포할 것이므로 그냥 디펜던시로 설치함
$ yarn add jquery

// 웹서비스에서 쓰지않고 개발에서 쓸것이므로 --dev로 설치한다.
$ yarn add --dev babel-cli

$ mkdir dist src
```
dist/index.html

src/es6/main.js -> main.js에서 작업을 시작할거임

### 오전 시간 수업목표

jQuery에 없는 기능을 개발, toggle버튼 스타일을 es5로 만들고  
그것을 리팩토링 해보고  
es6로 변경해 바벨에서 돌려볼 거임

[BULMA](https://bulma.io/) CSS 프레임워크를 이용할 것이므로 설치한다
```
$ yarn add bulma
```

```
// yarn을 쓰면 명령어를 간소화 할 수 있다.
$ npm run babel
$ yarn babel

// 프리셋 설치
$ yarn add --dev babel-preset-env
```


## 오후 시간 수업목표

새로운 ajax는 프로미스를 사용하는데 하위에서는 지원하지 않는다.  
그래서 babel-polyfill이 필요하다.

이모든 것은 ie가 사라지면 필요없는 일;;;

> require, module.exports 는 commonJS
ES6에서는 import

### parameters,  spread Operator

+ default parameter 
+ rest parameter

jQuery의 makeArray() 유사배열이 배열의 메서드를 빌려쓰게 할 수 있다.
`makeArray(aruments)`
`Array.prototype.slice.call(arguments, 1)`

```javascript
function n_multiply_sum() {
    console.log(Array.isArray(arguments));
    var args = Array.prototype.slice(arguments);
    console.log(Array.isArray(args));
    var first_arg = arg.slice(1, 0);
    var rest_arg = arg.slice(1, 1);
}

// spread operator
// 배열화가 필요없다 이미 배열임
function n_divide_sum(x, ...args) {
    console.log(x); // 100
    console.log(args); // [3, 4, 5, 6, 7]
    console.log(Array.isArray(args)); // true
}
n_divide_sum(100, 3, 4, 5, 6, 7);
```

어떤때에 유용할까??
옵션 같은 rest parameter가 필요한 개발을 할 때

### Modules

바벨의 번들링 방식은 의존성 관리를 해주지 않아 적합하지 않다(순서를 맞춰주지 않는다.)

#### Rollup

장점, 강점 : 트리 셰이킹을 통해 사용되지 않는 항복을 제외하여 번들링

[rollup keynote](http://slides.com/yamoo9/rollup#/0/3)
```javascript
// 비구조화 할당
let o = {name: 'a', age: 22, job: 'c'};

//ES5
{
    let name = o.name; 
    let age = o.age;
    let job = o.job;
    console.log(name, age, job);
};

// ES6
{
    let{name, age, job} = o;
    console.log('es6', name, age, job);
}
```
```javascript
// ./utils 
const utils = {
    // 메서드 shorthand
    ajax(){},
    each(){},
    square(){},
    cos(){}
};
// 라고 가정할 경우 
let {ajax, square} = utils;
```
```javascript
// 아래의 import문은 위의 디스트럭쳐 할당 개념에서 이해해야함
import { ajax } from './utils'; // 유틸에서 속성이 ajax인것만 가져오겠다.
let query = 'Rollup';
```

#### three shaking 예제 
[overview](http://slides.com/yamoo9/rollup#/0/4)
```javascript
// main.js
import { cube } from './maths.js';
console.log( cube( 5 ) ); // 125
```
```javascript
// math.js
// This function isn't used anywhere, so
// Rollup excludes it from the bundle...
export function square ( x ) {
	return x * x;
}

// This function gets included
export function cube ( x ) {
	// rewrite this as `square( x ) * x`
	// and see what happens!
	return x * x * x;
}
```

##### 번들링 결과
```javascript
(function () {
'use strict';

// This function isn't used anywhere, so
// Rollup excludes it from the bundle...


// This function gets included
function cube ( x ) {
	// rewrite this as `square( x ) * x`
	// and see what happens!
	return x * x * x;
}

console.log( cube( 5 ) ); // 125

}());
```

### Rollup

Rollup-study/
```sh
# npx를 설치해준다.
# 로컬에서 바로 사용할 수 있게 해준다.
# $ yarn install global npx

$ npm i -g npx
$ yarn add --dev rollup

$ npx rollup -v
# 롤업 사용 시 -f 포맷은 필수임 안쓰면 번들링 안됨
```


롤업은 플러그인 시스템을 제공하므로 바벨을 활용할 수 있다.
`rollup.config.js` 설정 파일을 만든다.

```sh
$ yarn add --dev rollup-plugin-babel rollup-plugin-eslint
```


```sh
# Error No ESLint configuration found.
$ npx eslint --init 
```
***
Q. 바벨에서 원래 한글이 변환되나요?

A. 바벨에서 한글, 중국어, 일본어등은 유니코드형식으로 변환되는데 어차피 내부적으로도 변환되게 되어있고
웹브라우저에서 해석되는데 문제 없으며 오히려 안정적이다.
***

[jQuery는 이벤트를 어떻게 처리하는가?](http://d2.naver.com/helloworld/1855209)