import { defineConfig } from 'astro/config';
import unocss from '@unocss/astro';
import astroI18next from "astro-i18next";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [unocss(), astroI18next()],
  vite: {
    plugins: [tailwindcss()],
  }, i18n: {
    defaultLocale: "th",
    locales: ["th", "en"],
  },
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
});
