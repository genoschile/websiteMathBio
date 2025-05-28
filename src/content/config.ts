import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// file("src/content/members/*.js")

const membersCollection = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    // pattern: "src/content/members/*.js",
    base: "src/content/members",
  }),

  schema: z.object({
    name: z.string(),
    id: z.number(),
    position: z.string(),
    grade: z.string(),
    email: z.string().email().optional(),
    image: z.string(),
    publications: z.array(z.any()).optional(),
    talks: z
      .array(
        z
          .object({
            id: z.number(),
          })
          .optional()
      )
      .optional(),
    projects: z
      .array(
        z.object({
          id: z.number(), // Referencia al ID en la colección de proyectos
        })
      )
      .optional(),
  }),
});

const imagesCollection = defineCollection({
  schema: z.array(
    z.object({
      image: z.string(),
      title: z.string(),
      description: z.string(),
      fecha: z.string(), // change
    })
  ),
});

const projectsCollection = defineCollection({
  schema: z.object({
    id: z.number(),
    title: z.string(),
    url: z.string().url(),
    description: z.string(),
    fondecyt: z.string(),
    team: z
      .array(
        z.object({
          id: z.number(),
        })
      )
      .optional(),
  }),
});

const talksCollection = defineCollection({
  schema: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      date: z.string(), // Fecha como string; CHANGE consideraR usar formato ISO para mayor consistencia
      description: z.string(),
      url: z.string().url(),
    })
  ),
});

export const collections = {
  members: membersCollection,
  images: imagesCollection,
  projects: projectsCollection,
  talks: talksCollection,
};
