'use strict';

// ## 블록 영역

// 전역
var message = 'ECMAScipt v5';
console.log('전역(1) message: ', message); // 전역(1) message: ECMAScipt v5

// 블록 영역
{
    var _message = 'JavaScript';
    console.log('블록 {} 영역 message: ', _message); // 블록 {} 영역 message: JavaScript

    var msg_list = [];
    console.log('블록 {} 영역 msg_list: ', msg_list); // 블록 {} 영역 msg_list: Array(0)
}

// 함수 영역
function scope() {
    var message = 'Function Scope';
    console.log('함수 영역 message: ', message); // 함수 영역 message: Function Scope
}

scope();

// 전역
console.log('전역(2) message: ', message); // 전역(2) message: ECMAScipt v5
// console.log('전역(2) msg_list: ', msg_list); // ReferenceError: msg_list is not defined

// ## 함수 실행 시점 & 스코프 체이팅
var fn_list = [];

// 반복문(블록영역)
for (var i = 0, l = 10; i < l; i++) {
    fn_list.push(function () {
        // 함수영역
        console.log(i);
    });
    console.log('반복문 내부 i: ', i); // 0,1,2,3,4,5,6,7,8,9
}

console.log('반복문 외부 i: ', i); // 10 (i를 더해 10이 되면서 i < l의 조건에 맞지 않아 for 안의 구문은 실행되지 않음)

//  배열 데이터 순환 처리(콜백);
fn_list.forEach(function (f) {
    f();
}); // 10이 10번

//# sourceMappingURL=study.js.map