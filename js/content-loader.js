document.addEventListener("DOMContentLoaded", () => {
  const lang = document.documentElement.lang || "ja";
  const content = window.siteContent?.[lang] || window.siteContent?.ja;

  // News list: clickable items
  const newsList = document.getElementById("newsList");
  if (newsList && content?.news) {
    newsList.innerHTML = content.news.map(item => `
      <li class="news-item">
        <a href="${item.url}" class="news-link">
          <span class="news-date">${item.date}</span>
          <span class="news-text">${item.text}</span>
        </a>
      </li>
    `).join("");
  }

  // Announcement list: plain text items
  const announcementList = document.getElementById("announcementList");
  if (announcementList && content?.announcements) {
    announcementList.innerHTML = content.announcements
      .map(item => `<li>${item}</li>`)
      .join("");
  }

  // Q&A list
  const qaList = document.getElementById("qaList");
  if (qaList && content?.qa) {
    qaList.innerHTML = content.qa.map((item, index) => `
      <div class="qa-item">
        <button class="qa-question" aria-expanded="false" aria-controls="qa-answer-${index}">
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
