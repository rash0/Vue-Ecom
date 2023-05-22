<template>
  <footer class="footer_area">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-3 col-xl-2 col-lg-3 col-md-3 col-sm-3">
          <div class="footer-widget">
            <div class="footer-title">Navigate</div>
            <ul class="list-unstyled">
              <NuxtLink to="/"><li>About Us</li></NuxtLink>
              <NuxtLink to="/"><li>Blog</li></NuxtLink>
              <NuxtLink to="/"><li>Contact Us</li></NuxtLink>
              <NuxtLink to="/"><li>Sitemap</li></NuxtLink>
            </ul>
          </div>
        </div>

        <div class="col-3 col-xl-2 col-lg-3 col-md-3 col-sm-3">
          <div class="footer-widget">
            <div class="footer-title">Collection</div>
            <ul class="list-unstyled">
              <NuxtLink to="/products"><li>New arrivals</li></NuxtLink>
              <NuxtLink to="/products"><li>Featured</li></NuxtLink>
              <NuxtLink to="/products"><li>Catalog</li></NuxtLink>
              <NuxtLink to="/products"><li>Brands</li></NuxtLink>
            </ul>
          </div>
        </div>

        <div class="col-3 col-xl-2 col-lg-3 col-md-3 col-sm-3">
          <div class="footer-widget">
            <div class="footer-title">Categories</div>
            <ul class="list-unstyled">
              <NuxtLink to="/products"><li>Tables</li></NuxtLink>
              <NuxtLink to="/products"><li>Lamps</li></NuxtLink>
              <NuxtLink to="/products"><li>Chairs</li></NuxtLink>
              <NuxtLink to="/products"><li>Sofas</li></NuxtLink>
            </ul>
          </div>
        </div>

        <div class="col-12 col-xl-6 col-lg-3 col-md-3 col-sm-12 text-left text-md-right pb-5">
          <div class="footer-widget">
            <h4>399 Crowfield Road,</h4>
            <h4>Phoenix, Arizona 85012</h4>
            <a href="mailto:#">asff@fdsfsdc.com</a>
            <h6>+602-926-5809</h6>
          </div>
        </div>

      </div>

      <div class="row justify-content-between">
        <div class="col-xl-7 col-lg-6 col-md-6 col-sm-6 col-6">
          <div class="tiny-footer">
            <p>Copyright © All Rights Reserved 2020 </p>
          </div>
        </div>
        <div class="col-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 text-right">
          <div class="social-info">
            <strong>Get social</strong>
            <img class="twitter" src="@/assets/twitter.png">
            <img class="pinterest" src="@/assets/pinterest.png">
            <img class="facebook" src="@/assets/facebook.png">
            <img class="instagram" src="@/assets/insta.png">
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer_area {
  position: relative;
  z-index: 1;
  color: #2c3539;
  background-color: #fefefe;
}

.footer-widget {
  padding-top: 60px;
}

.footer-title {
  padding-bottom: 20px;
  font-weight: bold;
}

.list-unstyled a {
  text-decoration: none;
}

.list-unstyled a li {
  color: #2c3e50;
  margin-bottom: 10px;
}

.social-info>img {
  padding-left: 10px;
}

.social-info>img:hover {
  opacity: 0.7;
}

</style>
