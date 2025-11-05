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

// フェードイン要素をチェックする関数
function checkFadeInElements() {
    $('.fadein').each(function () {
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();

        if (scroll > elemPos - windowHeight + 150) {
            $(this).addClass('scrollin');
        }
    });
}

$(window).on("load", function () {
    $('.load-fadein').each(function () {
        $(this).addClass('scrollin');
    });
    setTimeout(function () {
        $('.load-delay-fadein').each(function () {
            $(this).addClass('scrollin');
        });
    }, 1000);

    // ページ読み込み時に既にビューポート内の要素をチェック
    checkFadeInElements();
});

// ブラウザの戻るボタンで戻ってきた場合にも実行
$(window).on("pageshow", function (event) {
    // ページがキャッシュから復元された場合
    if (event.originalEvent.persisted) {
        checkFadeInElements();
    }
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