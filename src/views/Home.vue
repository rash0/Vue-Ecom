<template>
  <div>
    <Carousel />
    <AboutUs />
  </div>
</template>

<script>
import Carousel from '@/Components/HomePage/Carousel.vue'
import AboutUs from '@/Components/HomePage/AboutUs.vue'

export default {
  components: {
    Carousel, AboutUs
  }
}

</script>
