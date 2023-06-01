<template>
  <div>
    <div :class="['cart', cart.isOpen ? 'on' : '']">
      <div class="cart-menu">
        <h3 class="text-center mt-4 pb-2">Cart</h3>
        <hr>

        <div v-if="!store.itemsNumber" class="text-center font-italic">
          Your cart is empty, try to Add stuff.
        </div>

        <div class="row" v-for="item in store.cartItems" :key="item.id">
          <div class="col4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <img :src="useAsset(item.img)" style="width: 90px;">
          </div>
          <div class="col6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <h4>{{ item.title }}</h4>
            <h6>${{ item.price }}</h6>
          </div>
          <div class="col2 col-xl-2 col-lg-2 col-md-2 col-sm-2 pt-4">
            <span class="remove-btn" style="cursor: pointer;" @click="store.outCart(item.id)">remove</span>
          </div>
        </div>
        <div v-if="store.itemsNumber">
          <hr>
          <div class="row align-items-center p-2" style="background:#7dcf85">
            <div class="col pl-3 pt-3">
              <h4>Subtotal</h4>
              <p class="fs-6 px-3" style="color:#303E49;margin-top: -8px">{{ `(${store.itemsNumber} items)`
              }}
              </p>
            </div>
            <div class="col text-center pr-3">
              <h4>${{ store.totalPrice }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="['modal', cart.isOpen ? '' : 'off']" @click="$emit('closeCart')"></div>
  </div>
</template>

<script setup>

const store = useMainStore()

const cart = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

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
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
}

.modal.off {
  display: none;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
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
  z-index: 1051;
  -webkit-overflow-scrolling: touch;
  transform: translateX(360px);
  transition-property: transform;
  transition-duration: 0.4s;
}

.cart.on {
  transform: translateX(0);
  -webkit-overflow-scrolling: touch;
  transition-property: transform;
  transition-duration: 0.4s;
}

.cart-menu {
  color: #eee;
  margin-left: 10px;
  margin-right: 15px;
}

hr {
  border-color: white;
}

.row {
  margin-top: 10px;
  margin-bottom: 10px;
}


.remove-btn {
  border-radius: 50%;
  content: url('../assets/multiply.png')
}

.remove-btn:hover {
  background-color: grey;
}
</style>
