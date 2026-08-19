import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.shanghai-restaurant.com",
  trailingSlash: "always",
  integrations: [mdx(), sitemap({
    serialize(item) {
      item.lastmod = new Date().toISOString();
      return item;
    },
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});
