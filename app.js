/* 渲染逻辑：从 data.js 的 SITE / RELEASES / COMPATIBILITY 生成页面 */

const CHANNEL_LABEL = { beta: "测试版", stable: "稳定版", legacy: "历史版本" };

function downloadUrl(release) {
  return SITE.mirrorBase + release.file;
}

function macfuseUrl() {
  return SITE.mirrorBase + SITE.macfuse.file;
}

function fmtSize(bytes) {
  if (!bytes) return "";
  if (bytes > 1 << 30) return (bytes / (1 << 30)).toFixed(1) + " GB";
  return (bytes / (1 << 20)).toFixed(1) + " MB";
}

/* ---------- Hero 最新版卡片 ---------- */
function renderLatest() {
  const latest = RELEASES.find((r) => r.latest) || RELEASES[0];
  const stable = RELEASES.find((r) => r.channel === "stable");

  document.getElementById("mirror-badge").textContent = SITE.mirrorBadge;
  document.getElementById("tagline").textContent = SITE.tagline;
  document.getElementById("updated").textContent = SITE.updated;

  const stableLink = document.getElementById("link-stable");
  if (stable && stable !== latest) {
    stableLink.textContent = `下载稳定版 ${stable.version}`;
    stableLink.href = downloadUrl(stable);
  } else {
    stableLink.parentElement.style.display = "none";
  }

  const card = document.getElementById("latest-card");
  const sizeLabel = latest.size ? ` · ${fmtSize(latest.size)}` : "";
  const macfuseBtn = latest.macfuse
    ? `<a class="btn btn-secondary" href="${macfuseUrl()}" download>⬇ macFUSE ${SITE.macfuse.version}</a>`
    : "";
  card.innerHTML = `
    <div class="ver-row">
      <span class="ver">${latest.version}</span>
      <span class="channel channel-${latest.channel}">${CHANNEL_LABEL[latest.channel]}</span>
      ${latest.macfuse ? '<span class="macfuse-tag">需 macFUSE</span>' : ""}
    </div>
    <div class="meta">
      <span>发布于 ${latest.date}</span>
      <span>${latest.macOS}</span>${sizeLabel}
    </div>
    <a class="btn" href="${downloadUrl(latest)}" download>
      ⬇ 下载最新版
    </a>
    ${macfuseBtn}
    <a class="btn btn-secondary" href="#releases">历史版本</a>
  `;
}

/* ---------- 版本列表 ---------- */
function renderReleases() {
  const list = document.getElementById("release-list");

  list.innerHTML = RELEASES.map(
    (r, i) => `
    <div class="release ${i === 0 ? "open" : ""}" data-index="${i}">
      <div class="release-head">
        <span class="ver">${r.version}</span>
        <span class="channel channel-${r.channel}">${CHANNEL_LABEL[r.channel]}</span>
        <span class="date">${r.date}</span>
        ${r.macfuse ? '<span class="macfuse-tag">需 macFUSE</span>' : ""}
        <span class="macos">${r.macOS}</span>
        <span class="chev">▶</span>
      </div>
      <div class="release-body">
        <div class="release-inner">
          <ul class="release-notes">
            ${r.notes.map((n) => `<li>${n}</li>`).join("")}
          </ul>
          <div class="release-actions">
            <a class="btn" href="${downloadUrl(r)}" download>⬇ 下载</a>
          </div>
        </div>
      </div>
    </div>`
  ).join("");

  list.querySelectorAll(".release-head").forEach((head) => {
    head.addEventListener("click", () => head.parentElement.classList.toggle("open"));
  });
}

/* ---------- 兼容矩阵 ---------- */
function renderCompat() {
  document.getElementById("compat-body").innerHTML = COMPATIBILITY.map(
    (row) => `
    <tr>
      <td>${row.macos}</td>
      <td>${row.newest}</td>
      <td>${row.oldest}</td>
    </tr>`
  ).join("");
}

renderLatest();
renderReleases();
renderCompat();