// ハンバーガーメニューの機能
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const headerNav = document.getElementById('header-nav');
    const navLinks = headerNav.querySelectorAll('a');

    // ハンバーガーメニューのクリックイベント
    hamburgerMenu.addEventListener('click', function() {
        headerNav.classList.toggle('active');
        
        // アイコンの切り替え
        const icon = hamburgerMenu.querySelector('i');
        if (headerNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // ナビゲーションリンクのクリック時にメニューを閉じる
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            headerNav.classList.remove('active');
            const icon = hamburgerMenu.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // メニュー外のクリック時にメニューを閉じる
    document.addEventListener('click', function(event) {
        if (!hamburgerMenu.contains(event.target) && !headerNav.contains(event.target)) {
            headerNav.classList.remove('active');
            const icon = hamburgerMenu.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}); 