<template>
    <div>
        <ProductsBreadCrumbs />
        <ProductsGrid />
    </div>
</template>

<script setup>
definePageMeta({
    title: 'Products'
})
useHead({
    link: [{ rel: 'canonical', href: 'https://vue-ecom.vercel.app/products' }],
});
</script>
