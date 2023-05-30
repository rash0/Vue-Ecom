<template>
  <div>
    <div class="more info d-flex justify-content-between text-center">
      <div class="col4 flex-fill" v-for="(info, index) in text.moreInfo"
        :class="[index === text.active ? 'col4 active' : '']" @click="selectedInfo(index)" :key="index">
        <h6>{{ info }}</h6>
      </div>
    </div>
    <div class="container pt-3">
      <div class="row">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const text = reactive({
  moreInfo: ['DESCRIPTION', 'WARRANTY', 'REVIEWS'],
  active: 0,
});

//More Info area tab selector
const selectedInfo = (index: number): number => text.active = index;

</script>

<style scoped>
.col4 h6 {
  height: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid lightgrey;
  color: grey;
  cursor: pointer;
}

.col4.active h6 {
  font-weight: bold;
  border-bottom: 1px solid black !important;
  color: black;
}
</style>
