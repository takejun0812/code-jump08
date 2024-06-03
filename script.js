$(function () {
    $('.burger-btn').on('click', function () {
        $('.burger-btn').toggleClass('close');
        // $('.burger-btn.close').removeClass('close');
        $('.nav-wrapper').toggleClass('fade');
        $('body').toggleClass('noscroll');
    });
});


Resources
