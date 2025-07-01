import {
  getCollection,
  type CollectionKey,
  type CollectionEntry,
} from "astro:content";

export async function getCollectionsTrue<C extends CollectionKey>(
  collectionName: C
): Promise<Array<{ id: string } & CollectionEntry<C>["data"]>> {
  const collection = await getCollection(collectionName);

  return collection.map((item) => {
    const { id: _, ...rest } = item.data as any; // extrae y descarta el id de data
    return {
      id: item.id, // id string de Astro
      ...rest,
    };
  });
}
