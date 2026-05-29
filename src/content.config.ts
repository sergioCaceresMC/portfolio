import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const technology = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/technology" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    icon: z.string(),
  }),
});

export const collections = { technology };
