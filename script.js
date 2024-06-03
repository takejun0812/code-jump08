$(function () {
    $('.burger-btn').on('click', function () {
        $('.burger-btn').toggleClass('close');
        // $('.burger-btn.close').removeClass('close');
        $('.nav-wrapper').toggleClass('fade');
        $('body').toggleClass('noscroll');
    });
});

let winHeight,winScroll,scrollPos;
$(window).on('load scroll',function(){
	winScroll = $(window).scrollTop();
	winHeight = $(window).height();
	scrollPos = winHeight * 0.9 + winScroll;
	$(".reason-comment").each(function(){
		if($(this).offset().top <= scrollPos){
			$(this).addClass("show");
		}else{
			$(this).removeClass("show");
		}
	});
});

Resources
