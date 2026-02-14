import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = {
  pages,
};
