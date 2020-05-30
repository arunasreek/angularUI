$(function () {
    var selectInvalidFunction = function () {
      
        if ($("select.manage__form__select_dd").hasClass('is-invalid')) {
            $("div.manage__form__select_dd").addClass('is-invalid');
        }
        else {
            $("div.manage__form__select_dd").removeClass('is-invalid');
        }
    }

    setInterval(selectInvalidFunction(),300);
})