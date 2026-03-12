ocument.addEventListener('DOMContentLoaded', () => {

    /* =============================
       ハンバーガーメニュー
    ============================= */

    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");

    if (hamburger && nav) {

        const toggleMenu = (forceClose = false) => {
            const isOpen = forceClose ? false : hamburger.classList.toggle("active");
            nav.classList.toggle("show", isOpen);
            if (forceClose) hamburger.classList.remove("active");
        };

        hamburger.addEventListener("click", () => toggleMenu());

        nav.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') toggleMenu(true);
        });
    }

    /* =============================
       アコーディオン
    ============================= */

    const accordions = document.querySelectorAll(".accordion-header");

    accordions.forEach(button => {

        button.addEventListener("click", () => {

            const content = button.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }

        });

    });

});
