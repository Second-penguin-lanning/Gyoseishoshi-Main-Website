document.addEventListener("DOMContentLoaded", function () {

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

    nav.addEventListener("click", (e) => {
        const link = e.target.closest("a");
      if (link) {
    setTimeout(() => toggleMenu(true), 100);
        }
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

/* =============================
   サービス切り替え
============================= */

function showService(type) {

    document.getElementById("company-services").style.display = "none";
    document.getElementById("country-services").style.display = "none";
    document.getElementById("worker-services").style.display = "none";

    document.getElementById(type + "-services").style.display = "block";

    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });

}
