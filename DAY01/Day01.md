# 모던 자바스크립트 라이브러리 프레임워크 (DAY01)

[교육 링크](https://github.com/yamoo9/modern.js)

+ 1주차
    + 안티패턴
    + ES6 - 백엔드의 기술(node.js 환경)을 이용하면 프론트 엔드에서도 적용이 가능하다.
+ 2주차
    + jQuery
    + velocity.js (GSAP은 이전 강의때는 사용했는데 이번에는 변경함ㅠㅠ)
+ 3주차
    + Vue.js

IE9부터 가능하므로 그 이전의 버전을 고려해야한다면 현업에 반영하기 어려움

## pre survey 풀이

_6. JavaScript는 Block Scope를 지원하는 언어인가요?

> ES6부터는 블록 스코프를 지원한다. (let, const)

_8. 아래 코드에서 $가 가리키는 것은 무엇일까요?

```javascript
;(function(global, $){
    'use strict';
    $.random = function(n) {
        return Math.floor(Math.random() * n);
    };
    $.random = function(min, max) {
        return Math.max($.random(max), min);
    };
})(window, (window.ya = window.ya || {}));
```
> 답은 window.ya    
$는 별칭이다  
예제는 자바스크립트의 모듈패턴이다. (IIFE, 즉시실행함수) 원래 모듈을 지원하지 않는 자바스크립트를 위한 디자인패턴  
injection 주입받을 수 있다. (DI - Dependency injection)  
expression은 결과를 항상 반환한다. 

_9. 아래 코드 실행 결과, 콘솔 로그 값은 무엇일까요?

```javascript
function LazySlider(el) {
    this.el = el;
}
var lazy_banner_slider = LazySlider($('.banner-slider'));

// 콘솔 로그 값은 무엇일까요?
console.log(lazy_banner_slider.el);
```

> 생성자 함수(constructor)를 클래스처럼 사용할 수 있다. prototype 절차 지향 언어  
new 없이 사용해도 오류를 반환하지 않아, 디버깅이 어렵다.  
함수는 리턴을 명시적으로 사용하지 않으면 undefined를 리턴한다.  

_10. 아래 코드에서 스태틱 메서드(Static Method)를 정의하는 구문을 고르세요.

```javascript
;(function(global){
    'use strict';
    // 다음 중, 스태틱 메서드(Static Method)를 추가하는 구문은 어떤 것일까요?

    // #1
    function _each(t, i) {}
    // #2
    var _Pagenation = function() {};
    // #3
    _Pagenation.range = function(s, e) {};
    // #4
    _Pagenation.prototype.forEach = _each;
    // #5
    global.Pagenation = _Pagenation;

})(this);
```
> 스태틱 메서드!!!(객체지향형태의 코드를 사용해봤냐는 질문)  
1.비공개함수  
2.생성자함수(나중에 공개됨)  
3.스태틱 메서드(jQuery에서는 유틸리티 메서드라고 한다.)  
4.객체의 인스턴스 메서드  

## 환경설정

```sh
> git --version
> node --version
```

[Node.js](https://nodejs.org/en/)  
지금 8버전인데 수업은 6버전을 사용할 거임

octotree를 사용해 빠르게 트리구조로 탐색하려면 사용자계정 token을 필요로하니까 github에 사용자 계정을 만들자~

현재 브라우저 중 ES6를 가장 잘 지원하는 브라우저는 크롬과 사파리이다.  
크롬에서 GitZip for github와 Octotree 확장프로그램을 깔아주자.

* [GitZip for github](https://chrome.google.com/webstore/detail/gitzip-for-github/ffabmkklhbepgcgfonabamgnfafbdlkn) : 해당 git 폴더를 더블클릭하면 폴더째로 다운로드 받을 수 있음
* [Octotree](https://chrome.google.com/webstore/detail/octotree/bkhaagjahfmjljalopjnoealnfndnagc?hl=ko) : git을 트리구조로 보여줌, 키보드 접근성 좋음

## ECMAScript 6

[수업 keynote 슬라이드](http://slides.com/yamoo9/es6/)

Babel : 자바스크립트(ES6)를 자바스크립트(ES5)로 해석해주는 인터프리터(컴파일러란 말이 더 적합할지도)

매년 릴리즈 이름을 붙이기로 함, es7 es8부터는 조금씩 업데이트 되어 있다(큰변화는 없음 휴).

표준명칭 : ECMAScript

TC39 - (자바스크립트 표준화를 위한)기술위원회

### var vs let vs const

변수를 선언하는 3가지 방법

### 예제

https://codepen.io/anon/pen/KyLrGP?editors=0011

_forEach랑 jQuery의 each 인자(index, event) 순서 다름

_프레임워크(Vue, 리액트)가 하는 일  
데이터, 데이터가 들어갈 탬플릿, 데이터 바인딩, View  

리액트는 JSX라 해서 XML을 탬플릿 작업 어쩌구 해야함 그래서 더 어려움  
Vue는 HTML을 탬플릿으로 쓰는 작업을 뒤에서 알아서 처리함  

(React JSX 는 XML-like Syntax 를 native Javascript로 변환해준다고 함)

_유사배열을 배열화하려면? (유사배열이 배열 객체의 메서드를 사용하려면)
아래와 같이 ES6에서는 간단하게 해결할 수 있다.
```javascript
Array.from(links).forEach();
[...links].forEach();   // 더 간단한 방법...
```

DOM Event 모델
event.type, event.target등

### Babel을 사용해보자
[Babel 키노트](http://slides.com/yamoo9/babel#/)
package.json 파일에 `{}` 요거(객체)만 있어도 됨

'babel-cli'를 설치할거임(바벨을 명령어로 사용할 수 있게 해준다.)

전역설치, 지역설치(권장- 버전관리를 위해)   
지역설치에서도 --save, --save-dev로 구분됨
+ --save : 개발
+ --save-dev: 의존 개발 (-D)

```sh
$ npm i -D babel-cli

$ npm list -g babel-cli

$ node_modules/.bin/babel --version 
// 지역 설치의 경우는 node_modules 폴더 내의 babel을 찾아서 실행해야한다;;
6.26.0 (babel-core 6.26.0)

// es6의 main.js에 스크립트를 작성한다.
$ node_modules/.bin/babel es6/main.js 
// cmd창에 출력한다.
// 파일로 출력하려면 다음의 명령어를 사용한다 : -o 는 --out-file
$ node_modules/.bin/babel es6/main.js -o js/main.js
// 에러를 출력한다. js 디렉토리를 찾을 수 없기 때문이다. 

// 컴파일한 거 출력될 디렉토리를 만든다.
$ mkdir js
$ ls

$ node_modules/.bin/babel es6/main.js -o js/main.js
// es6을 바벨이 그냥 es6으로 뱉어낸다. 6버전의 babel은 기능이 쪼개져서 
// 이는 별도의 플러그인을 깔아야 es5로 변환이 가능하다.

// 블록스코핑(let, const)을 ES5로 만들어주는 플러그인을 설치한다.
// https://www.npmjs.com/package/babel-plugin-transform-es2015-block-scoping
$ npm i -D babel-plugin-transform-es2015-block-scoping
```

.babelrc (권장되는)설정 파일을 프로젝트 root에(이 프로젝트에서는 Babel 폴더가 될 것이다)만든다.
설치된 플러그인을 설정 파일 내에 작성하여 바벨 실행시에 설치된 플러그인을 같이 사용하게 한다.

.babelrc 파일에 다음과 같이 작성한다.
```JSON
{
  "plugins": ["transform-es2015-block-scoping"]
}
```

다시 바벨을 실행하면 let, const가 var로 변경된 것을 확인할 수 있다.

### template strings (template literal)

es6는 보간법을 사용한다.
쉽게 데이터 바인딩이 가능하다.
```javascript
// ES5
'<div>' + data + '<div>';

```
```javascript
// ES6
`<div>${data}<div>`;
// 
`<div id="${idName}" clas="container wrapper"></div>`
```

[ES6를 ES5로 쓰기위한 플러그인은 몇개일까](https://babeljs.io/docs/plugins/)? 열라 많아... 이걸 다 깔아??
플러그인을 미리 만들어놓은 preset을 깔자

결론적으로 package.json에 babel-cli와 preset만 있으면 된다.

es2015가 아닌 env를 깔거다 이게 최신버전이다.
```sh
$ npm i -D babel-preset-env
```

.babelrc 파일에 이전 작업의 플러그인을 지우고 다음과 같이 작성한다.
```JSON
{
    "presets": [ // 복수임에 주의하자
        "env"
    ]
}
```

npm script를 사용해 이전의 긴 명령어를 쉽게 접근하자  
다음을 package.json에 작성한다.
```JSON
// package.json

{
    "scripts": {
        "dev": "babel es6/main.js -o js/main.js -w"
        // -w는 --watch 관찰한다.
    },
    // ....
}
```
```sh
$ node_modules/.bin/babel es6/main.js -o js/main.js
// 위의 명령어를 npm run dev로 간단하게 실행할 수 있다!
$ npm run dev
```

### String Addition

BOM(window, navigator....), DOM

#### .includes()
```javascript
word.indexOf('naldo') > -1
// 아래와 같음
word.includes('naldo')
```

`-1`의 의미는 indexOf로 문자를 찾지 못하면 -1을 반환한다.

for
for ~ in: length가 없는 객체를 순환할때 쓴다. 배열은 느려서 비효율적이므로 for를 쓴다
forEach(cb) : 객체, 배열 모두 순환 가능하다.

iterator: 반복 순환 가능한 객체

es6에서는 새롭게 생긴 for ~ of

.startsWith(); 등이 추가되었다~

### errow function

coffeescript에서는 이미 사용하고 있었다
fat arrow function
`fn =>`
thin arrow function
`fn ->`

#### map
map {key => value, key => value}
map.size
map.set, get, has

#### set
기준의 배열에서 걸러주지 못한 중복된 것이나 유니크 데이터를 걸러준다.


(TypeSciprt /Super set (ES6 /Super set (ES5 /Sub set)))
TypeScript는 정적언어 가능 (C# 사용한 사람들에게는 조금 접근이 쉽다고 함)


다음주 jQueyr는 es6로 쓸거임 공부할 것