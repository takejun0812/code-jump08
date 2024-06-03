$(function () {
    $('.burger-btn').on('click', function () {
        $('.burger-btn').toggleClass('close');
        // $('.burger-btn.close').removeClass('close');
        $('.nav-wrapper').toggleClass('fade');
        $('body').toggleClass('noscroll');
    });
});

let winHeight, winScroll, scrollPos;
$(window).on('load scroll', function () {
    winScroll = $(window).scrollTop();
    winHeight = $(window).height();
    scrollPos = winHeight * 0.9 + winScroll;
    $(".reason-comment").each(function () {
        if ($(this).offset().top <= scrollPos) {
            $(this).addClass("show");
        } else {
            $(this).removeClass("show");
        }
    });

    $(window).on('load scroll', function () {

        var box = $('.review-item');
        var animated = 'animated';

        box.each(function () {

            var boxOffset = $(this).offset().top;
            var scrollPos = $(window).scrollTop();
            var wh = $(window).height();

            if (scrollPos > boxOffset - wh + 100) {
                $(this).addClass(animated);
            }
        });
    });
});

Resources
