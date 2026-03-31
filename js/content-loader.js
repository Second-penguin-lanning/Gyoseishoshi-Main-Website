document.addEventListener("DOMContentLoaded", () => {
  // 言語判定（必要なら拡張可）
  const lang = document.documentElement.lang === "ja" ? "ja" : "ja";

  // お知らせ表示
  const newsList = document.getElementById("newsList");
  if (newsList && typeof CONTENT !== "undefined" && CONTENT.news) {
    newsList.innerHTML = CONTENT.news.map(item => `
      <li>
        <a href="${item.url}">
          <span class="news-date">${item.date}</span>
          ${item[lang] || item.ja}
        </a>
      </li>
    `).join("");
  }

  // Q&A表示
  const qaList = document.getElementById("qaList");
  if (qaList && typeof CONTENT !== "undefined" && CONTENT.qa) {
    qaList.innerHTML = CONTENT.qa.map(item => `
      <div class="qa-item">
        <h4>Q. ${item.q[lang] || item.q.ja}</h4>
        <p>A. ${item.a[lang] || item.a.ja}</p>
      </div>
    `).join("");
  }
});
