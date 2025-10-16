# GitHub Pages Template (Markdown + BibTeX)

This template renders `about.md` (for your intro) and `pubs.bib` (for publications) on a clean, dark-themed site.

## Quick Start

1. Create a **public** repo named `your-handle.github.io`.
2. Upload all files from this folder (keep paths).
3. In **Settings → Pages**, publish from the **main** branch (root).
4. Open `https://your-handle.github.io`.

## Editing

- **About**: edit `about.md` (Markdown).
- **Publications**: edit `pubs.bib` (BibTeX). Entries are sorted by year (desc). Optional fields: `url`, `doi`.
- **Profile image**: replace `assets/img/profile.jpg`.
- **Colors & spacing**: tweak `styles.css`.

## Local Preview

Open with a local server (fetching local files is blocked over `file://`). For example with Python:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Notes

- The page uses CDN scripts:
  - `marked` for Markdown
  - `bibtex-parse-js` for BibTeX
- No build step; works on GitHub Pages out of the box.
