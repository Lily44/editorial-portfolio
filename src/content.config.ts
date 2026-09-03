import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    category: z.string(),
    date: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    featuredImage: z.string().optional(),
    altText: z.string().optional(),
    gallery: z.array(
      z.object({
        src: z.string(),
        alt: z.string().optional(),
        caption: z.string().optional(),
      })
    ).optional(),
  }),
});

export const collections = { portfolio };
