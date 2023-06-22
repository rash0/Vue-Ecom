<template>
  <div id="app">
    <SeoKit />
    <Header />
    <slot />
    <Newsletter v-if="route.path != '/contact'" />
    <Footer />
  </div>
</template>

<script setup>
const route = useRoute()

useHead({
  title: 'V-Store',
  meta: [
    { hid: 'description', name: 'description', content: 'A Full StoreFront built with Nuxt 3 + Pinia 2 + Bootstrap 5....' },
    { property: 'og:title', content: `V-Store - ${route.meta.title}` }
  ],
  link: [
    { rel: 'canonical', href: 'https://vue-ecom.vercel.app' },
    { rel: 'icon', type: 'image/x-icon', href: '/fi.ico' }],
  htmlAttrs: { lang: 'en-US' },
})
</script>

<style>
#app {
  background-color: #F8F8F8 !important;
  font-family: 'Exo 2', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>