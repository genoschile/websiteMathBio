import { getCollection } from "astro:content";

async function getPublications() {
  const publications = (await getCollection("publications")).sort((a, b) => {
    const yearA = parseInt(a.data.year) || 0;
    const yearB = parseInt(b.data.year) || 0;
    return yearB - yearA; // Orden descendente (más reciente primero)
  });

  return publications.map((publication) => {
    return {
      ...publication.data,
    };
  });
}

export async function GET({}) {
  return new Response(JSON.stringify(await getPublications()), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
