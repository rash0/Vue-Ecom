<template>
  <div class="container" style="border:1px solid red">
    <div v-if="grid.cards.length === 0" class="d-flex align-items-center justify-content-center">
      <h4>Sorry, we can't find any product with this features</h4>
    </div>
    <div v-else class="main-grid" style="border:1px solid red">
      <ProductsDropDownFilters @sort-item="sortItems" />
      <ProductsCard :cards="slicedCards" />
      <ProductsMoreButton :is-show="grid.cards.length !== 0" @increment-cards="grid.showCards += 6" />
      <div class="col col-xl-3 col-lg-3 d-none d-lg-block d-xl-block" style="border:1px solid red">
        <div class="card-selector">
          <div class="card-body p-5">
            <div class="search-title">
              <h4>Catagories +</h4>
              <h6 v-for="item in grid.types" :key="item.name" @click="sortItems" :value="item.value">{{ item.name }}
              </h6>
              <h4 class="search-title">Filter by +</h4>
              <div class="co">
                <h5>Color</h5>
                <span v-for="item in grid.colors" :key="item.name" class="circle" style="`background-color:${item.name}`"
                  @click="sortItems" :value="item.value"></span>
              </div>
              <br><br>
              <h5>Price Range</h5>
              <p>Slider should be herererer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="row justify-content-around" style="display: none;">
        <div class="col col-xl-3 col-lg-3 d-none d-lg-block d-xl-block" style="border:1px solid red">
          <div class="card-selector">
            <div class="card-body p-5">
              <div class="search-title">
                <h4>Catagories +</h4>
                <h6 v-for="item in grid.types" :key="item.name" @click="sortItems" :value="item.value">{{ item.name }}
                </h6>
                <h4 class="search-title">Filter by +</h4>
                <div class="co">
                  <h5>Color</h5>
                  <span v-for="item in grid.colors" :key="item.name" class="circle"
                    style="`background-color:${item.name}`" @click="sortItems" :value="item.value"></span>
                </div>
                <br><br>
                <h5>Price Range</h5>
                <p>Slider should be herererer</p>
              </div>
            </div>
          </div>
        </div>
    </div> -->
  </div>
</template>

<script setup>
const store = useMainStore()

const grid = reactive({
  types: [
    { name: 'Table', value: 'table' },
    { name: 'Lamps', value: 'lamp' },
    { name: 'Chairs', value: 'chair' },
    { name: 'Sofas', value: 'sofa' }
  ],
  colors: [
    // TODO change the background colors to better and more subtle ones
    { name: 'yellow', value: 'yellow' },
    { name: 'blue', value: 'blue' },
    { name: 'white', value: 'white' },
    { name: 'red', value: 'red' }
  ],
  cards: [],
  showCards: 6,
})
onMounted(() => reSet())
const reSet = () => grid.cards = store.items;

// TODO move this to getters at the store. instead of passing it as props for <Card />
const slicedCards = computed(() => grid.cards.slice(0, grid.showCards))

// const incrementCards = () => grid.showCards += 6;

const sortItems = (value) => {
  grid.cards.sort((a, b) => {
    if (value === 'newset') return (a.title.length * 2) - (b.title.length * 4);
    if (value === 'price') return (a.price - b.price);
    if (value === 'trending') return (a.type.length - b.type.length);
  })
}

</script>

<style>
.container.grid {
  min-height: 60rem;
}

/*search options*/

.card-selector {
  color: #DCDCDC;
  height: 40rem;
  background: #2c3539 !important;
  box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0.1), 0 26px 70px 0 rgba(0, 0, 0, 0.69);
}

.search-title h6 {
  cursor: pointer;
}

.circle {
  height: 17px;
  width: 17px;
  border-radius: 50%;
  border: 0.7px solid #2c3539;
  display: inline-block;
  margin-left: 6px;
  cursor: pointer
}
</style>
