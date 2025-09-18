# Ricardo Binz — Personal Website

A modern, responsive personal website. Built with vanilla HTML/CSS/JS for fast performance and easy hosting anywhere (GitHub Pages, Netlify, Vercel, etc.).

## Structure

- `index.html` — Main page with sections: Hero, About, Skills, Projects, Experience, Contact
- `styles.css` — Global styles with light/dark themes
- `script.js` — Interactions: theme toggle, smooth scroll, scroll reveals, mobile nav
- `assets/` — Logo and favicon (SVG). Add your images and documents here.

## Customize

- Name and role are set to "Ricardo Binz" and "Data Scientist" in `index.html`.
- Replace placeholder links (GitHub, LinkedIn, Twitter) in the Contact section.
- Add a resume: place `assets/ricardo-binz-cv.pdf` and update the "Download CV" link.
- Update projects: edit the Projects section cards with real links, descriptions, and images.
- Email: update the `mailto:` link in Contact.
- SEO: update `<meta name="description">` and JSON-LD in the `<head>`.

## Run locally

Open `index.html` directly in your browser, or serve locally for best results:

- Python (if installed):
  ```bash
  python -m http.server 5500
  ```
  Then visit http://localhost:5500

- Node (if installed):
  ```bash
  npx serve -l 5500
  ```

## Deploy

- GitHub Pages: push to a repo and enable Pages (root).
- Netlify/Vercel: drag-and-drop or connect repo. Build command: none. Publish directory: root.

## License

MIT — do whatever you like. Attribution appreciated.
