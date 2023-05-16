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
  title: process.env?.npm_package_name,
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: process.env?.npm_package_description}
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/fi.ico' }    ]
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