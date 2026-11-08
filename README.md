# Arel Urbanozo — Engineering Portfolio

Source for **[urbznspices.github.io](https://urbznspices.github.io)**, my portfolio as an aerospace engineering student at the University of Alabama in Huntsville (B.S. expected May 2027).

The site covers my spacecraft systems and RF communications work on the ChargerSat-2 CubeSat, PCB design and test for student space programs, and the 2024 AAS CanSat Competition, where my team placed 2nd internationally. Each project page follows the same outline: overview, my role, technical approach, results and lessons learned.

- **Résumé:** [PDF](https://urbznspices.github.io/Arel_Urbanozo_Resume.pdf)
- **LinkedIn:** [arel-urbanozo](https://www.linkedin.com/in/arel-urbanozo-6a0b07334/)
- **Email:** arelurbz@gmail.com

## Built with

- [Astro](https://astro.build) static site, with project case studies written as Markdown content collections
- Hand-written CSS with a light theme by default and a dark-mode toggle
- A self-contained interactive physics demo (React + TypeScript, bundled into a single file)
- Deployed to GitHub Pages by GitHub Actions on every push to `main`

## Running locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Layout

| Path | Contents |
|---|---|
| `src/content/projects/` | One Markdown file per project case study |
| `src/data/experience.ts` | Experience, skills and education |
| `src/pages/` | Home, About, Résumé, project template, 404 |
| `src/styles/global.css` | Theme and layout |
| `public/` | Images, résumé PDFs and the bundled demo |
| `scripts/` | Asset preparation (resizes images and strips EXIF/GPS metadata) |

Content and images © Arel Urbanozo.
