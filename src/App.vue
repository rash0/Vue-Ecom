<template>
  <div id="app">
    <Header />
    <router-view />
    <Newsletter v-if="$route.path != '/contact'" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Newsletter from '@/components/Newsletter.vue'
import Footer from '@/components/Footer.vue'


export default{
  name: 'app',
  components: {
    Header, Newsletter, Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
#app {
  background-color: #F8F8F8 !important;
  font-family: 'Source Sans Pro', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
