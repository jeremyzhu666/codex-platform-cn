/* ============================================================
 * 站点配置 —— 改这里就能维护本站，不用动页面代码
 * ============================================================
 * mirrorBase: 安装包的托管前缀。
 *   - 默认为本站 /files/ 目录：把下载好的安装包放进项目 files/ 文件夹即可
 *   - 上了 OSS/CDN 后改成绝对地址，如 https://mirrors.example.com/codex/
 * macfuse: 与 8.1+ 配套提供的 macFUSE 安装包（.dmg）
 * ============================================================ */

const SITE = {
  product: "CODEX Platform",
  tagline: "CODEX 存储介质管理软件",
  macfuse: { version: "5.3.3", file: "macfuse-5.3.3.dmg", url: "/files/macfuse-5.3.3.dmg" },
  mirrorBase: "/files/",
  updated: "2026-11-02",
};

/* channel: beta = 测试版 | stable = 稳定版 | legacy = 历史版本 */
const RELEASES = [
  {
    version: "8.1.0 public beta 2",
    channel: "beta",
    date: "2026-10-01",
    file: "CodexPlatform-8.1.0publicbeta2-06803.pkg",
    url: "//tnvl5cvb0.hn-bkt.clouddn.com/CodexPlatform-8.1.0publicbeta2-06803.pkg",
    size: 58388003,
    macOS: "macOS 27 Golden Gate / macOS 26 Tahoe",
    macfuse: true,
    latest: true,
    notes: [
      "支持 macOS 27 Golden Gate",
      "Codex Platform UI 现在统一管理所有 Codex 后台进程的启动/停止",
      "当 CODEX 管理的卷已加载时，退出 Codex Platform 会弹出确认提示",
      "改用 macFUSE（替代 X2XFUSE），需单独安装",
      "更新 EULA",
    ],
  },
  {
    version: "8.0.1",
    channel: "stable",
    date: "2026-09-16",
    file: "CodexPlatform-8.0.1-06789.pkg",
    url: "//tnvl5cvb0.hn-bkt.clouddn.com/CodexPlatform-8.0.1-06789.pkg",
    size: 60285793,
    macOS: "macOS 26 Tahoe / macOS 15 Sequoia / macOS 14 Sonoma",
    macfuse: false,
    notes: [
      "修复检查 X2XFUSE 时的路径定位问题",
      "移除 Compact Drive 多余的 Validate 选项",
      "调整 Codex 偏好设置面板按钮，避免重叠",
    ],
  },
  {
    version: "8.0.0",
    channel: "legacy",
    date: "2026-06-11",
    file: "CODEXPlatform-8.0.0.pkg",
    macOS: "macOS 26 Tahoe / macOS 15 Sequoia / macOS 14 Sonoma",
    macfuse: false,
    notes: [
      "所有 ALEXA 摄像机开放 MXF/HDE 文件格式",
      "Compact Drive 在 macOS 上改为“bit-flip”擦除，可配合 Parashoot 恢复数据",
      "Capture Drive 同时提供 MXF/HDE 与 MXF/ARRIRAW，兼容 Silverstack",
      "完全磁盘访问列表中显示 Codex Platform（替代 drserver）",
      "更新 X2XFUSE 5.0.7 与 HDE SDK 5.3.1",
    ],
  },
];

/* macOS 版本兼容矩阵（来自官方文档） */
const COMPATIBILITY = [
  { macos: "macOS 27 Golden Gate", newest: "8.1.0", oldest: "8.1.0" },
  { macos: "macOS 26 Tahoe", newest: "8.0.1", oldest: "7.6.0" },
  { macos: "macOS 15 Sequoia", newest: "8.0.1", oldest: "7.4.0" },
];