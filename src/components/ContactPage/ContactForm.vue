<template>
  <section>
    <div class="container-fluid py-5">
      <div class="row d-flex">
        <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 order-sm-0 order-12" style="margin-right:-120px;">
          <img class="img-fluid" src="@/assets/con.jpg">
        </div>
        <div class="col-12 col-xl-6 col-lg-5 col-md-6 col-sm-12 order-first order-xl-0">
          <h1>Hello there</h1>
          <h2 style="color:grey">got a thought to discuss?</h2>
          <form>
            <div class="form-group">
              <input type="text" class="form-control" required>
              <label class="label" for="name">Name</label>
            </div>
            <div class="form-group">
              <input type="email" class="form-control" required>
              <label class="label" for="E-mail">E-mail</label>
            </div>
            <div class="form-group">
              <textarea class="form-control" style="overflow:hidden; height:130px" rows="3" required></textarea>
              <label class="label" for="Message">Message</label>
            </div>
              <button class="btn btn-light" href="#" role="button">submit</button>
          </form>
        </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>

<style scoped>
form {
  width: 100%;
  padding: 50px 0;
  display: block;
  margin: 0 auto;
}

.form-group {
  width: 100%;
  position: relative;
  margin: 0 0 50px;
}
.form-group label {
  font-weight: 100;
  font-size: 1.5rem;
  color: grey;
  position: absolute;
  transition: .5s ease-in-out;
  top: 0px;
  z-index: 0;
}
.form-group input, .form-group textarea  {
  outline: none;
  box-shadow: none;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #555;
  font-size: 1.4rem;
  font-weight: 100;
  width: 100%;
  height: 40px;
  transition: all 0.5s;
  z-index: 1;
  position: relative;
  border-radius: 0;
  resize: none;
  scroll-behavior: none;
}

.form-group input:valid ~ label,
.form-group input:focus ~ label,
.form-group textarea:valid ~ label,
.form-group textarea:focus ~ label {
  color: #71acd6;
  font-size: 1rem;
  top: -15px;
  transition: all 0.5s;
}

.form-group input:valid,
.form-group input:focus,
.form-group textarea:valid,
.form-group textarea:focus{
  border-color: #71acd6;
}

form button {
  -webkit-transition-duration: 200ms;
  transition-duration: 200ms;
  width: 120px;
  height: 50px;
  font-size: 15px;
  padding: 0px 30px;
  cursor: pointer;
  box-shadow: 0 26px 38px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

</style>
