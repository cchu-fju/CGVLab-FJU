# 輔大 CGV Lab GitHub Pages 部署指南

Repository: https://github.com/cchu-fju/CGVLab-FJU

公開網址（成功部署後）：https://cchu-fju.github.io/CGVLab-FJU/

## 修正重點
1. `package.json`、`index.html`、`vite.config.js`、`src/`、`public/`、`.github/` 必須直接位於 Repository 根目錄，不能再包一層 `cgv-lab/`。
2. `vite.config.js` 已設定 `base: '/CGVLab-FJU/'`。
3. GitHub Actions 設定在 `.github/workflows/deploy.yml`，會自動 build 並上傳 `dist/`。
4. 在 Repository **Settings → Pages → Build and deployment → Source** 選擇 **GitHub Actions**。
5. Repository **Settings → Actions → General** 確認允許 Actions；**Actions** 頁面可手動執行 Deploy CGV Lab to GitHub Pages。

## 在 Windows CMD 上傳這份修正專案（建議）
先從 GitHub clone 已存在的 Repository；下載本 ZIP 並解壓縮，**將解壓縮所得的所有檔案（包含隱藏的 `.github`）複製到 clone 資料夾根目錄**。舊的 `cgv-lab/` 資料夾可以刪除。

```bat
git clone https://github.com/cchu-fju/CGVLab-FJU.git
cd CGVLab-FJU
REM 此時將 ZIP 根目錄中的檔案全部複製進來，並移除舊 cgv-lab 資料夾
rmdir /s /q cgv-lab
git add -A
git commit -m "Fix GitHub Pages deployment path"
git push origin main
```

如果使用 Windows 檔案總管複製，請先開啟「顯示隱藏的項目」，確認 `.github/workflows/deploy.yml` 已複製。

## 本機預覽
```bat
npm install
npm run dev
```

瀏覽 http://localhost:5173/CGVLab-FJU/ （Vite 會提供實際顯示的本機網址）。

## 注意
- `https://cchu-fju.github.io/cgv-lab/` 並不是此 Repository 的 GitHub Pages 專案網址。
- 當 Actions workflow 顯示綠色成功，且 Settings → Pages 顯示已發布網址後，再開啟正式網址。
