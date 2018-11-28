<template >
<div class="container py-5" style="padding-top:70px;">
  <nav class="row justify-content-start" v-for="it in information" :key="it.id" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item"><router-link to="/products">Products</router-link></li>
      <li class="breadcrumb-item">{{ it.type }}</li>
      <li class="breadcrumb-item active">{{ it.title }}</li>
    </ol>
  </nav>

  <div class="row mb-5" v-for="it in information" :key="it.id">
    <div class="col6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
      <img class="img-fluid" :src="it.img">
    </div>

    <div class="col6 col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex align-items-center justify-content-start">
      <div class="info pt-xl-0 pt-lg-0 pt-5">
        <span class="float-left pr-3">★★★★★</span><h6 style="width:190px;">3 reviews</h6>
        <h1 class="font-weight-bold text-uppercase pt-3">{{ it.title }}</h1>
        <h4>${{ it.price }}</h4>
        <br><br><br>
        <div class="control number text-center">
          <button class="decrement-button" @click="dec" style="border-right: 0.2px solid lightgrey;float:left;margin-right: 11px;">−</button>
          <span>{{ quan }}</span>
          <button class="increment-button" @click="inc" style="border-left: 0.2px solid lightgrey;margin-left: 16px;">+</button>
          <br><br>
        </div>
        <button class="add-to-cart-button" @click="addtoCart(it, it.id)">ADD TO CART</button>
      </div>
    </div>
  </div>

  <div class="more info d-flex justify-content-between text-center" >
      <div class="col4 flex-fill" v-for="(info, index) in moreInfo" :class="[index === active ? 'col4 active' : '']" @click="moreInfoSelect(index)" :key="info.id">
            <h6>{{ info }}</h6>
      </div>
  </div>
  <div class="container pt-3">
    <div class="row">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>

  <div class="container py-5 my-5">
    <hr>
    <h6 class="d-flex justify-content-center pb-2">RELATED PRODUCTS</h6>
    <div class="row text-center">

      <div class="col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 mt-4" v-for="item in sLiceCards" :key="item.id">
        <div class="card">
          <img class="card-img-top" :src="item.img" alt="Card image cap">
          <div class="overlay">
            <button type="button" class="btn btn-outline-secondary btn-lg" @click="addtoCart(item, item.id)">Add +</button>
            <router-link to="/info"><button type="button" class="btn btn-outline-secondary btn-lg" @click="sendInfo(item, item.id)">Info</button></router-link>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">${{ item.price }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>
</template>

<script>

export default {
  name:'Info',
  data() {
    return {
      information: [],
      quan: 1,
      moreInfo: ['DESCRIPTION', 'WARRANTY', 'REVIEWS'],
      active: 0,
      relatedItems: []
    }
  },
  created(){
    this.information = this.infO
    this.relatedItems = this.bringItems
    },
  computed: {
    infO() {
      return this.$store.getters.infoLength
    },
    bringItems() {
      return this.$store.state.items
    },
    sLiceCards(){
      return this.relatedItems.slice(0 ,4)
    }//,
    //infoLength() {
      //return this.$store.getters.infoLength
    //}
  },
  methods: {
    inc() { // Info area Incrememnt button
      if (this.quan <= 8 )
       return this.quan ++
    },
    dec() { // Info area Decrememnt button
      if (this.quan >= 2)
       return this.quan --
    },
    addtoCart(it, id) { // Info area Add to cart button
      for (var i = 0; i < this.quan; i++) {
        this.$store.commit('inCart', it, id)
      }
    },
    moreInfoSelect(index) { //More Info area tab selector
      return this.active = index
    },
    sendInfo(it, id) {
     this.$store.commit('addtoInfo', it, id)
    }
  }
}
</script>

<style scoped>
/*BreadCrumb Area*/

.breadcrumb-item {
  background: inherit !important;
  color: #2c3539 !important;
  font-size: 18px;
}

.breadcrumb-item.active {
  text-decoration: none !important;
  color: #f2be00 !important;
}

/* Item Info Area*/

.img-fluid{
  min-width: 90% !important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.control.number {
  border: 0.2px solid lightgrey;
  font-size: 19px;
  font-weight: bold;
  height: 35px;
  width: 155px;
  margin-bottom: 30px;
}
.control.number button{
  border:none;
  background: inherit;
  width: 56px;
  height: 35px;
  outline-style: none;
}
.control.number button:active{
  background-color: lightgrey;
}
.control.number h5 {
  margin-left: 13px;
  margin-right: 13px;
}
.add-to-cart-button {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  width: 155px;
  height: 70px;
  background-color: #2c3539;
  color: #fff;
  font-size: 15px;
  padding: 0px 30px;
  cursor: pointer;
  position: relative;
  top: 0;
  z-index: 10;
  border: none;
  box-shadow: 0 26px 38px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}
.add-to-cart-button:hover, .add-to-cart-button:focus {
  background-color: inherit;
  color: black;
}

/* more Info area*/

.col4 h6 {
  height: 25px;
  padding-bottom: 25px;
  border-bottom:1px solid lightgrey;
  color: grey;
}

.col4.active h6 {
  font-weight: bold;
  border-bottom:1px solid black !important;
  color: black;
}

/* Related Products area*/

hr {
width: 50px;
border-bottom: 1px solid black;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
