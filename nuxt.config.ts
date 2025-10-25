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

  app: {
    head: {
      title: "ACE Digital Solutions",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Professional digital solutions for your business" },
        // Open Graph / Facebook
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://acedigitalsolutions.dev" },
        { property: "og:title", content: "ACE Digital Solutions" },
        { property: "og:description", content: "Professional digital solutions for your business" },
        { property: "og:image", content: "https://acedigitalsolutions.dev/images/og-image.png" },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:url", content: "https://acedigitalsolutions.dev" },
        { name: "twitter:title", content: "ACE Digital Solutions" },
        { name: "twitter:description", content: "Professional digital solutions for your business" },
        { name: "twitter:image", content: "https://acedigitalsolutions.dev/images/og-image.png" },
      ],
    },
  },
});
