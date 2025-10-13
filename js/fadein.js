$(function () {
    $(".drawer_toggle").click(function () {
        $(this).toggleClass("open");
        $(".header-nav").toggleClass("sp_open");
    });
    $(".header-nav a").click(function () {
        $(".drawer_toggle").removeClass("open");
        $(".header-nav").removeClass("sp_open");
    });
});
$(window).on("load", function () {
    $('.load-fadein').each(function () {
        $(this).addClass('scrollin');
    });
    setTimeout(function () {
        $('.load-delay-fadein').each(function () {
            $(this).addClass('scrollin');
        });
    }, 1000);
});
$(window).scroll(function () {
    $('.fadein').each(function () {
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();

        if (scroll > elemPos - windowHeight + 150) {
            $(this).addClass('scrollin');
        }
    });
});
$('.accordion-header').click(function () {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
});