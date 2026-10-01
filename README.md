# urbznspices.github.io — Arel Urbanozo's engineering portfolio

A static [Astro](https://astro.build) site, deployed to GitHub Pages by `.github/workflows/deploy.yml`.

## Everyday commands

```bash
npm install        # first time only
npm run dev        # live-reload preview at http://localhost:4321
npm run build      # production build into dist/
npm run preview    # serve the production build
```

## Where things live

| What | Where |
|---|---|
| Project stories (one Markdown file each) | `src/content/projects/*.md` |
| Project fields (title, summary, metrics, gallery, demo…) | `src/content.config.ts` |
| Experience, skills, education (mirror of `../Resume/master_experience.md`) | `src/data/experience.ts` |
| Home page (hero, experience, projects, skills, education) | `src/pages/index.astro` |
| About / Résumé / 404 | `src/pages/about.astro`, `resume.astro`, `404.astro` |
| Project page template | `src/pages/projects/[slug].astro` |
| Theme (light default + dark toggle, Inter, navy accent) | `src/styles/global.css` |
| Images (web-sized) | `public/images/` |
| Résumé & CV PDFs served by the site | `public/Arel_Urbanozo_Resume.pdf`, `public/Arel_Urbanozo_CV.pdf` |
| Live demos | `public/demos/<name>/index.html` (built from `demos-src/`) |

### Add a project
1. Copy any file in `src/content/projects/` and rename it. The filename becomes the URL, e.g. `my-project.md` → `/projects/my-project`.
2. Fill in the frontmatter:
   - `order` sets the sort position.
   - `featured: true` puts the project in the big grid on the home page.
   - `draft: true` hides the project from the built site.
3. Optional fields: `summary` (challenge / contribution / result box), `category`, `teamSize`, and `hero` (a real photo for the project page; `cover` stays the card image).
4. Write the story under these `##` headings, in this order: **Overview → My role → Technical approach → Results → Lessons learned**.

### Update images
**New photos:** drop originals into `../Photos_Inbox/<project-slug>/` and run `python scripts/prepare_assets.py`. They come out as `public/images/inbox/<slug>/*.webp`, max 1600 px, with all EXIF/GPS metadata stripped.

Run `python scripts/prepare_assets.py`. It copies and resizes the source images from Downloads/Documents into `public/images/` as `.webp`. It needs `pip install pillow pymupdf`.

The KiCad renders in `scripts/renders/` were made with KiCad 10's command-line tool:
```bash
"C:/Program Files/KiCad/10.0/bin/kicad-cli.exe" pcb render -o scripts/renders/intrepid_iso.png -w 1800 -h 1200 --quality high --rotate "-50,0,35" --perspective --zoom 0.68 "C:/Users/arelu/Documents/INTREPID_PCB_V1/INTREPID_PCB_V1.kicad_pcb"
```

### Update the résumé on the site
The site uses **web copies with no phone number**. In `../Resume/build`, run:
```powershell
$env:WEB = "1"; node build.js; Remove-Item Env:WEB
powershell -File export_pdf.ps1 -Sub web
```
Then copy `../Resume/web/Arel Urbanozo Resume.pdf` → `public/Arel_Urbanozo_Resume.pdf` and the CV → `public/Arel_Urbanozo_CV.pdf`.

## Live demos

### Hooke's Law simulator (`/demos/hookes-law/`)
The source is a **portfolio copy** in `demos-src/hookes-law/`; the classroom original in `Documents/Hooke's Law Deployment Simulator` is untouched. This copy differs from the original in two ways:
- The IDEAS Lab and INTREPID logo images are removed. Only text credit remains.
- "NASA CSLI" wording is replaced so the page doesn't imply NASA endorsement.

To rebuild:
```bash
cd demos-src/hookes-law && npm install && npm run build:singlefile
cp dist/index.html ../../public/demos/hookes-law/index.html
```

### RF Mission Workbench (`/demos/rf-workbench/`)
This is a read-only replay of one generic scenario that was precomputed with the real engine. See `demos-src/rf-workbench/PORTFOLIO_DEMO.md`.

**Held back until PI sign-off:**
- The project page is `draft: true`.
- While it's a draft, the build strips `/demos/rf-workbench`.
- `.gitignore` keeps the replay out of the public repo.

To publish:
1. Delete the `public/demos/rf-workbench/` line from `.gitignore`.
2. Set `draft: false`.
3. Commit and push.

`demos-src/` (the lab source copies) is never committed.

## Deploying (one-time setup)
1. Create a **public** repo on GitHub named exactly **`urbznspices.github.io`**.
2. From this folder:
   ```bash
   git remote add origin https://github.com/urbznspices/urbznspices.github.io.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Every later push to `main` rebuilds and redeploys automatically, in about a minute.

To use a custom domain later, add `public/CNAME` containing the domain, set `site` in `astro.config.mjs`, and configure DNS as described in GitHub's Pages docs.

## Before you publish
- [ ] Ask Dr. Benfield / Dr. Turner to review `chargersat-2.md`, `deployment-test-campaign.md` and the INTREPID pages.
- [ ] Get permission before re-adding any IDEAS Lab or INTREPID logos.
- [ ] Confirm the numbers in `../Resume/master_experience.md` (GPA, dates).
