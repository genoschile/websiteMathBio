import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [],
  collections: {
    members: {
      // Aquí defines el formato de la colección con JSON
      path: './src/content/members/*.json', // Ruta de tus archivos JSON
    },
    images: {
        path: './src/content/images/*.json', // Ruta de tus archivos JSON
        type: 'data'
    },
    project: {
        path: './src/content/project/*.json', // Ruta de tus archivos JSON
    },
    publications: {
        path: './src/content/publications/*.json', // Ruta de tus archivos JSON
    },
    talks: {
        path: './src/content/talks/*.json', // Ruta de tus archivos JSON
    }
  },
});
