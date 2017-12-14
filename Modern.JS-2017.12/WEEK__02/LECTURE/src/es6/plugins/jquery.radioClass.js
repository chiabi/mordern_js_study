// jQuery Plugin Shell
// IIFE 패턴
(($ = window.jQuery) => {
    try {
        // 내가 만든 플러그인을 이미 지원하는가?
        if ( !$.fn.radioClass ) {
            // 존재하지 않을 경우 확장
            // fn으로 확장할 경우 객체(인스턴스)가 있어야 쓸 수 있음
            // $().radioClass(name);
            // $.fn.radioClass = name => {
            //     // 메서드가 할 일(Logic)
            //     // this는 누구?
            //     // jQuery 객체 자신
            //     // 주의! 화살표 함수를 사용하면 this는 jQuery 객체가 아니게 된다.
            //     console.log(this); // window
            //     // 형제를 찾아야 한다.
            //     // 형제 중 name에 해당하는 대상을 찾아
            //     // name에 해당하는 클래스를 제거
            //     // 자신에게는 name에 해당하는 클래스를 추가
            //     console.log(name);
            // };
            $.fn.radioClass = function(name, cb = () => {}) {  // cb: callBack의 축약어(함수여야한다.)
                // console.log(this); // this가 객체 자신을 가리킨다.
                // 형제를 찾아야 한다.
                const siblings = this.siblings();
                // 형제 중 name에 해당하는 대상을 찾아
                // name에 해당하는 클래스를 제거
                // .find() vs .filter()
                // 두 메서드의 차이는 css로 따지면 아래와 같다.
                // `p a:nth-child(2)` vs `p:nth-child(2)`

                // .filter(selector)
                siblings.filter(`.${name}`).removeClass(name);
                // 자신에게는 name에 해당하는 클래스를 추가
                // console.log(name);
                this.addClass(name);

                // 플러그인 공정이 모두 끝나면 함수를 실행하라
                // typeof cb === 'function' && cb();
                cb();

                // Method Chaining을 위해 this를 리턴한다.
                return this;
            };
        }
    } catch (error) {
        console.error(error);
    }
})();