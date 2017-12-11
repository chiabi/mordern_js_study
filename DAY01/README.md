# ES6

ECMAScript 2015

* 코드가 단순해진다.
* 문자열 접합이 사용하기 쉬워진다.
* 코드의 역할을 보다 의미적이고 직관적으로 이해할 수 있다.
* 복잡했던 함수 로직을 단순하게 구현할 수 있다.

## let, const

+ variable declaration: 변수 선언  
+ initialization:  변수 초기화
+ scope: 프로그램 내부에서 접근 가능한 영역(범위) 설정  
JavaScript는 글로벌(Global), 함수(Function) 영역을 가짐

```javascript
var declaration;

decalration = '초기화, 선언된 변수에 값을 할당';
```

### 블록영역

ECMAScript2015(ES6)부터는 블록(Block) 영역을 선택적으로 지원한다.  
let, const 키워드를 사용해 변수를 선언할 경우 __블록 영역을 가지게 된다.__

```javascript
// ES5 : var를 사용할 경우 함수 scope만 지원

// 전역
var message = 'ECMAScipt v5';
console.log('전역(1) message: ', message); // 전역(1) message: ECMAScipt v5

{
    var message = 'JavaScript';
    console.log('블록 {} 영역 message: ', message); // 블록 {} 영역 message: JavaScript

    var msg_list = [];
    console.log('블록 {} 영역 msg_list: ', msg_list); // 블록 {} 영역 msg_list: Array(0)
}

// 함수 영역
function scope() {
    var message = 'Function Scope';
    console.log('함수 영역 message: ', message); // 함수 영역 message: Function Scope
}

scope();

console.log('전역(2) message: ', message); // 전역(2) message: JavaScript
console.log('전역(2) msg_list: ', msg_list); // 전역(2) msg_list: Array(0)
```
```javascript
// ES6 : let, const

// 전역
var message = 'ECMAScipt v5';
console.log('전역(1) message: ', message); // 전역(1) message: ECMAScipt v5

// 블록 영역
{
    let message = 'JavaScript';
    console.log('블록 {} 영역 message: ', message); // 블록 {} 영역 message: JavaScript

    const msg_list = [];
    console.log('블록 {} 영역 msg_list: ', msg_list); // 블록 {} 영역 msg_list: Array(0)
}

// 함수 영역
function scope() {
    var message = 'Function Scope';
    console.log('함수 영역 message: ', message); // 함수 영역 message: Function Scope
}

scope();

// 다른 결과가 나온다
console.log('전역(2) message: ', message); // 전역(2) message: ECMAScipt v5 
console.log('전역(2) msg_list: ', msg_list); // ReferenceError: msg_list is not defined
```

### 함수 실행 시점 & 스코프 체이닝



```
```

***
## Array.prototype.forEach();  

배열 요소마다 한 번씩 제공한 함수를 실행한다.
> arr.forEach(callback[, thisArg]);

+ callback: 각 요소에 대해 실행한 함수, 인수 셋을 취하는
+ 
