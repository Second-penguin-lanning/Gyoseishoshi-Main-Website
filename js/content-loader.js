document.addEventListener("DOMContentLoaded", () => {
  const lang = document.documentElement.lang || "ja";
  const content = window.siteContent?.[lang] || window.siteContent?.ja;

  // News
  const newsList = document.getElementById("newsList");
  if (newsList && Array.isArray(content?.news)) {
    newsList.innerHTML = content.news.map(item => {
      return `
        <li>
          <a href="${item.url || '#'}" class="news-link">
            <span class="news-date">${item.date || ""}</span>
            <span class="news-text">${item.text || ""}</span>
          </a>
        </li>
      `;
    }).join("");
  }

  // Announcements
  const announcementList = document.getElementById("announcementList");
  if (announcementList && Array.isArray(content?.announcements)) {
    announcementList.innerHTML = content.announcements.map(item => {
      return `<li class="announcement-item">${item}</li>`;
    }).join("");
  }

  // Q&A
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

    qaList.querySelectorAll(".qa-question").forEach((btn) => {
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
