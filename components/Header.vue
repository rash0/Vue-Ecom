<template>
  <div>
    <nav class="navbar">
      <HeaderMobileMenu />
      <div class="navbar-group">
        <HeaderLogo />
        <HeaderNavLinks />
      </div>
      <div class="navbar-group">
        <HeaderSearchBar />
        <div class="user">
          <img data-bs-toggle="modal" data-bs-target="#userModal" width="25" height="25"
            src="https://img.icons8.com/ultraviolet/40/gender-neutral-user.png" alt="gender-neutral-user" />
        </div>
        <HeaderCartButton @open="cartState" />
      </div>
    </nav>
    <!--User Modal-->
    <HeaderUserModal />
    <!--Cart Component-->
    <Cart :is-open="cart.state" @closeCart="cartState" />
  </div>
</template>

<script setup lang="ts">

const cart = reactive({
  state: false
})

function cartState(): void {
  cart.state = !cart.state
}

</script>

<style lang="scss">
nav {
  z-index: 100;
}

.navbar {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #DCDCDC;
  background-color: #F8F8F8;
  padding-left: 20px;
  padding-right: 20px;
}

.navbar-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
      color: #FFD700;
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

.user {
  cursor: pointer
}
</style>
