<template>
  <div>
    <nav class="row justify-content-start" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li class="breadcrumb-item">
          <NuxtLink to="/products">Products</NuxtLink>
        </li>
        <li class="breadcrumb-item">
          <NuxtLink to="/products">{{ details.type }}</NuxtLink>
        </li>
        <li class="breadcrumb-item active">{{ details.title }}</li>
      </ol>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { Product } from '../types'

defineProps<{
  details: Product
}>()

</script>

<style scoped lang="scss">
.breadcrumb {
  background: inherit;

  li {
    a {
      text-decoration: none;
      color: #2c3539 !important;
      font-size: 18px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .active {
    text-decoration: none !important;
    color: #f2be00 !important;
  }
}
</style>
