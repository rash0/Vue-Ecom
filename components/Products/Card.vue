<template>
  <div class="d-flex flex-wrap gap-3 justify-content-left pt-1">
    <div v-for="item in cards" :key="item.id" class="card" :class="{'wide-container' : widthIsWide}">
      <img class="card-img-top" :src="useAsset(item.img as string)" alt="Card-image-cap" title="Card-image-cap"
        loading="lazy">
      <div class="overlay">
        <button type="button" class="btn btn-light btn-lg" @click="store.inCart(item)">Add +</button>
        <NuxtLink :to="`/details/${item.id}`">
          <button type="button" @click="store.addtoInfo(item.id as number)" class="btn btn-light btn-lg">Info</button>
        </NuxtLink>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
        <p class="card-text">${{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '../types'

const store = useMainStore()

const props = defineProps<{
  cards: Product[],
  widthIsWide: boolean
}>()

</script>

<style lang="scss">

.card {
  transition: 300ms;
  position: relative;
  overflow: hidden;
  max-width: 300px;

  img {
    z-index: 1;
  }

  button {
    width: 140px;
    margin-bottom: 10px;
  }

  &:hover img {
    filter: blur(4px);
  }

  &:hover .overlay {
    opacity: 0.4;
  }

  .overlay {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70%;
    background-color: #232b34;
    opacity: 0;
    z-index: 50;
    transition: all 0.3s ease-in;
  }

  &:hover,
  &:active {
    transform: scaleY(1.02) scaleX(1.02);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25), 0 0px 40px rgba(0, 0, 0, 0.22);
  }
}

.wide-container {
  max-width: 600px;
}
</style>
