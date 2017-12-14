jQuery(document).ready(function ($) {
    var buttons = $('button', '.toggle-radio-container');

    var active_class = 'is-loading';
    var toggleRadioButton = function toggleRadioButton(e) {
        var $this = $(e.target);
        // $this.siblings(`.${active_class}`).removeClass(active_class)
        // $this.addClass(() => {
        //     window.setTimeout(()=> $this.removeClass(active_class), 2000);
        //     return active_class;
        // }); 
        $this.radioClass(active_class);
    };

    buttons.each(function (index, button) {
        $(button).on('click', toggleRadioButton);
    });
});
