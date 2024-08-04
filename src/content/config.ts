// astro
import { defineCollection, z } from "astro:content";

export const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().max(60, "Please enter a title 60 characters or less."),
    date: z.date(),
    author: z.enum(["Jordan Mingle"]),
    image: z.string(),
    description: z
      .string()
      .max(160, "Please enter a description 160 characters or less."),
    draft: z.boolean().default(false),
    tags: z.array(z.string().toLowerCase()),
  }),
});

export const collections = { blog: blogCollection };
