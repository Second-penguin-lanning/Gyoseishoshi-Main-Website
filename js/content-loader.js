document.addEventListener("DOMContentLoaded", () => {
  const newsList = document.getElementById("newsList");

  function getCurrentLang() {
    return (
      localStorage.getItem("lang") ||
      document.documentElement.lang ||
      "ja"
    ).toLowerCase();
  }

  function getNewsTitle(item, lang) {
    return item[lang] || item.ja || item.en || item.title || "お知らせ";
  }

  // お知らせ表示
  if (newsList && typeof CONTENT !== "undefined" && Array.isArray(CONTENT.news)) {
    window.renderNews = function () {
      const lang = getCurrentLang();

      newsList.innerHTML = CONTENT.news.map(item => {
        const href = item.url || item.link || item.href || "#";
        const title = getNewsTitle(item, lang);
        const date = item.date || "";

        return `
          <li>
            <a href="${href}">
              <span class="news-date">${date}</span>
              ${title}
            </a>
          </li>
        `;
      }).join("");
    };

    window.renderNews();
  }

  // Q&A表示
  const qaList = document.getElementById("qaList");
  if (qaList && typeof CONTENT !== "undefined" && Array.isArray(CONTENT.qa)) {
    const lang = getCurrentLang();

    qaList.innerHTML = CONTENT.qa.map(item => `
      <div class="qa-item">
        <h4>Q. ${item.q[lang] || item.q.ja}</h4>
        <p>A. ${item.a[lang] || item.a.ja}</p>
      </div>
    `).join("");
  }
});
