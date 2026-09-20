# Mindspace — Brain Dump

**Innovative tech startup from Munich** — *Brain Dump is the simple private place for any stray thought — grocery lists to startup roadmaps. Capture anything, auto-organized and visually connected.*

Built from [mymind Refero style](https://styles.refero.design/style/5bfe6c1d-1b15-4f8d-b0c9-677a33291c5d) — *Sunlit personal archive* — warm, human, zero violet AI-slop.

### ✨ Live Preview
```bash
python3 -m http.server 5173
# open http://localhost:5173
```
Or just double-click `index.html` — it works offline.

### 🎨 Design System (mymind)
- **Canvas:** #f9fafc / Blush #fff1f1 with Hero Bloom radial orange
- **Accent:** Ember #ff5924 (outlined pills only), Cobalt #1573dd
- **Pastel cards:** Slate Blue #e5eaf2 / Parchment #f3f0e7 / Sage #dde9d3
- **Typography:** Instrument Serif (Louize) 104px -0.052em + italic Connect, Nunito Sans 11px 0.125em ALL CAPS, Inter for body
- **Shape:** 30px nav pill, 16px cards, 100px pills, 50px padding, hairline borders
- **Canvas:** draggable nodes, pan & zoom, ember threads (SVG beziers)

### 📁 Project Structure
```
Website_0.2/
├── index.html           # Full marketing site (offline, no CDN)
├── assets/
│   ├── tailwind.css     # Built Tailwind + local fonts (43KB)
│   └── files/           # WOFF2 fonts (Instrument Serif, Inter, Nunito Sans, Playfair) — 8.2MB, offline
├── src/
│   └── input.css        # Source with @imports + custom mymind CSS
├── tailwind.config.js   # Tailwind config (ember, canvas, etc.)
├── package.json         # @fontsource + tailwind deps
└── README.md
```

### 🚀 Run Locally — Zero Internet Needed
**No build needed — just open:**
```bash
# Option 1: Python (recommended)
python3 -m http.server 8000
# then http://localhost:8000

# Option 2: Node
npx serve .

# Option 3: Double-click index.html in Finder/Explorer
```

All CSS & fonts are vendored in `assets/` — no CDN, no `fonts.googleapis.com`, no `cdn.tailwindcss.com`. Works on a plane.

### 🛠 Rebuild CSS (optional)
If you edit `src/input.css` or `tailwind.config.js`:
```bash
npm install
npm run build:css   # -> assets/tailwind.css
```

### 📦 What’s Offline?
- ✅ Tailwind via local `assets/tailwind.css` (built, minified)
- ✅ Fonts via `@fontsource` vendored to `assets/files/` (Instrument Serif, Inter, Nunito Sans, Playfair)
- ✅ All JS inline — draggable canvas: drag nodes, drag background to pan, wheel/scroll to zoom, live ember SVG threads
- ✅ No external images, no CDN

### 🌐 Deploy
Any static host: Vercel, Netlify, GitHub Pages (just push `main`), or `python -m http.server` on your desktop.

---
Made with the calm of mymind, rebuilt for Mindspace. Munich, 2026.
