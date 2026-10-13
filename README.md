# Chandra Shekhar — Portfolio

A dark, premium AI-engineer portfolio built with React, Vite, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # optional local preview of the production build
```

The build output goes to `dist/`. Deploy `dist/` (or the repo root, with Vercel's
default Vite framework preset) to Vercel — no extra configuration is required.

## Things to fill in before publishing

Everything below is a clearly marked placeholder in the code — search for it or use
the file list:

- **`public/resume.pdf`** — add your actual resume PDF at this path. It's linked from
  the navbar, hero and Resume section.
- **`src/data/experience.js`** — add your real education dates/institution and any
  work experience. Placeholder entries are flagged with `placeholder: true` and render
  an "add details" badge.
- **`src/data/github.js`** — replace `githubUsername` and the mock `repos` array, or
  wire up a real call to the GitHub REST API (`/users/<username>/repos`) — the
  `Github.jsx` component only expects the same shape back.
- **`src/data/projects.js`** — each project's `links.github` and `links.demo` are
  placeholder URLs; the RAG project's `evaluation.metrics` values are `—` placeholders
  for you to fill in once you've run the actual eval harness.
- **Contact links** — update the email/GitHub/LinkedIn URLs in
  `src/components/Contact.jsx` and `src/components/Footer.jsx`.
- **`index.html`** — update `og:image` to a real Open Graph image if you want rich
  social previews.

## Project structure

```
src/
├── components/     # One component per section, all render from src/data
├── data/            # projects.js, skills.js, experience.js, github.js
├── App.jsx
├── main.jsx
└── index.css
```

<!-- Adding a new project only requires appending an object to `src/data/projects.js` —
`ProjectCard` and `ProjectModal` render entirely from that data, no UI changes needed. -->

<!-- ## Notes

- No TypeScript, per the brief — plain JavaScript throughout.
- The AI Playground's RAG and Agent demos use mocked, in-browser responses
  (`src/components/AIPlayground.jsx`), structured so the same UI can call a real
  Python/FastAPI backend later.
- Respects `prefers-reduced-motion` globally (see `src/index.css`). -->
