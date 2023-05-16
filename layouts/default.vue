<template>
  <div id="app">
    <Header />
    <slot />
    <Newsletter v-if="$route.path != '/contact'" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'V-store',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'A Full StoreFront template build with Nuxt3' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/fi.ico' }]
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