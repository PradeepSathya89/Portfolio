# Pradeep Sathya — Portfolio

React + Vite single-page portfolio.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # check the production build locally
```

## Where to edit

Almost everything you need to change is in **`src/data/content.js`** — your name,
email, links, about text, skills and projects. The components read from that file,
so you don't have to touch JSX to update your details.

## Before you deploy — checklist

- [ ] `src/data/content.js`: replace the TODO email, phone and LinkedIn URL
- [ ] `src/data/content.js`: add real `demo` and `code` URLs to each project
      (leave a field as `''` and that button simply won't render)
- [ ] `public/Pradeep-Sathya-Resume.pdf`: add your resume with that exact filename
- [ ] `index.html`: update the canonical and `og:url` if your domain changes
- [ ] `public/preview.png`: add a 1200×630 screenshot for link previews (optional)
- [ ] Run `npm run build` locally — it must finish with no errors
- [ ] Open the deployed site on a phone and check nothing scrolls sideways

## Structure

```
src/
  components/    Navbar, Hero, About, Skills, Projects, Contact, Footer (+ CSS per component)
  data/          content.js — all your text and links
  hooks/         useReveal.js — scroll reveal, active nav section, typewriter
  styles/        global.css — design tokens, reset, shared buttons
```

## Animations

No animation library is used, so nothing is added to your bundle:

- hero entrance sequence and typing effect — CSS keyframes + a small `useTypewriter` hook
- scroll reveals — `IntersectionObserver` in `useReveal`, which stops observing after firing
- hover effects on cards, buttons and links — CSS transitions only

All of it is disabled automatically when the visitor has "reduce motion" turned on.
