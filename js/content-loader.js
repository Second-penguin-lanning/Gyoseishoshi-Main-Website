document.addEventListener("DOMContentLoaded", () => {
  const lang = document.documentElement.lang || "ja";
  const content = window.siteContent?.[lang] || window.siteContent?.ja;

  // =========================
  // News list (clickable)
  // =========================
  const newsList = document.getElementById("newsList");
  if (newsList && Array.isArray(content?.news)) {
    newsList.innerHTML = content.news.map(item => {
      const date = item.date ? `<span class="news-date">${item.date}</span>` : "";
      const text = item.text || "";
      const url = item.url || "#";
      return `
        <li class="news-item">
          <a href="${url}" class="news-link">
            ${date}
            <span class="news-text">${text}</span>
          </a>
        </li>
      `;
    }).join("");
  }

  // =========================
  // Announcements (plain text)
  // =========================
  const announcementList = document.getElementById("announcementList");
  if (announcementList && Array.isArray(content?.announcements)) {
    announcementList.innerHTML = content.announcements
      .map(item => `<li class="announcement-item">${item}</li>`)
      .join("");
  }

  // =========================
  // Q&A accordion
  // =========================
  const qaList = document.getElementById("qaList");
  if (qaList && Array.isArray(content?.qa)) {
    qaList.innerHTML = content.qa.map((item, index) => `
      <div class="qa-item">
        <button class="qa-question" type="button" aria-expanded="false" aria-controls="qa-answer-${index}">
          ${item.q}
        </button>
        <div class="qa-answer" id="qa-answer-${index}" hidden>
          <p>${item.a}</p>
        </div>
      </div>
    `).join("");

    const buttons = qaList.querySelectorAll(".qa-question");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("aria-controls");
        const answer = document.getElementById(targetId);
        const expanded = btn.getAttribute("aria-expanded") === "true";

        btn.setAttribute("aria-expanded", String(!expanded));
        if (answer) answer.hidden = expanded;
      });
    });
  }
});
