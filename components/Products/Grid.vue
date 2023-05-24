<template>
  <div class="container grid">
    <div class="row justify-content-around">
      <div class="row col-6 pb-3">
        <div class="dropdown mx-3">
          <a class="btn btn-light dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">SORT BY
            <span style="color:#f2be00;">{{ grid.sortButton }}</span>
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" @click="sortItems('newset')" value="newset">Newest</a>
            <a class="dropdown-item" @click="sortItems('price')" value="price">Price</a>
            <a class="dropdown-item" @click="sortItems('trending')" value="trending">Trending</a>
          </div>
        </div>
      </div>
      <div class="row col-6 flex-row-reverse">
        <div class="view-button">
          <div class="dropdown">
            <button class="btn btn-light dropdown-toggle d-block d-lg-none d-xl-none" role="button" id="MenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CATEGORIES</button>
            <div class="dropdown-menu" aria-labelledby="MenuLink">
              <a class="dropdown-item" v-for="item in grid.types" :key="item.name" @click="sortItems" :value="item.value">{{ item.name }}</a>
              <div class="dropdown-divider"></div>
              <div class="pl-3">
                <span v-for="item in grid.colors" :key="item.name" class="circle" style="`background-color:${item.name}`" @click="sortItems" :value="item.value"></span>
              </div>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" @click="reSet">Reset</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-xl-3 col-lg-3 d-none d-lg-block d-xl-block">
          <div class="card-selector">
            <div class="card-body p-5">
              <div class="search-title">
                <h4>Categories  +</h4>
                <h6 v-for="item in grid.types" :key="item.name" @click="sortItems" :value="item.value">{{ item.name }}</h6>
                <h4 class="search-title">Filter by  +</h4>
                <div class="co">
                  <h5>Color</h5>
                  <span v-for="item in grid.colors" :key="item.name" class="circle" style="`background-color:${item.name}`" @click="sortItems" :value="item.value"></span>
                </div>
                <br><br>
                <h5>Price Range</h5>
                <p>Slider should be herererer</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 text-center">
          <div v-if="grid.cards.length === 0" class="d-flex align-items-center justify-content-center">
            <h4>Sorry, we can't find any product with this features</h4>
          </div>

          <ProductsCard :cards="slicedCards"/>

          <div v-if="grid.cards.length !== 0" class="d-grid col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 py-3">
            <button type="button" @click="incrementCards" class="btn btn-outline-secondary btn-lg btn-block">More +</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const store = useMainStore()

const grid = reactive({
      types: [
        {name: 'Table', value:'table'},
        {name: 'Lamps', value:'lamp'},
        {name: 'Chairs', value:'chair'},
        {name: 'Sofas', value:'sofa'}
      ],
      colors: [
        // TODO change the background colors to better and more subtle ones
        {name: 'yellow', value:'yellow'},
        {name: 'blue', value:'blue'},
        {name: 'white', value:'white'},
        {name: 'red', value:'red'}
      ],
      cards: [],
      showCards: 6,
      sortButton: 'DEFAULT'
})
onMounted(() => reSet()) 
const reSet = () => grid.cards = store.items;

// TODO move this to getters at the store. instead of passing it as props for <Card />
const slicedCards = computed(() => grid.cards.slice(0, grid.showCards))

const incrementCards = () => grid.showCards += 6;

const sortItems = (value) => {
  grid.cards.sort((a, b) => {
    if(value === 'newset') return (a.title.length * 2)-(b.title.length * 4);
    if(value === 'price') return (a.price-b.price);
    if(value === 'trending') return (a.type.length-b.type.length);
  })
    return grid.sortButton = value.toUpperCase()
  }

</script>

<style>
.container.grid {
  min-height: 60rem;
}

.container.grid a {
  cursor: pointer !important;
}

.btn-light {
  color: black !important;
  background: white;
  border-radius: 0 !important;
  border: 1px solid grey !important;
}
.dropdown-menu{
  background-color: #eee;
  color: #2c3539;
}

.dropdown-menu > a:hover{
  background-color: #dae0e5

}

.btn-outline-secondary {
  border-radius: 0 !important;
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
  cursor:pointer
}
</style>
