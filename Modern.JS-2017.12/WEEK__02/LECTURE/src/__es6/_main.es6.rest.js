// 개발(배포) 의존 모듈 로드
// CommonJS : 표준이 아니라서 웹브라우저에서는 쓸 수 없음
// // require("babel-polyfill");
// AMD
// UMD
// IIFE: ES5
// ES6                              // *디스트럭쳐링(비구조화)관련 찾아볼것
// import "babel-polyfill";
// 바벨은 트랜스파일러, 컴파일러이지 모듈 번들러가 아니어서 
// import를 require(node.js환경에서 모듈불러오는 방식::commonJS방식)으로 변경한다.

jQuery(document).ready($ => { // 매개변수가 하나일 경우 괄호 생략 가능

    let buttons = $('button', '.toggle-radio-container'); 

    // $jQuery 객체(리스트) =>  배열
    // jQuery 유틸리티 메서드 $.makeArray()

    // 객체를 생성해야지만 사용 가능한 메서드
    // 객체(인스턴스)가 사용할 수 있는 메서드
    // 인스턴스 메서드
    // $().each()
    // $('button').each(function(i, el){
    //     console.log(i, el);
    // });

    // 객체를 생성하지 않고도 사용 가능한 메서드
    // 객체가 아닌 경우에 사용
    // 일반 함수, 네임스페이스 객체에 종속되 속성
    // 클래스(스태틱) 메서드(제이쿼리에선 유틸리티 메서드라고 부른다.)
    // $.each() // 일종의 네임스페이스와 같다

    // 위의 코드보다 빠르다. ()안에 다른 것도 받을 수 있다.
    // $.each($('button'), function(i, el) {
    //     console.log(i, el);
    // });

    // ES6 새롭게 추가된 객체
    // iteratable object: 반복순환 가능한 객체
    // string, array, arguments, set, map, weakset, weakmap

    // weakset, weakmap : 프라이빗을 유사하게 구사할 수 있다, 
    // 메모리 누수를 방지하기 위해 set, map과 같이 쓴다.
    // 얕은 복사 관련해서 쓴다.

    // 대체할 때
    // array => set
    // object => map

    const data = [34, 56, 78, 34, 90];
    console.log(data);
    // Set no support: IE6, 7, 8, 9, 10, 11
    // Set support: Edge....
    const data_Set  = new Set(data); // data
    console.log(data_Set);

    // 변환이 가능한 코드가 있고 아닌 코드가 있다
    // 대체 수단이 필요하다.
    // http://babeljs.io/docs/usage/polyfill#top

    let active_class = 'is-loading';
    let toggleRadioButton = e => { 
        let $this = $(e.target); 
        $this.siblings(`.${active_class}`).removeClass(active_class)
        $this.addClass(() => {
            // 2초 뒤 로딩 클래스가 소멸하게 만들거임
            
            // ajax 특정 시간이 지나면, 상태를 원상 복귀
            // 시뮬레이션 window.setTimeout()
            window.setTimeout(()=> $this.removeClass(active_class), 2000);
            return active_class;
        }); 
    };    

    buttons.each((index, button) => {
        // this는 화살표 함수와 함께 사용할 때 기존과 다르게 동작한다.
        $(button).on('click', toggleRadioButton);
    });
});

// IIFE
(function(global, $){
    // default parameter value settings
    global = global || window;
    $ = $ || window.jQuery;
}());

// ES6
// default parameter
// ((global = window, $ = window.jQuery) => {

// })();

// jQuery객체가 없을 경우 검증을 위해 다음과 같이 수정한다.
function checkRequirejQuery() {
    if (!window.jQuery) {
        throw new Error('required jQuery');
    } else {
        return window.jQuery;
    }
}

((global = window, $ = checkRequirejQuery()) => {
    $('body').addClass('using-jQuery');
})();

// 나머지 매개변수
function sum(...args) {
    console.log(Array.isArray(args)); // true
    console.log(Array.isArray(arguments)); // false
    // arguments
    // ES5까지 사용되던 유사배열 객체로 
    // 배열화, 배열의 slice() 메서드를 사용한 공정이 필요
    // ES6부터는 이모든 공정이 불필요하다!!
}
