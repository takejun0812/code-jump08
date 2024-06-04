$(function () {
    $('.burger-btn').on('click', function () {
        $('.burger-btn').toggleClass('close');
        $('.nav-wrapper').toggleClass('fade');
        // $('body').toggleClass('noscroll');
    });
});

$(function () {
    $(".header-nav ul li a").on("click", function () {
        // $(".header-nav ul").toggleClass();
        $('.burger-btn.close').removeClass('close');
        $('.nav-wrapper.fade').removeClass('fade');
        $('body.noscroll').removeClass('noscroll');
    })
})

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
});

    $(function () {
        $(".review-item").on("inview", function () {
            $(this).addClass("inview");
        });
    });

    $('a[href^="#"]').click(function () {
        // クリック時の処理
        let href = $(this).attr('href');
        // let target = $(href == "#" || href == "" ? 'html' : href);
        let position = $(href).offset().top;
        let speed = 1000;
        $('html, body').animate({ scrollTop: position }, speed, "swing");
        return false;
    });


Resources
