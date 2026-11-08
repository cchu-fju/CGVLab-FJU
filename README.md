# CGV Lab — 輔仁大學電腦圖學與視覺化實驗室

Vue 3 + Vite + D3.js GitHub Pages 網站。這是 `cchu-fju/CGVLab-FJU` Repository 的完整根目錄版本。

## 本次更新（2026-11）

- 全站文字增大：導覽、標題、研究卡片、教學課程、論文、頁尾、作品文字等。
- 五色視覺識別：藍、綠、黃、紫、紅，套用於區塊邊線、標記、研究卡片、論文列、課程卡片。
- 保留可暫停的流動雲霧動態背景，並支援 prefers-reduced-motion。
- 研究計畫公開列表與導覽暫時移除；研究區標示「研究計畫目前申請中」。
- Teaching 課程列表增加三個專屬頁面入口：Unity、資料分析與視覺化、HCI。
- Unity：HW2–HW8 共 7 個作業區塊；每份作業 3 個 YouTube 欄位（21 個）；期末 10 組影片（10 個）；合計 31 個。
- 資料分析與視覺化：HW1–HW3 共 3 個作業區塊；每份作業 3 個 YouTube 欄位（9 個）；期末 10 組影片（10 個）；合計 19 個。
- HCI：期中 Low-fi 10 組圖片、期末 Hi-fi 10 組圖片，共 20 個圖片欄位。
- 目前影片／圖片欄位為空白佔位，**未虛構學生作品**。填入實際連結或照片後，網站會自動顯示。

## 如何執行

建議安裝 Node.js 22 以上：

```bash
npm install
npm run dev
```

開啟 `http://localhost:5173/`。

正式建置：

```bash
npm run build
npm run preview
```

## 如何修改學生作品

只需編輯 `src/courseContent.js`：

### YouTube

例如 Unity 作業二的第一支影片：

```js
assignments: [
  { title: '作業 2 · HW2', description: '', videos: [
    'https://www.youtube.com/watch?v=XXXXXXXXXXX',
    '',
    ''
  ] },
  // 其餘作業 ...
]
```

**請保留每個作業 `videos` 三個位置**。如果要更簡便，亦可維持現有自動產生的陣列，於 `export const courseContent` 之後加入設定：

```js
courseContent.unity.assignments[0].videos[0] = 'https://youtu.be/XXXXXXXXXXX'
courseContent.unity.finalProjects[0].youtube = 'https://youtu.be/XXXXXXXXXXX'
courseContent.unity.finalProjects[0].title = '作品名稱'
courseContent.visualization.assignments[0].videos[0] = 'https://youtu.be/XXXXXXXXXXX'
courseContent.visualization.finalProjects[0].youtube = 'https://youtu.be/XXXXXXXXXXX'
```

`assignments[0]` 代表第一份列出的作業，因此 Unity 是 HW2；Visualization 是 HW1。`finalProjects[0]` 是第 1 組。支援 YouTube 標準網址、短網址、Shorts 網址、embed 網址或 11 碼 ID；會使用 YouTube 隱私增強模式播放器。

### HCI 作品圖片

將圖片放到 `public/student-work/hci/`，例如 `public/student-work/hci/lowfi-group01.jpg`，再在 `src/courseContent.js` 的最後加入：

```js
courseContent.hci.galleries[0].items[0].image = 'student-work/hci/lowfi-group01.jpg'
courseContent.hci.galleries[0].items[0].title = '低擬真原型題目'
courseContent.hci.galleries[1].items[0].image = 'student-work/hci/hifi-group01.jpg'
courseContent.hci.galleries[1].items[0].title = '高擬真原型題目'
```

其中 `galleries[0]` 為期中 Low-fi、`galleries[1]` 為期末 Hi-fi。圖片請先取得學生公開展示同意。

## 課程網址

- `https://cchu-fju.github.io/CGVLab-FJU/#/course/unity`
- `https://cchu-fju.github.io/CGVLab-FJU/#/course/visualization`
- `https://cchu-fju.github.io/CGVLab-FJU/#/course/hci`

以上使用 hash-based routing，部署在 GitHub Pages 不需要設定 SPA 404 fallback。

## GitHub Pages 部署

`vite.config.js` 已設定 `base: '/CGVLab-FJU/'`。

1. 把 ZIP 解壓縮後的 **所有內容直接上傳到 Repository 根目錄**，不是另一層資料夾。
2. 確認根目錄有 `package.json`, `index.html`, `vite.config.js`, `src/`, `.github/workflows/deploy.yml`。
3. GitHub → Settings → Pages → Build and deployment → Source 設為 **GitHub Actions**。
4. 推送到 `main`，或在 Actions 內手動執行 `Deploy CGV Lab to GitHub Pages`。
5. 部署成功後瀏覽 `https://cchu-fju.github.io/CGVLab-FJU/`。

Windows CMD 範例（請從專案資料夾執行；不要在 `C:\Windows\System32` 操作）：

```bat
cd /d "%USERPROFILE%\CGVLab-FJU"
git add -A
git commit -m "Expand CGV Lab teaching showcases and colorful UI"
git push origin main
```

`git push` 若出現認證錯誤，請先修復 Git Credential Manager。GitHub Pages 必須等 push 與 Actions 都成功才會更新。

## 主要檔案

- `src/App.vue`：首頁與主要導覽
- `src/style.css`：字體、顏色、雲霧、響應式樣式
- `src/data.js`：研究方向、論文與課程概要
- `src/courseContent.js`：作業影片、期末專案與 HCI 圖片資料（主要編輯處）
- `src/components/CourseDetail.vue`：三個課程共用展示頁
- `src/components/MistBackground.vue`：動態雲霧
- `src/components/ResearchGraph.vue`、`PublicationChart.vue`：D3.js 互動圖表

## 提醒

學生作品照片及 YouTube 影片由網站維護者填入，請確認公開權限及學生授權。檔案中的教師簡介和論文為示例內容，對外發布前建議再核對官方資料與 DBLP。
