<template>
  <ProductsBreadCrumbs />
  <!-- <div class="container-flow mx-5 mb-4"> -->
  <div class="container-md mb-4">
    <div class="main-grid">
      <ProductsFilterBar @apply-filters="filterItems"/>
      <div class="products">
        <ProductsCard :cards="slicedCards" />
        <ProductsMoreButton v-if="slicedCards.length < grid.cards.length" @increment-cards="grid.showCards += 10" />
        <Notification v-if="slicedCards.length == 0" class="my-5 py-5">
          <h4>Sorry, we can't find any products that match your filters.</h4>
        </Notification>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product, Filters } from '../types';
interface grid {
  cards: Product[],
  showCards: number
}

const store = useMainStore()
const grid: grid = reactive({
  cards: [],
  showCards: 10,
})
// onMounted(() => reSet())
// const reSet = () => grid.cards = store.items;

const slicedCards = computed(() => grid.cards.slice(0, grid.showCards))

const sortItems = (value: string) => {
  grid.cards.sort((a, b) => {
    if (value === 'newset') return (a.title === undefined || b.title === undefined) ? 0 : (a.title.length  * 2) - (b.title.length * 4)
    if (value === 'price') return (a.price === undefined || b.price === undefined) ? 0 :(a.price - b.price)
    if (value === 'trending') return (a.type === undefined || b.type === undefined) ? 0 :(a.type.length - b.type.length)
    return 0
  })
  // return grid.sortButton = value.toUpperCase()
}

const filterItems = (filterList: Filters) => {
  console.log(`filterItems ${filterList.minPrice} - ${filterList.maxPrice}`)

  grid.cards = store.items.filter((card) => {
    return  (
      (filterList.types.includes(card.type||'') || filterList.types.length === 0) &&
      (filterList.colors.includes(card.color||'') || filterList.colors.length === 0) &&
      (((card.price || 0) > filterList.minPrice) && ((card.price || 0) < filterList.maxPrice))
    )
  })

  grid.showCards = 10
}

</script>

<style>

.main-grid {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
      /* justify-content: center; */
}

.products {
    /* --minChildWidth: 225px; */
    --minChildWidth: 300px;
    display: grid;
    gap:1rem;
    grid-template-columns: 
        repeat(auto-fit,
        minmax(min(var(--minChildWidth),100%),
               1fr));
    flex-grow: 9999;
    flex-basis: var(--minChildWidth);
}

</style>
