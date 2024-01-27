<template>
  <section class="about-us">
    <div class="grid grid-cols-1 md:grid-cols-2 px-12">
      <!-- TODO there should an h1 title here -->
      <div class="col -mr-6">
        <img
          class="float-lg-right"
          src="~/assets/new.jpg"
          alt="home-img"
          title="home-img"
          loading="lazy"
        />
      </div>
      <div class="col -ml-6">
        <h2 class="text-4xl">New minimalist<br />–components</h2>
        <p class="text-lg/[25px] mt-4">
          Gravity will force your feet to the ground. Don’t be afraid, your mind
          will find your freedom. You won’t miss a sunrise. You’ll rise with the
          sun. <br />You’ll never run away from the storm. You will flow with
          the wind. <br />Don’t hesitate to pause. Follow the flow of the
          moment. And then, take the first step towards the new you.
        </p>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 px-12 my-16">
      <div class="col text-right" style="margin-right: -9%; z-index: 1">
        <h2 class="text-4xl">Save Space<br />more freedom</h2>
        <p class="text-lg/[25px] mt-4">
          Gravity will force your feet to the ground. Don’t be afraid, your mind
          will find your freedom. You won’t miss a sunrise. You’ll rise with the
          sun. You’ll never run away from the storm. You will flow with the
          wind. Don’t hesitate to pause. Follow the flow of the moment. And
          then, take the first step towards the new you.
        </p>
      </div>
      <div class="col -mr-6">
        <img
          src="~/assets/33.jpg"
          alt="home-img-2"
          title="home-img-2"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-us img {
  width: 90%;
  min-width: 380px;
}
</style>
