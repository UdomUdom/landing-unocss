import { defineConfig } from 'astro/config';
import unocss from '@unocss/astro';


export default defineConfig({
  integrations: [unocss()],
  i18n: {
    locales: ["en", "th"],
    defaultLocale: "en",
  }
});
