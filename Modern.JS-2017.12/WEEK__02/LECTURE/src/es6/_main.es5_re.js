// 목표 : 버튼을 클릭하면 버튼이 활성화 되었다는 것을 보여줄 것이고 다른것은 비활성화
// jQuery 프로그래밍
jQuery(document).ready(function($){
    // 캡슐화 $ === jQuery
    // .toggle-radio-container 내부의 button을 클릭하면
    // 클릭된 버튼은 활성화(시각적 표시), 다른 버튼은 비활성화
    
    // 1. 문서 객체 수집한 수, jQuery 객체화
    // context를 지정해서 찾아주는 게 더 빠르다(선택자 길게 늘어뜨리지 말자)
    var buttons = $('button', '.toggle-radio-container'); 
    var active_class = 'is-success';

    // 2. 이벤트 핸들러 정의

    // ※ 리팩토링
    var toggleRadioButton = function(e) {
        // ***메서드 체이닝 : 코드 유지보수 관점에서 좋지는 않음, **권장하지 않음
        // .end(): 다시 자기 자신으로 돌아옴
        // $(this)
        //     .siblings('.' + active_class)
        //     .removeClass(active_class)
        //     .end() 
        //     .addClass(active_class);

        // ***변수 참조 : 
        var $this = $(this); // 객체를 매번 찾는 게 아니라 변수에 참조를 해둔다.
        $this.siblings('.' + active_class).removeClass(active_class)
        // 클릭한 버튼 활성화
        $this.addClass(active_class);
    };

    // 3. 수집된 jQuery 객체에 이벤트 바인딩
    buttons.each(function(index, button){
        $(button).on('click', toggleRadioButton);
    });


});