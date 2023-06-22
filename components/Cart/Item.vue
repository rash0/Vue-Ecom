<template>
    <div class="col4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
        <img :src="useAsset(item.img!)" style="width: 90px;" alt="cart-item" title="cart-item">
    </div>
    <div class="col6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
        <h4>{{ item.title }}</h4>
        <h6>${{ item.price }}</h6>
    </div>
    <div class="col2 col-xl-2 col-lg-2 col-md-2 col-sm-2 pt-4">
        <span class="remove-btn" style="cursor: pointer;" @click="store.outCart(item.id!)">remove</span>
    </div>
</template>

<script setup lang="ts">
import { Product } from '../types';

const store = useMainStore()

defineProps<{
    item: Product
}>()

</script>

<style scoped lang="scss">
.remove-btn {
    border-radius: 50%;
    content: url('../assets/multiply.png');

    :hover {
        background-color: grey;
    }
}
</style>