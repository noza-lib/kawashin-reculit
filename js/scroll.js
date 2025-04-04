document.addEventListener('DOMContentLoaded', function() {
    // ヘッダーナビのリンクをすべて取得
    const navLinks = document.querySelectorAll('.header-nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // デフォルトの挙動をキャンセル
            e.preventDefault();
            
            // リンクのhref属性から対象のIDを取得
            const targetId = this.getAttribute('href');
            
            // 対象の要素を取得
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // ヘッダーの高さを考慮したスクロール位置を計算
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                // スムーズスクロールを実行
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // トップに戻るボタンの機能
    const toTopButton = document.getElementById('to-top-button');

    // スクロールイベントの監視
    window.addEventListener('scroll', () => {
        // ページが100px以上スクロールされたらボタンを表示
        if (window.scrollY > 100) {
            toTopButton.style.display = 'block';
        } else {
            toTopButton.style.display = 'none';
        }
    });

    // ボタンクリック時の処理
    toTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}); 