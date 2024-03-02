<template>
  <div class="border-2 border-rose-600">
    <nav class="flex justify-between md:mx-16">
      <!-- <HeaderMobileMenu /> -->
      <div class="flex items-center border-2 border-rose-600">
        <HeaderLogo />
        <HeaderNavLinks />
      </div>
      <div class="flex items-center">
        <HeaderSearchBar />
        <HeaderProfile />
        <HeaderCartButton @open="cartState" />
      </div>
    </nav>
    <!--User Modal-->
    <!-- <HeaderUserModal /> -->
    <!--Cart Component-->
    <HeaderCart :is-open="cart" @closeCart="cartState" />
  </div>
</template>

<script setup>
const cart = ref(false);

const cartState = () => (cart.value = !cart.value);
</script>

<style>
nav {
  z-index: 100;
}
.navbar-item {
  a {
    margin-left: 13px;
    font-size: 17px;
    text-decoration: none;
    color: black;
  }

  .bc {
    a:hover,
    a:active {
      color: #ffd700;
    }
  }
}

.close {
  position: relative;
  bottom: 20px;
  left: 10px;
  font-size: 31px;
  color: #000;
}

.btn-sm {
  border-radius: 0;
}

form .btn-xl.btn-success.mt-3 {
  position: relative;
  -webkit-transition-duration: 100ms;
  transition-duration: 100ms;
  width: 100%;
  height: 50px;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  box-shadow: 0 26px 38px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
