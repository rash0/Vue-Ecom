// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  imports: {
    dirs: ["store"],
  },
  modules: ["@nuxt/devtools", "@pinia/nuxt"],
  pinia: {
    autoImports: [
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  css: ["~/assets/styles/main.scss"],
});
