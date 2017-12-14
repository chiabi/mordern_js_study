(function () {
'use strict';

// 비공개
var trio = void 0;

trio = function trio(x) {
    return Math.pow(x, 3);
};



// default가 있고 없고가 차이가 있음
// export default{
//     square, trio
// };

// 헬퍼 함수
function on(el, type) {
    var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

    el.addEventListener(type, handler);
}

function off(el, type, handler) {
    el.removeEventListener(type, handler);
}

// entry file
// 진입 파일
// 다른 모듈을 읽어오는 역할(허브파일)

// 모듈 로드
// exports에서 default를 사용했으면 다음과 같이 불러오는 것이 가능하다
// import maths from './modules/maths';
console.log(trio(9)); // 9 * 9 * 9

var body = document.querySelector('body');
var touchBodyAction = function touchBodyAction(evt) {
    console.log(evt.target);
    off(e.target, 'click', touchBodyAction);
};

on(body, 'touchstart', touchBodyAction);

}());
