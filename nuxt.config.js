// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  imports: {
    dirs: ["store"],
  },
  modules: ["@nuxt/devtools", "@pinia/nuxt", 'nuxt-primevue'],
  extends: ["nuxt-seo-kit"],
  routeRules: {
    "/**": { robots: "index, follow" },
  },
  runtimeConfig: {
    public: {
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL || "https://vue-ecom.vercel.app",
      siteName: "V-Store",
      siteDescription:
        "A Full StoreFront built with Nuxt 3 + Pinia 2 + Bootstrap 5....",
      language: "en-US",
    },
  },
  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },  
  primevue: {
    components: {
        prefix: 'Prime',
        include: ['Slider']    /* Used as <PrimeSlider /> */
    }
  },
  css: [
      "~/assets/styles/main.scss",
      "primevue/resources/themes/lara-light-blue/theme.css",
      "primeicons/primeicons.css"
  ],
  build: {
    transpile: ["primevue"]
  },
  render: {
    csp: {
      hashAlgorithm: "sha256",
      policies: {
        "script-src": ["'self'", "*.vercel-insights.com"],
      },
      addMeta: true,
    },
  },
});
