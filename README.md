# CODEX Platform 中文网

CODEX Platform（原 Device Manager）的中文信息站：最新版本下载、中文安装指引、版本历史与 macOS 兼容性速查。

纯静态站点，零依赖、无构建步骤，design 参照 screen.studio（近黑底 + 电光紫）。

## 在线访问

GitHub Pages 启用后：`https://jeremyzhu666.github.io/codex-platform-cn/`

## 页面结构

| 板块 | 内容 |
|---|---|
| 下载 | 最新版本卡片，一键下载，直达 macFUSE 与官方页面 |
| 功能 | ARRI 无损压缩技术（HDE）介绍 |
| 安装 | 装 pkg → 完全磁盘访问 → macFUSE → 启动，四步指引 |
| 所有版本 | 测试版 / 稳定版 / 历史版本，含官方 changelog 摘要 |
| 系统兼容 | macOS 版本 ↔ CODEX Platform 版本对照表 |

## 本地运行

```bash
npm run dev          # 默认 127.0.0.1:7100
npm run dev -- --port 8080 --host 0.0.0.0
```

## 维护

所有内容都在 `data.js` 一个文件里，改数据不用碰页面代码：

- `SITE` — 站点名称、标语、外链（官网 / Legacy / macFUSE）、更新日期
- `RELEASES` — 版本列表：`version` / `channel`（beta / stable / legacy）/ `date` / `file` / `macOS` / `macfuse` / `notes`
- `COMPATIBILITY` — macOS 兼容矩阵
- `mirrorBase` — 安装包前缀。默认走本站 `/files/` 目录；接入 OSS/CDN 后改成绝对地址即可
- `file: null` 的版本会自动跳转到官方 Legacy 页面（表示本站未托管该安装包）

新增版本：往 `RELEASES` 数组头部加一条，并把最新条的 `latest: true` 移过去。

## 文件

```
index.html    页面结构
styles.css    样式（screen.studio 风格设计系统）
data.js       站点配置与全部内容数据
app.js        渲染逻辑
server.js     零依赖静态服务器（仅本地开发用）
files/        安装包存放目录（.pkg 放这里，或改用 OSS/CDN）
```

## 部署

推送到 `main` 分支即可。GitHub Pages：Settings → Pages → Deploy from a branch → `main` /(root)。

绑定自有域名：DNS 加 CNAME 记录指向 `jeremyzhu666.github.io`，再到 Pages 设置里填域名。

## 说明

- 版本信息与 changelog 摘自 CODEX 官方 Release Notes，以官方为准
- 安装包文件来自官方发布渠道；软件版权归 CODEX Tech Limited 所有，使用须遵守其 EULA
- CODEX、CaptureDrive、CompactDrive、TransferDrive 均为 CODEX Tech Limited 的商标
