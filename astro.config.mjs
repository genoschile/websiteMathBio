import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

export default defineConfig({
  integrations: [],
  site: "http://mathbio.genomas.cl",

  vite: {
    plugins: [tailwindcss()],
  },
  output: 'server',
  adapter: node({
    mode: "standalone",
  }),
});