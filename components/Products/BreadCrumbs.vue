<template>
  <div>
    <h1 class="pt-3 text-center">New arrivals</h1>
    <nav class="d-flex justify-content-center" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Products</li>
      </ol>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.breadcrumb {
  background: inherit !important;
  color: #2c3539 !important;
  font-size: 20px;

  li {
    text-decoration: none !important;
    color: #f2be00 !important;
  }

  a {
    text-decoration: none !important;
    color: #2c3539 !important;
  }
}
</style>
