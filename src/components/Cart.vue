<template>
  <div>
    <div :class="cClass">
      <div class="cart-menu">
        <h1 class="text-center">Cart</h1>
        <hr>

        <transition name="fade">
          <div v-if="this.cartContent.length === 0" class="text-center font-italic">
            Your cart is empty, try to Add stuff.
          </div>
        </transition>

        <transition-group name="fade">
          <div class="row" v-for="thing in cartContent" v-bind:key="thing.id">
            <div class="col4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <img :src="thing.img" style="width: 90px;">
            </div>
            <div class="col6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <h4>{{ thing.title }}</h4>
              <h6>{{ thing.price }}</h6>
            </div>
            <div class="col2 col-xl-2 col-lg-2 col-md-2 col-sm-2 pt-4">
              <span class="remove-btn" @click="removeThing(thing.id)">remove</span>
            </div>
          </div>
        </transition-group >

        <hr v-if="this.cartContent.length !== 0">
        <div class="row justify-content-between" style="background:#7dcf85;padding:10px 10px 10px 10px" v-if="this.cartPrice != undefined">
          <div class="flex-column pl-3">
            <h4>Total</h4>
          </div>
          <div class="flex-column pr-3">
            <h4>${{ cartPrice }}</h4>
          </div>
        </div>
      </div>
    </div>

    <div :class="modalClass" @click="cartON"></div>
    <!--Cart Shadow Backdrop-->
    <!-- <div class="modal" @click="cartON" ref="myModalRef" role="dialog" tabindex="-1" data-backdrop="static" data-keyboard="false"/> -->
  </div>
</template>

<script>


export default {
  name: 'Cart',
  data() {
    return {
      cClass: 'cart',
      modalClass: 'modal off'
    }
  },
  computed:{
    cartContent(){
      return this.$store.state.cartItems
    },
    // modalShadow() {
    //   if(this.cClass==='cart on'){
    //    return $(this.$refs.myModalRef).modal('show')
    //  }
    //  if(this.cClass==='cart'){
    //   return $(this.$refs.myModalRef).modal('hide')
    // }},
    cartPrice() {
      return this.$store.getters.totalPrice
    }
  },
  methods: {
    cartON() {

      if(this.cClass === 'cart on'){
        this.cClass = 'cart'
        this.modalClass = 'modal off'
      }else{
        this.cClass = 'cart on'
        this.modalClass = 'modal'
      }

    },
    removeThing(id){
      this.$store.commit('outCart',id)
    // },
    // modalShadow() {
    //   (this.cClass === 'cart on') ?  :
    // },
  }
}
}
</script>

<style scoped>
/* Modal Overlay */
.modal {
  display: block;
  z-index: 1050;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
.modal.off {
  display: none;
}
/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
/* Cart Body */
.cart {
  position: fixed;
  margin-right: 0px;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  background: #303e49;
  overflow-y: auto;
  z-index:1051;
  -webkit-overflow-scrolling: touch;
  transform: translateX(360px);
  transition-property: transform;
  transition-duration: 0.4s;
}
.cart.on{
  transform: translateX(0);
  -webkit-overflow-scrolling: touch;
  transition-property: transform;
  transition-duration: 0.4s;

}
.cart-menu{
  color: #eee;
  margin-left: 10px;
  margin-right: 15px;
}

hr {
border-color: white;
}

.row{
  margin-top: 10px;
  margin-bottom: 10px;
}


.remove-btn{
  border-radius: 50%;
  content: url('https://png.icons8.com/windows/30/ffffff/multiply.png')
}

.remove-btn:hover {
  background-color: grey;
}

</style>
