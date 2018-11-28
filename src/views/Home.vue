<template>
  <div>
    <section class="jum">
      <div id="heroControls" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#heroControls" class="active" data-slide-to="0"></li>
          <li data-target="#heroControls" data-slide-to="1"></li>
          <li data-target="#heroControls" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="img-fluid" src="../assets/jum1.jpg" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="img-fluid" src="../assets/jum2.jpg" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="img-fluid" src="../assets/jum3.jpg" alt="Third slide">
          </div>
        </div>
      </div>
    </section>

    <section class="info">
      <div class="row p-4">
        <div class="col-6">
          <img class="float-lg-right" src="../assets/new.jpg">
        </div>
        <div class="col-12 col-sm-6">
          <h1>New minimalist<br>–components</h1>
          <h6>Gravity will force your feet to the ground. Don’t be afraid, your mind will find your freedom.
             You won’t miss a sunrise. You’ll rise with the sun.
             <br>You’ll never run away from the storm. You will flow with the wind.
             <br>Don’t hesitate to pause. Follow the flow of the moment.
             And then, take the first step towards the new you.
            </h6>
        </div>
      </div>
      <div class="row p-4">
        <div class="col-12 col-sm-6 text-sm-right text-md-right ml-sm-0 ml-md-5 ml-lg-5 ml-xl-5 text-lg-right order-sm-first order-12" style="margin-right: -8%; z-index:1;">
          <h1>Save Space<br>more freedom</h1>
          <h6>Gravity will force your feet to the ground. Don’t be afraid, your mind will find your freedom.
             You won’t miss a sunrise. You’ll rise with the sun.
             You’ll never run away from the storm. You will flow with the wind.
             Don’t hesitate to pause. Follow the flow of the moment.
             And then, take the first step towards the new you.
            </h6>
        </div>
        <div class="col-6">
          <img src="../assets/33.jpg">
        </div>
      </div>
    </section>

  </div>
</template>

<style>

.img-fluid {
  min-width: 800px !important;
}

ol.carousel-indicators li {
  background-color: white;
  height: 20px;
  width: 20px;
  border-radius: 30px;
  border: 0.6px solid black;
}

ol.carousel-indicators li.active {
  background: #dbf0fa;
}

/*home image*/

.info img {
  width: 90%;
  min-width: 380px;
}
</style>
