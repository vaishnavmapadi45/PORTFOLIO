# Portfolio

Personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Lenis.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

- `src/components/layout` — Navbar, Footer
- `src/components/sections` — Hero, About, Skills, Projects, Experience, Contact
- `src/components/ui` — reusable pieces: GlassCard, AuroraBackground, ParticleField
- `src/data` — edit `projects.js`, `skills.js`, `experience.js` with your real content
- `src/lib/motionVariants.js` — shared Framer Motion animation variants
- `src/hooks/useLenis.js` — smooth scroll setup

## To customize

1. Replace "Your Name" in `Navbar.jsx`, `Hero.jsx`, `Footer.jsx`, and `index.html`.
2. Fill in `src/data/*.js` with your real projects, skills, and experience.
3. Add your resume PDF to `public/resume.pdf`.
4. Update social links in `Contact.jsx`.
5. Wire the contact form to a real backend (Formspree, EmailJS, or a Vercel
   serverless function) — currently it's a visual placeholder.
6. Add an `og-image.png` to `public/` for social share previews.

## Deploy

Push to GitHub, then import the repo in Vercel. `vercel.json` is already
configured for SPA routing.
