import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    role: z.string(),
    org: z.string(),
    dates: z.string(),
    status: z.string().default('Complete'),
    teamSize: z.string().optional(),
    category: z.string().optional(),
    // "At a glance" box: challenge / contribution / result
    summary: z.object({ challenge: z.string(), contribution: z.string(), result: z.string() }).optional(),
    // optional real photo shown on the project page; `cover` stays the card image
    hero: z.string().optional(),
    heroAlt: z.string().optional(),
    order: z.number(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    tools: z.array(z.string()),
    cover: z.string(),
    coverAlt: z.string(),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    demo: z.object({ src: z.string(), label: z.string(), height: z.number().default(720) }).optional(),
    video: z.string().optional(),
    gallery: z.array(z.object({ src: z.string(), alt: z.string(), caption: z.string().optional() })).default([]),
  }),
});

export const collections = { projects };
