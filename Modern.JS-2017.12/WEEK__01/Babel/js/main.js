'use strict';

// ES6 -> Babel -> ES5

// ESLint

// let, const
var o = ['object', 'class', 'template string', 'arrow function'];

// 비구조화 destructuring(구조를 파괴함)
// let [...data] = o;
var obj = o[0],
    cls = o[1],
    tst = o[2];

// o = {}; // 에러: 오류가 있으면 컴파일러가 알려준다
// 컴파일 과정에서 문제를 잡아낼 수 있다^^

// for ~ of
// 순환처리 Iterator 객체

var result = [];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = o[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var value = _step.value;

        // 필터링
        // if문 안쓰고 식을 쓴거
        // 브라우저 검증등에 사용하기 좋다.
        // includes는 플러그인 찾아서 처리해야함;;;
        value.includes('fun') && result.push(value);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var markup = '\n    <div>\n        <ul>\n';
for (var i = 0, l = 0; i < l; ++i) {
    console.log('i: ', i);
    data.push(1, 3, 5, 7);
    console.log('data: ', data);
    // template + data binding
    markup += '\n        <li>' + i + '</li>\n    ';
}
markup += '\n        </ul>\n    </div>\n';

console.log(markup);

// ES5
// function showRolles() {}
// var showRolles = function() {};

// window.onload = showRolles;
// [1,3,5].forEach(showRolles); // 콜백함수로 넣어준다

// ES6
// Fat(=) Arrow Function
// 문 statement
var squareState = function squareState(x) {
    return x * x;
};

// 식 expression
// 매개변수가 하나면 ()괄호를 생략가능하다.  x = >
// 매개변수의 개수가 0, 2개이상일 때는 괄호 생략이 불가능하다. (x, y) = >
// 한 줄일때(inline) {}중괄호가 생략 가능하다.
// return이 기본이다.
var squareExp = function squareExp(x) {
    return x * x;
};

// ES6
// Iterator 객체 순환
// map은 size라는 속성을 가지는데 배열에서의 length이다.
// const map = new Map();
// map.size;
// map.set('lime', 'myBook');
// let fn = () => {};
// ...아 넘 빨라 놓쳤다...
