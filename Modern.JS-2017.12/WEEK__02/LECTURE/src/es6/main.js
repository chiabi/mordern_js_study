jQuery(document).ready($ => { 
    let buttons = $('button', '.toggle-radio-container'); 

    let active_class = 'is-loading';
    let toggleRadioButton = e => { 
        let $this = $(e.target); 
        // $this.siblings(`.${active_class}`).removeClass(active_class)
        // $this.addClass(() => {
        //     window.setTimeout(()=> $this.removeClass(active_class), 2000);
        //     return active_class;
        // }); 
        $this.radioClass(active_class, function(){
            window.setTimeout(() => $this.removeClass(active_class), 2000);
        });
    };    

    buttons.each((index, button) => {
        $(button).on('click', toggleRadioButton);
    });
});
