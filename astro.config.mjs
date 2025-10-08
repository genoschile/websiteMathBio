import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [],
  site: "https://genoschile.github.io",
  base: "/websiteMathBio/",
  vite: {
    plugins: [tailwindcss()],
  },
});

/* HOST=0.0.0.0 PORT=4321 pm2 start dist/server/entry.mjs --name mathbio */
