<template >
  <div class="container py-5" style="padding-top:70px;">
    <!-- TODO dont allow accessing of the route to this page '/info' except if there is info to display -->
    <DetailsBreadcrumb :details="(item.details)" />
    <DetailsBox :item="item.details" />
    <DetailsText />

    <div class="related-item">
      <hr>
      <h6 class="pb-4">RELATED PRODUCTS</h6>
      <ClientOnly>
        <ProductsCard :cards="sliceItems" />
      </ClientOnly>
    </div>

  </div>
</template>

<script setup lang="ts">
import { Product } from '~/components/types'
const store = useMainStore()
const route = useRoute()

interface Item {
  details: Product
  relatedItems: Product[]
}

const item: Item = reactive({
  details: {},
  relatedItems: []
})

onMounted(() => {
  let itemId = Number(route.params.id)
  item.details = store.items[itemId]
})

const sliceItems = computed(() => {
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * store.items.length)
    item.relatedItems.push(store.items[randomIndex])
  }
  return item.relatedItems
})
</script>

<style scoped>
hr {
  width: 50px;
  border-bottom: 1px solid black;
}

.related-item {
  padding-left: 8rem;
  padding-right: 8rem;
  height: auto;
  text-align: center;
}
</style>
