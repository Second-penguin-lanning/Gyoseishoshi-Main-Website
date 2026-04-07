/* ── news-list.js : /news/ 一覧ページ共通スクリプト ── */

(function () {
    const lang = document.documentElement.lang || 'ja';
    const content = window.siteContent?.[lang] || window.siteContent?.ja;

    /* 言語別ラベル */
    const labels = {
        ja: { detail: "詳しく→", empty: "データがありません。" },
        en: { detail: "Details→", empty: "No data available." },
        tl: { detail: "Detalye→", empty: "Walang datos." },
        id: { detail: "Detail→",  empty: "Tidak ada data." }
    };
    const L = labels[lang] || labels.ja;

    /* タブ切替 */
    window.switchTab = function (type) {
        document.getElementById('tabNews')
            .classList.toggle('active', type === 'news');
        document.getElementById('tabAnnounce')
            .classList.toggle('active', type === 'announcements');
        renderList(type);
    };

    /* リスト描画 */
    function renderList(type) {
        const listBody = document.getElementById('listBody');
        const items = content?.[type];

        if (!Array.isArray(items) || items.length === 0) {
            listBody.innerHTML =
                `<li class="no-data">${L.empty}</li>`;
            return;
        }

        listBody.innerHTML = items.map(item => {
            if (typeof item === 'string') {
                return `<li><span class="item-text">${item}</span></li>`;
            }
            const linkHtml = item.url
                ? `<a href="${item.url}" class="item-link">${L.detail}</a>`
                : '';
            return `
                <li>
                    <span class="item-date">${item.date || ''}</span>
                    <span class="item-text">${item.text || ''}${linkHtml}</span>
                </li>`;
        }).join('');
    }

    /* 初期表示：URLパラメータ ?type=announcements でお知らせタブ */
    document.addEventListener('DOMContentLoaded', function () {
        const params = new URLSearchParams(window.location.search);
        const initType =
            params.get('type') === 'announcements' ? 'announcements' : 'news';
        window.switchTab(initType);
    });
})();
