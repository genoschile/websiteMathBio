import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

// file("src/content/members/*.js")

const membersCollection = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "src/content/members",
  }),

  schema: z.object({
    name: z.string(),
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

const publicationsCollection = defineCollection({
  loader: file("src/content/publications/publications.json"),

  schema: z.object({
    id: z.number(),
    name: z.string(),
    resume: z.string(),
    description: z.string(),
    title: z.string(),
    authors: z.array(z.string()),
    year: z.string(),
    url: z.string().url(),
    abstract: z.string().optional(),
    image: z.string().optional(),
    type: z.enum([
      "journal",
      "conference",
      "book",
      "book-chapter",
      "other",
      "preprint",
    ]),
    doi: z.string().optional(),
    tags: z.array(z.string()).optional(),
    team: z
      .array(
        z.object({
          id: z.number(),
        })
      )
      .optional(),
  }),
});

const contactCollection = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "src/content/contact",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    contactCard: z.object({
      header: z.string(),
      location: z.object({
        title: z.string(),
        address: z.string(),
      }),
      email: z.object({
        title: z.string(),
        address: z.string().email(),
      }),
      phone: z.object({
        title: z.string(),
        number: z.string(),
      }),
      officeHours: z.object({
        title: z.string(),
        weekdays: z.string(),
        weekends: z.string(),
      }),
    }),
    mapSection: z.object({
      title: z.string(),
    }),
  }),
});

const collaborationsCollection = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "src/content/collaborations",
  }),

  schema: z.array(
    z.object({
      name: z.string(),
      position: z.string(),
      grade: z.string(),
      description: z.string(),
      urlImage: z.string(),
      urlLinkedIn: z.string().url(),
    })
  ),
});

const newsCollection = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "src/content/news",
  }),
  schema: z.object({
    title: z.string(),
    img: z.string(), // campo 'img' obligatorio
    href: z.string(), // campo 'href' obligatorio
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // formato de fecha YYYY-MM-DD
    aiHint: z.string(), // campo 'aiHint' obligatorio
    summary: z.string(), // campo 'summary' obligatorio
  }),
});

export const collections = {
  members: membersCollection,
  images: imagesCollection,
  projects: projectsCollection,
  talks: talksCollection,
  publications: publicationsCollection,
  contact: contactCollection,
  collaborations: collaborationsCollection,
  news: newsCollection,
};
