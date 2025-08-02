import { presetDaisy } from '@ameinhardt/unocss-preset-daisy';
import { defineConfig } from 'astro/config';
import { presetWind4 } from 'unocss';
import unocss from 'unocss/astro';

export default defineConfig({
  integrations: [
    unocss({
      injectReset: true,
      presets: [presetWind4(), presetDaisy()]
    })
  ],
  i18n: {
    locales: ["en", "th"],
    defaultLocale: "en",
  }
});