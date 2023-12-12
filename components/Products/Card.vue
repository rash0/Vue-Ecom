<template>
  <div class="products-grid pt-1 gap-3" :class="{'ms-3':!filterIsWide}">
    <div v-for="item in cards" :key="item.id" class="card">
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
import { useMainStore } from '~/store';
import type { Product } from '../types';
import { useAsset } from '#imports';

const store = useMainStore()

const props = defineProps<{
  cards: Product[],
  filterIsWide: boolean
}>()

const touch = matchMedia('(hover: none)').matches;

</script>

<style lang="scss">

.products-grid {
    --minChildWidth: 200px;
    display: grid;
    grid-template-columns: 
        repeat(auto-fit,
        minmax(min(var(--minChildWidth),100%),
               1fr));
    flex-grow: 9999;
    flex-basis: var(--minChildWidth);
}
.card {
  transition: 300ms;
  position: relative;
  overflow: hidden;

  img {
    z-index: 1;
  }

  button {
    width: 7rem;
    margin-bottom: 10px;
    border: solid;
    border-width: 1px;
    border-radius: 0;
  }

  &:hover img {
    filter: blur(4px);
  }

  &:hover .overlay {
    opacity: 0.8;
  }

  .overlay {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70%;
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

@media (hover: none){
    /* touch stuff goes here */
    .overlay {
      opacity: 0.6 !important;
      background-color: rgba(0, 0, 0, 0) !important; /* Adjust the alpha value for transparency */
    }
}
</style>
