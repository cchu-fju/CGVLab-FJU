# CGV Lab 動畫新版｜Windows + GitHub Pages 更新教學

## 0. 新版以現有 GitHub 專案結構為基礎

Repository：https://github.com/cchu-fju/CGVLab-FJU
正式網址：https://cchu-fju.github.io/CGVLab-FJU/

根目錄應直接包含 `src/`、`public/`、`package.json`、`vite.config.js`、`.github/workflows/deploy.yml`，而不是再包一層子資料夾。

## 1. 下載 ZIP，放到 Downloads

假設下載檔名 `CGVLab-FJU-Animated-Update.zip`。

在 Windows CMD 執行：

```bat
cd /d "%USERPROFILE%\CGVLab-FJU"
powershell -NoProfile -Command "Expand-Archive -LiteralPath '$env:USERPROFILE\Downloads\CGVLab-FJU-Animated-Update.zip' -DestinationPath '$env:USERPROFILE\CGVLab-FJU' -Force"
```

> 在 CMD 呼叫 PowerShell 時 `$env:USERPROFILE` 會由 PowerShell 處理。若檔案下載到不同路徑，請更換 ZIP 路徑。

### 確認檔案

```bat
dir src\components\MistBackground.vue
dir src\components\CourseDetail.vue
dir src\courseContent.js
git status
```

若 `git status` 仍然顯示 `nothing to commit`，請確認 ZIP 是否放在 Downloads 以及是否確實覆蓋到本機 `CGVLab-FJU` 資料夾。

## 2. 本機測試動畫

```bat
node --version
npm install
npm run dev
```

用 Chrome/Edge 打開 `http://localhost:5173/`（若 Vite 顯示不同埠號，請以終端機顯示為準）。

預期結果：首頁背後可看到 **多層淡藍／薄綠／淡紫的雲帶與 SVG 線條緩慢移動**；右下角顯示「雲霧流動中 · 暫停動畫」。點擊可暫停，再點擊可恢復。

請注意：**不能直接雙擊 `index.html` 來測試 Vue 專案**，必須透過 Vite dev server 或 build 後網站。

## 3. 提交與推送

```bat
git add -A
git commit -m "Enhance CGV Lab animated mist and academic UI"
git push origin main
```

## 4. GitHub Pages 自動部署

1. 到 https://github.com/cchu-fju/CGVLab-FJU/settings/pages
2. 在 **Build and deployment → Source** 選 **GitHub Actions**。
3. 到 https://github.com/cchu-fju/CGVLab-FJU/actions 查看 **Deploy CGV Lab to GitHub Pages** 是否出現綠色勾勾。
4. 到 https://cchu-fju.github.io/CGVLab-FJU/ ，按 **Ctrl+Shift+R** 強制更新快取。

`vite.config.js` 設定 `base: '/CGVLab-FJU/'`，不可改成 `/cgv-lab/`。

## 5. 若網站看起來還是沒有動畫

1. 先確認右下角按鈕寫著「雲霧流動中 · 暫停動畫」，如果顯示「動畫已暫停 · 恢復流動」，先點一下。
2. 檢查 Windows：**設定 → 協助工具 → 視覺效果 → 動畫效果** 是否關閉；瀏覽器會讀取 `prefers-reduced-motion`，此設定開啟時網站遵守無障礙偏好而停止動畫。
3. 以 Chrome/Edge 無痕視窗打開，並按 `Ctrl+Shift+R`。
4. 檢查 GitHub Actions 最新一次部署是否成功，並確認 Repo 新版 `MistBackground.vue` 有 `mist-cloud` 與 `mist-ribbons`。
5. 網站要停留 5～10 秒才能明顯看出緩慢飄移（不是快速閃爍的特效）。
6. 若網站有內容但動畫沒動，按 F12 → Elements，檢查 `.mist-scene`，以及 `.cloud-one` 的 computed `animation-name` 是否為 `mist-cross-one`。若是 `none`，多半是系統減少動畫設定或 CSS 被覆寫。

## 6. 原有教學內容不變

- Unity HW2–HW8，每份 3 支影片，期末 10 組。
- Visualization HW1–HW3，每份 3 支影片，期末 10 組。
- HCI 期中 Low-fi 10 組圖片、期末 Hi-fi 10 組圖片。

請編輯 `src/courseContent.js`，作品圖片放在 `public/student-work/hci/`。
