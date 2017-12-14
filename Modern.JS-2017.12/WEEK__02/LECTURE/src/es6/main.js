// ES6로 변경
jQuery(document).ready($ => { // 매개변수가 하나일 경우 괄호 생략 가능

    let buttons = $('button', '.toggle-radio-container'); 
    let active_class = 'is-loading';
    // let buttons  = buttons; // SyntaxError: Identifier 'buttons' has already been declared

    // let toggleRadioButton = function(e) { 
    //     let $this = $(this);
    //     $this.siblings(`.${active_class}`).removeClass(active_class)
    //     $this.addClass(active_class);
    // };

    // 이벤트 핸들러에 arrow function을 쓰지 않는 이유
    // ※ 화살표 함수 내부의 this는 무엇을 가리키나?
    // 매개변수의 것들은 안정적으로 쓸 수있는데 this는 문제가 생긴다.
    let toggleRadioButton = e => { 
        // this대신 e.target을 쓰면 오류가 없다.
        // this는 문제가 많으므로 e.target을 쓰면 문제를 방지할 수 있다.
        // e는 매개변수로 확실하게 받은거라 문제가 생기지 않은 것
        // console.log(this); // Window
        // 화살표 함수 내부의 this는 
        // 함수를 실행시킨 주체가 아니라
        // 함수의 상위영역을 참조하는 객체이다.
        let $this = $(e.target); // 캐시: 두번 이상 사용되면 변수에 참조하자
        $this.siblings(`.${active_class}`).removeClass(active_class)
        // $this.addClass(active_class); 

        // ***addClass에 콜백함수를 넣을 수 있다.
        // $this.addClass(function(index, currentClass){ 
        //     return currentClass + ' - ' + active_class;
        // }); 

        // () => active_class // 식
        // () => { 
        //    //...
        //    return active_class;
        // } // (구)문

        // $this.addClass((index, currentClass) => {});
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