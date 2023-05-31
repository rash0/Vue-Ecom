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

.search {
  outline: none;
  border: 1px #F8F8F8;
  background: #ededed url('../assets/search.png') no-repeat 5px center;
  padding: 5px 8px 0px 26px;
  width: 10px;
  -webkit-border-radius: 10em;
  -moz-border-radius: 10em;
  border-radius: 10em;
  -webkit-transition: all .5s;
  -moz-transition: all .5s;
  transition: all .5s;
  margin-right: 10px;

  &:focus {
    width: 160px;
    border: solid 1px #ccc;
    background-color: #fff;
    border-color: #98ccfd;
    -webkit-box-shadow: 0 0 5px rgba(109, 207, 246, .5);
    -moz-box-shadow: 0 0 5px rgba(109, 207, 246, .5);
    box-shadow: 0 0 5px rgba(109, 207, 246, .5);
    backface-visibility: hidden;
    perspective: 1000;
  }
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
