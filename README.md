# IMPORTANT: GitHub Pages deployment for cchu-fju/CGVLab-FJU

請先閱讀 [DEPLOY-FJU.md](DEPLOY-FJU.md)。正式網址：https://cchu-fju.github.io/CGVLab-FJU/

---

# CGV Lab · Computer Graphics and Visualization Lab

The official-site starter for **Computer Graphics and Visualization Lab (CGV)** / **電腦圖學與視覺化實驗室**, Department of CSIE, Fu Jen Catholic University. Built with **Vue 3, Vite and D3.js**.

## Features

- Seven navigation sections: Home, Research, Publications, Projects, **Teaching**, Members, Contact.
- **Actually animated clouds:** three independently drifting CSS/SVG atmospheric layers, different durations and directions. The mist moves continuously while scrolling and has a visible **Pause mist motion** button. System `prefers-reduced-motion` is respected.
- D3.js draggable research network and selected-publication timeline.
- Responsive design for desktop and mobile; native hash navigation.
- GitHub Actions workflow deploys to GitHub Pages on every push to `main`.

## Run locally

Install Node.js **22** or newer and Git.

```bash
npm install
npm run dev
```

Open http://localhost:5173 . Build for production:

```bash
npm run build
npm run preview
```

## Publish on GitHub Pages

1. At https://github.com/new create a **Public** repository named `cgv-lab`. Do not initialize it with a README or `.gitignore`.
2. From the *cgv-lab* project directory, run (replace `YOUR_USERNAME`):

```bash
git init
git add .
git commit -m "Launch CGV Lab site with animated cloud background and Teaching"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cgv-lab.git
git push -u origin main
```

3. In the repository, visit **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. See the workflow at **Actions → Deploy CGV Lab to GitHub Pages**. When it succeeds, the site is at `https://YOUR_USERNAME.github.io/cgv-lab/`.

The Vite config uses `base: './'`, so built asset paths work for both project and user Pages repositories. No API keys, server or backend are needed.

### When editing later

```bash
git add .
git commit -m "Update lab website"
git push
```

## Content and customization

| File | Purpose |
| --- | --- |
| `src/App.vue` | Page sections, text and navigation, including Teaching |
| `src/data.js` | Research, selected papers, exploratory projects and courses |
| `src/style.css` | Site style, responsive layout and cloud animation keyframes |
| `src/components/MistBackground.vue` | Multi-layer procedural SVG cloud shapes and displacement filters |
| `src/components/ResearchGraph.vue` | D3 force-directed research graph |
| `src/components/PublicationChart.vue` | D3 publication-year chart |
| `public/profile.jpg` | Provided illustrated academic image |
| `.github/workflows/deploy.yml` | GitHub Pages deployment |

**Course data:** Presented as an editable overview, not as a guarantee of current scheduling. Adjust according to the current university term.

**Bibliographic data:** `src/data.js` holds a starter curated subset copied from the previous project. Verify titles, years and record URLs against the linked [DBLP profile](https://dblp.org/pid/150/8066.html) before publishing; the statistics describe the selected dataset, not the full record.

**Research projects:** Exploratory directions, not funding announcements. Add real lab members only with their consent.

## Motion and accessibility

Clouds are actual animated SVG and CSS visual layers—not a static screenshot or video. Multiple non-synchronized motion layers create a gentle drifting appearance; pause button and reduced-motion support help accessibility. The site requires no network calls for clouds or D3 visualization. Google Fonts are optional; fallback system fonts are defined.

## License and attribution

The university name identifies institutional affiliation. The supplied portrait remains user-provided content; replace it or obtain appropriate permissions before public redistribution. Icons/logos of the university are not reproduced as official assets.
