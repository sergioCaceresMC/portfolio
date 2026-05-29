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

const project = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    technology: z.record(z.string(), z.string()), // 👈 AQUÍ EL CAMBIO
    description: z.string(),
    image: z.string(),
    url: z.string().url(),
  }),
});

export const collections = {
  technology,
  project,
};
