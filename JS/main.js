"use strict";

/*---------- GSAP 設定 ----------*/

//存在しない要素を取得しようとするときに出るエラーを非表示にする
gsap.config({
    nullTargetWarn: false,
});



// スライドイン  
gsap.fromTo(
    ".js_service",
    {
        y: 200,
        autoAlpha: 0,
    },
    {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: "Power4.inOut",
        scrollTrigger: {
            trigger: "#course",
            start: "top top",
            // markers:true,
        },
        stagger: {
            each: 0.2,
            from: "start",
        },
    }
);



// FAQ機能
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const isActive = faqItem.classList.contains('active');

        // 全てのFAQを閉じる
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // クリックされたFAQを開く（既に開いている場合は閉じる）
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});



// ハンバーガーメニュー
let isMenuOpen = false;
const hamburger = document.getElementById('hamburger');
const neonMenu = document.getElementById('neon-menu');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
    if (isMenuOpen) {
        closeMenu();
    } else {
        openMenu();
    }
});

overlay.addEventListener('click', closeMenu);

function openMenu() {
    isMenuOpen = true;
    hamburger.classList.add('active');
    neonMenu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    isMenuOpen = false;
    hamburger.classList.remove('active');
    neonMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
};