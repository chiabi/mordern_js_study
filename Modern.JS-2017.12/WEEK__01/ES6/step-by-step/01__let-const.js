/*! ES6__01_let-const.js @ 2017, yamoo9@naver.com */


////////////////
// let, const //
////////////////


// 1. var 키워드 사용에서 주의할 점 [ES5]
// https://goo.gl/UE9hYh

var phone1 = 'iPhoneX';
let phone2 = 'Gallaxy Note 8';
const phones = [phone1, phone2];

// 선언
var declation;
consoel.log(declation);

declation = '선언 변수';
// 스코프 형성

// 함수 내부에 함수를 선언하는 콜백지옥
// 제이쿼리는 이를 따라갔지만, vue, react등은 이렇게 사용되지 않는다.

// 1-1. 함수 스코프 (Function-level Scope)

var def = 'define';
// Block
{
    var def = '정의';
    console.log('in: ', def) // 정의
}
console.log('out: ', def) // 정의 ( es5)
// 블록스코프를 지원하지 않으므로 '정의'가 출력된다.

let def2 = 'define';
// Block
{
    let def2 = '정의'; // 지역변수가 형성된다.
    console.log('in: ', def2) // 정의
}
console.log('out: ', def2) // define ( es6)
// ES6 +  let, const을 사용하는 것이 좋다.
// var는 동일한 이름을 같이 선언하면 덮어써버리지만 let과 const는 오류를 반환해준다.
// (고유한 이름을 만들어준다!, Identifier. SyntaxError)

// var, let: 변수
// const(constant): 상수

// 그동안의 이름 관례 규칙은 const는 대문자로 만든다
// 지금은 소문자로 써도 상관없음
const ANDROID = '로봇';
ANDROID; // 로봇
ANDROID = []; // Type Error;
// 그동안의 자바스크립트에서 암묵적으로 사용했다.

// DOM Script
// DOM API

// DOM은 Node로 구성되어 있다.
// ElementNode : <body>
// AttributeNode : <body id="">
// TextNode : <div>comment</div>
// CommentNode... : <!-- -->
div.nodeType; // 1 : 상수
div.nodeType === document.ELEMENT_NODE; // ELEMENT_NODE는 상수이다. 
document.ELEMENT_NODE = 9; // 불가능하다. 값이 변하지 않음
document.ELEMENT_NODE; // 1

// let vs const
// 변수 vs 상수
let temp;
temp = '임시변수'; // 나중에 할당이 가능하다.
temp // 임시변수

const TEMP; // 값을 할당하지 않으면 오류다.
/*
    var 키워드는 블록을 지역으로 만들지 않는다.
    let, const는 그렇지 않다.

    var와 달리 let, const 키워드를 사용한 이름은 영역 내에서 유일해야 한다

    let과 달리 const는 선언/초기화가 동시에 이루어져야한다.
*/

// 이벤트
// e(이벤트 객체)는 마지막 인자??

// 함수의 실행 시점이 중요함

// 자바스크립트는 메모리 관리를 한다 가비지 컬렉터가 함수 실행 후 함수의 데이터를 소멸한다.
// 외부에서 참조하도록 만들어 데이터를 사라지게 하지 않는 개념이 클로저이다.

// 원시 데이터 유형(pass by value)

// 참조 데이터 유형(pass by reference)
'hi' // 'hi' 문자열 값
a = 'hi'.split(''); // 내부적으로 엔진이 우회해 값일 뿐이지만 객체의 기능을 쓸 수 있게했다.
new String('hi'); // 객체 생성
// 데이터 복사, 데이터 참조



// 1-2. 호이스팅 (Hoisting) 현상
// 표준으로 명시된 거는 아니고 엔진이 처리하는 거

var cond = true;
function fn() {
    if(cond) {
        var cond = 'yes';
        console.log('if');
    }else {
        var cond = 'no';
        console.log('else');
    }

    return show(); // error
    var show = function() {
        console.log('show');
    }
    // 문제 생기는 걸 확인 할 수 있다.

    // function show() {
    //     //....
    // }
    // 위와 같은 선언은 함수 선언이 호이스팅 되어 문제가 없는 것 처럼 보인다.
    // 좋은 습관은 아니다.
}
// ??????

// let과 const는 var와 같이 호이스팅 되는가??

for( var i = 0, k = 100, m; (m = k--); ){
    console.log(i);
    // 이것도 유효한 코드다!
}

// ***let은 전역을 오염시키진 않는다.
// 전역변수라 해서 window객체의 프로퍼티가 되지는 않는다.
// delete로 지울 수 있다.

// const
// 값의 변질을 막지만 값 내부의 데이터의 값 변화를 막지는 않는다.

// path 모듈 로드
const path = require('path');
// 객체나 배열처럼 참조형 데이터는 const로 보통 많이 받는다.
const o = {};
o.name = 'object';
o.job = 'instructor';
o;
// const로 선언하면 값이 변화되지 않아 다른 사람의 코드에 덮어지지 않는다. 

// 옛날 코드를 굳이 let으로 수정하지 말자 예상치 못한 오류가 있울 수 있다.
var fn = function fnName(){
    // ..
};
fnName(); // ERROR fn의 값(함수값)이 되어 접근할 수 없다.
fn(); // 

var fn = function() {
    var message = 'ice coffee'; // 비공개 외부에서 접근할 수 없음
    return message;
}(); // 'ice coffee', 실행된 function의 return 값이 fn에 할당되니까

(function(){
    var message = 'ice coffee';
    return message;
})(); // 'ice coffee' , IIFE 즉시실행함수

// 1-3. 클로저 (Closure)
// 1-3. IIFE (Immediately Invoked Function Expressions: “Iffy”라고 발음) 패턴



// 2. let 키워드 도입 [ES6]
// https://goo.gl/kBquFB

// 2-1. 블록 스코프 (Block-level Scope)
// 2-2. let 호이스팅 현상 (var와 비교)
// 2-3. 클로저 VS 블록 스코프
// 2-4. 전역 객체의 속성 (var, let 전역 변수의 특징)



// 3. const 상수 [ES6]
// https://goo.gl/TiqJRP

// 3-1. 선언과 동시에 초기화, 할당이 요구됨.
// 3-2. 초기화 이후 재할당 금지.
// 3-3. const 객체 (const 객체의 속성은 재할당이 가능)









/// Conclusion ////////////////////////////////////////////////////////////////

/**
 * ES6를 사용하여 프로젝트를 진행한다면?
 * var vs let vs const
 * let    https://goo.gl/kBquFB
 * const  https://goo.gl/TiqJRP
 * ———————————————————————————————————————————————————————————
 *
 * var
 *  - 함수영역(function scope)
 *  - 초기 값 할당이 없으면: undefined
 *  - 가급적 사용하지 않는 것이 좋지만, 사용해야 한다면 Top Level에서만 사용.
 *  - 전역에서 선언 시, window 객체의 속성으로 접근 가능.
 *
 * let, const
 *  - 블록영역(block scope)
 *  - 초기 값 할당이 없으면: ReferenceError
 *  - 데이터 값 변경이 필요한 경우라면 let 사용 권장.
 *  - 전역에서 선언 해도, window 객체의 속성으로 접근 가능하지 않음.
 *
 * const
 *  - 초기 값 할당이 필수!
 *  - 값 유형 변경은 허용하지 않지만,
 *    배열/객체 유형의 경우 새로운 아이템 추가,변경 가능.
 *  - 데이터 값 유형이 배열/객체일 경우 사용 권장.
 *
 */