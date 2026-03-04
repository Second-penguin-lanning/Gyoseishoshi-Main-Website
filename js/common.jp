document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");

    if (!hamburger || !nav) return;

    // メニュー開閉の共通関数
    const toggleMenu = (forceClose = false) => {
        const isOpen = forceClose ? false : hamburger.classList.toggle("active");
        nav.classList.toggle("show", isOpen);
        if (forceClose) hamburger.classList.remove("active");
    };

    // クリックイベント
    hamburger.addEventListener("click", () => toggleMenu());

    // リンククリック時に閉じる
    nav.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') toggleMenu(true);
    });
});
