// @ts-check
import { defineConfig } from 'astro/config';
import { readFileSync, rmSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// A draft project's live demo must not ship either: while a project page is
// `draft: true`, its /demos/<name> folder is removed from the built site.
const DRAFT_GATED_DEMOS = { 'rf-mission-workbench': 'rf-workbench' };

function stripDraftDemos() {
  return {
    name: 'strip-draft-demos',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        for (const [slug, demo] of Object.entries(DRAFT_GATED_DEMOS)) {
          const mdUrl = new URL(`./src/content/projects/${slug}.md`, import.meta.url);
          // A missing page (kept local-only) counts as a draft.
          if (existsSync(mdUrl) && !/^draft:\s*true\s*$/m.test(readFileSync(mdUrl, 'utf8'))) continue;
          const target = fileURLToPath(new URL(`demos/${demo}/`, dir));
          if (existsSync(target)) {
            rmSync(target, { recursive: true, force: true });
            logger.info(`removed demos/${demo} (project "${slug}" is a draft)`);
          }
        }
      },
    },
  };
}

// Deployed as a GitHub Pages user site: https://urbznspices.github.io
// If you later deploy to a project repo (e.g. /portfolio), set `base: '/portfolio'`.
export default defineConfig({
  site: 'https://urbznspices.github.io',
  trailingSlash: 'ignore',
  integrations: [stripDraftDemos()],
});
