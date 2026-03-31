document.addEventListener("DOMContentLoaded", () => {
  const newsList = document.getElementById("newsList");
  const qaList = document.getElementById("qaList");

  if (typeof CONTENT === "undefined") return;

  function getCurrentLang() {
    return (
      localStorage.getItem("lang") ||
      document.documentElement.lang ||
      "ja"
    ).toLowerCase();
  }

  function getNewsTitle(item, lang) {
    return item[lang] || item.ja || item.en || item.tl || item.id || item.title || "お知らせ";
  }

  function getLocalizedText(obj, lang) {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    return obj[lang] || obj.ja || obj.en || obj.tl || obj.id || "";
  }

  window.renderNews = function () {
    if (!newsList || !Array.isArray(CONTENT.news)) return;

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

  window.renderQA = function () {
    if (!qaList || !Array.isArray(CONTENT.qa)) return;

    const lang = getCurrentLang();

    qaList.innerHTML = CONTENT.qa.map(item => `
      <div class="qa-item">
        <h4>Q. ${getLocalizedText(item.q, lang)}</h4>
        <p>A. ${getLocalizedText(item.a, lang)}</p>
      </div>
    `).join("");
  };

  window.renderNews();
  window.renderQA();
});
