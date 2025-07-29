import { defineConfig, presetUno, presetIcons } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1,
      warn: true,
    }),
  ],
  shortcuts: {
    "btn-primary":
      "bg-blue hover:bg-blue-500 border-0 transition-colors duration-200 px-6 py-2 shadow-md",
  },
});
