<template>
  <div class="container mb-4">
    <div class="mx-3">
      <ProductsDropDownFilters @sort-item="sortItems" />
    </div>
    <div class="main-grid d-flex p-3">
      <ProductsFilterBar @apply-filters="filterItems"/>
      <div class="col-11 col-md-12 col-lg-8 mx-auto" style="margin-left:25px !important">
        <ProductsCard :cards="slicedCards" />
        <ProductsMoreButton v-if="grid.cards.length !== 0" @increment-cards="grid.showCards += 6" />
        <Notification v-else class="my-5 py-5">
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
  showCards: 6,
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


  grid.showCards = 6
}

</script>
