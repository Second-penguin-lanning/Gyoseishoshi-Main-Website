document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");
    const langBtn = document.querySelector(".lang-btn");
    const langMenu = document.querySelector(".lang-menu");

    // 言語メニュー
    if(langBtn && langMenu){
        langBtn.addEventListener("click", function(){
            langMenu.classList.toggle("show");
        });
    }

    if (!hamburger || !nav) return;

    // メニュー開閉
    const toggleMenu = (forceClose = false) => {
        const isOpen = forceClose ? false : hamburger.classList.toggle("active");
        nav.classList.toggle("show", isOpen);
        if (forceClose) hamburger.classList.remove("active");
    };

    // ハンバーガークリック
    hamburger.addEventListener("click", () => toggleMenu());

    // リンククリックで閉じる
    nav.addEventListener("click", (e) => {
        if (e.target.tagName === 'A') toggleMenu(true);
    });

});
