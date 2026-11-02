# CODEX Platform 中文网

CODEX Platform 的中文信息站：版本下载、安装指引与兼容性速查。

**在线访问：** https://jeremyzhu666.github.io/codex-platform-cn/

## 怎么用

- **更新版本**：打开 `data.js`，在 `RELEASES` 数组最前面加一条新版本，把旧的 `latest: true` 删掉
- **改下载地址**：`data.js` 里的 `mirrorBase`，默认走本站 `files/` 目录，接入 OSS/CDN 后改成你的地址
- **更新兼容表**：`data.js` 里的 `COMPATIBILITY`
- **上线**：推送到 `main` 分支，GitHub Pages 自动更新；绑域名在 Settings → Pages 里填，DNS 加 CNAME 指向 `jeremyzhu666.github.io`
