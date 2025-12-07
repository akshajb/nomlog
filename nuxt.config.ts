// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  test: true,

  modules: [
    "@nuxt/eslint",
    "@nuxt/test-utils/module",
    "@nuxt/fonts",
    "@nuxt/icon",
    "shadcn-nuxt",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "pinia-plugin-persistedstate/nuxt",
  ],

  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
});
