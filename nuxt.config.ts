import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@nuxt/test-utils", "shadcn-nuxt"],

  fonts: {
    defaults: {
      weights: [400, 600, 700],
    },
  },

  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
});