<template>
  <div class="">
    <NuxtLink
      class="text-lg font-medium ml-14"
      :to="link.Link"
      v-for="(link, idx) in navLinks"
      :id="idx"
      >{{ link.name }}</NuxtLink
    >
  </div>
</template>

<script setup lang="ts">
const navLinks = [
  {
    name: "Home",
    Link: "/",
  },
  {
    name: "Products",
    Link: "/products",
  },
  {
    name: "Contact",
    Link: "/contact",
  },
];
</script>
