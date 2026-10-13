# Personal Portfolio & Website

My personal homepage for my portfolio, built with React and Vite[cite: 1]. The design combines a continuous glassmorphism layout with retro-astrophysics visual elements, featuring imagery inspired by the *Pale Blue Dot* and Voyager missions[cite: 1].

**Live Site:** [rgao.github.io](https://rgao.github.io/)

---

## Features

- **Continuous Scroll Architecture:** Replaced the legacy modal setup with a responsive, single-page scroll layout containing structured sections for About, Featured Projects, CV/Resume, and Contact[cite: 1, 16].
- **Dynamic Sticky Navigation:** A lightweight glassmorphism navigation header that slides into view upon scrolling past the hero fold[cite: 16, 17].
- **Performance Optimized:** GPU-accelerated fixed backdrops and scoped hardware transitions ensuring 60+ FPS scrolling without compositing stalls[cite: 17].
- **Curriculum Vitae & Project Showcase:** Interactive portfolio cards linking directly to live deployments, GitHub repositories, and tech stacks, alongside an active PDF resume download.
- **Automated CI/CD:** Continuous deployment pipeline managed via GitHub Actions deploying static builds directly to GitHub Pages on every push.

---

## Tech Stack

- **Framework:** [React 18](https://react.dev/)[cite: 16]
- **Bundler & Dev Server:** [Vite](https://vitejs.dev/)[cite: 1]
- **Icons:** [Lucide React](https://lucide.dev/)[cite: 16]
- **Styling:** Vanilla CSS3 (Custom Properties, Flexbox, CSS Grid)[cite: 17]
- **Hosting & CI/CD:** GitHub Pages via GitHub Actions (`deploy.yml`)