// Print jQuery Version
// Factory 함수 : 공장처럼 ()안에 무엇을 던지건 다르게 동작하도록 해놓은 것
// jQuery() // 객체를 생성하는 역할을 한다.
// $()

// jQuery.prototype.init
// new 라는 키워드를 내부에서 처리해서 객체를 생성한다.

// $는 많이 사용하므로 캡슐화가 필요하다 자신만의 독립된 공간(스코프)가 필요하다

// 캡슐화 (함수 스코프)
// 모듈 패턴(IFEE)
// 아래는 ES5까지의 모듈패턴이다.
(function($) { // $는 반드시 jQuery가 된다.
    // console.log($.prototype.jquery); // $를 안전하게 사용할 수 있게 된다.

    // constructor VS prototype

    // jQuery의 prototype 약칭 : 
    // jQuery.prototype
    // $.prototype
    // $.fn   
    console.log($.fn.jquery);

    // $.fn VS $()
    // 자바스크립트의 상속은 빌려쓰는 개념이다.
    // $.fn === jQuery 프로토타입 객체 // .addClass(), removeClass(), css()...
    // $() === jQuery {} // jQuery 객체, 

    // $() 팩토리 함수는 $.fn의 것을 빌려서 출력한다.
    // 팩토리 함수의 결과물은 결론적으로 프로토타입 것을 빌려온다.
    console.log($().jquery);
}(window.jQuery)); // 모듈을 주입받을 수 있따.

// jQuery 1버전만 IE8이하를 지원한다.

// Linting 이라는 유틸리티 프로그램이 필요함
// 다른 코드 스타일로 어려운 디버깅에 용이하게 하기위해


// 목표 : 버튼을 클릭하면 버튼이 활성화 되었다는 것을 보여줄 것이고 다른것은 비활성화
// jQuery 프로그래밍
// !function($){}(window.jQuery);
jQuery(document).ready(function($){
    // 캡슐화 $ === jQuery
    // .toggle-radio-container 내부의 button을 클릭하면
    // 클릭된 버튼은 활성화(시각적 표시), 다른 버튼은 비활성화

    // 내가 짠 코드

    // $('.toggle-radio-container').on('click', 'button', function(){
    //     var btn = $(this);
    //     var activeStyle = {
    //         color: 'white',
    //         backgroundColor: 'red'
    //     };
    //     btn.css(activeStyle).siblings().removeAttr('style');
    // });

    // bulma.css
    // $('.toggle-radio-container').on('click', 'button', function(){
    //     var btn = $(this);
    //     var activeClass = 'is-primary';
    //     btn.addClass(activeClass).siblings().removeClass(activeClass);
    // });

    // 수업 코드
    // 방법
    // 1. 이벤트 위임(이벤트 델리게이션)
    // 2. 직접 대상을 찾아 이벤트를 주는 것
    
    // 1. 문서 객체 수집한 수, jQuery 객체화
    // context를 지정해서 찾아주는 게 더 빠르다(선택자 길게 늘어뜨리지 말자)
    var buttons = $('button', '.toggle-radio-container'); 

    // console.log(buttons); // 이터레이터블, 이터레이터 학습해보자
    // Array.prototype.forEach를 jQuery는 이미 나오기 전에  .each()로 추상화했다.

    // button.click은 순환이 아니라서 개별적으로 동작을 줄 때 힘들고 하나하나 찾아서 이벤트를 주는 것으로 하수임
    // buttons.click(function(){
    //     console.log($(this)); // 10 : 네이티브를 굳이 jQuery객체로 만드는 거
    //     console.log(this); // 1 : DOM 객체를 받는거

    //     $(this).addClass('clicked');
    //     this.classList.add('clicked'); // 오래된 브라우저는 아래의 것을 사용하는 수 밖에....

    //     // 가능한 DOM 스크립트로 제어 가능한 것은 DOM 스크립트로 처리하자 더 빠르다.

    //     $(this).attr('class');
    //     this.getAttribute('class');

    // }); 

    // 순환을 돌려 콜백 함수를 실행한다, index와 DOMELEMENT를 전달해준다.
    // 내부적으로 순환해준다.

    var active_class = 'is-success';
    // 2. 이벤트 핸들러 정의
    var toggleRadioButton = function(e) {
        // console.log(e.target);
        // console.log($(e.target)); // clicked element
        // this // *이벤트 위임과 this를 공부하자

        // *제이쿼리 캐시를 지원하지 않는데 캐시하는 방법을 찾아보자
        // 클릭한 버튼의 형제들 중에 활성화 된 것이 있다면 
        // 비활성화를 한다.
        $(this).siblings('.' + active_class).removeClass(active_class);

        // 클릭한 버튼 활성화
        $(this).addClass(active_class);
    };

    // 3. 수집된 jQuery 객체에 이벤트 바인딩
    buttons.each(function(index, button){
        // console.log(index, button); // 0 <button.... >button 01</button>,  1, 2, 3
        // DOM Script
        // button.addEventListner('click');
        // jQuery

        // function 내부에 function 콜백 -> 클로저가 생성 -> 메모리 누수
        // $(button).on('click', function(){ // ..  });
        // 함수를 외부로 빼서 이벤트 핸들러 정의 : toggleRadioButton
        $(button).on('click', toggleRadioButton);
    });





});