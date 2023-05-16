<template>
  <div>
    <nav class="row justify-content-start" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="breadcrumb-item"><nuxt-link to="/products">Products</nuxt-link></li>
        <li class="breadcrumb-item"><nuxt-link to="/products">{{ details.type }}</nuxt-link></li>
        <li class="breadcrumb-item active">{{ details.title }}</li>
      </ol>
    </nav>
  </div>
</template>

<script setup>
defineProps({
  details: Object
})
</script>

<style scoped>
.breadcrumb{
  background: inherit;
}

.breadcrumb>li>a {
  text-decoration: none;
  color: #2c3539 !important;
  font-size: 18px;
}
.breadcrumb>li>a:hover {
  text-decoration: underline;
}

.breadcrumb-item.active {
  text-decoration: none !important;
  color: #f2be00 !important;
}
</style>
