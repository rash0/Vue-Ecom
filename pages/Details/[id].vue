<template >
  <div class="container py-5" style="padding-top:70px;">
    <!-- TODO dont allow accessing of the route to this page '/info' except if there is info to display -->
    <DetailsBreadcrumb :details="info.details"/>
    <DetailsBox :details="info.details"/>
    <DetailsText />

    <div class="related-item">
      <hr>
      <h6 class="pb-4">RELATED PRODUCTS</h6>
      <ProductsCard :cards="sliceItems" />
    </div>

  </div>
</template>

<script setup>
const store = useMainStore()

const info = reactive({
    details: [],
    relatedItems: []
})

const sliceItems = computed(() => {
  for(let i=0; i < 3; i++){
    const randomIndex = Math.floor(Math.random() * store.items.length)
    info.relatedItems.push(store.items[randomIndex])
  }   
  return info.relatedItems
})

onMounted(() => {
    info.details = store.productInfo
})


// const sendInfo = (it, id) => store.addtoInfo(it, id)
</script>

<style scoped>
hr {
width: 50px;
border-bottom: 1px solid black;
}
.related-item{
  padding-left: 8rem;
  padding-right: 8rem;
  height: auto;
  text-align: center;
}
</style>
