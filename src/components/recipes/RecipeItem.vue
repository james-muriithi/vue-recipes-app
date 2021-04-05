<template>
  <div
    class="col-xl-3 col-lg-4 col-sm-6 recipe-item margin-bottom-40px shadow-box p-0 mx-3 mx-md-0"
  >
    <div class="card border-0 box-shadow">
      <div class="card-img-top">
        <a href="#"
          ><img
            class="img-fluid w-100"
            src="../../assets/fast-food.svg"
            alt=""
        /></a>
      </div>
      <div class="padding-lr-30px padding-tb-20px">
        <h5 class="margin-bottom-20px margin-top-10px">
          <a class="text-black" href="#">Slow Cooker Loaded Potato Soup</a>
        </h5>
        <hr />
        <div class="row no-gutters">
          <div class="col-4 text-left">
            <a href="#" class="text-red"><i class="far fa-heart"></i> Save</a>
          </div>
          <div class="col-8 text-right">
            <a href="#" class="text-grey-2"
              ><i class="fas fa-share"></i> share</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    setup() {
        //https://exactthemes.com/restrox/img/restaurant-thumbnail-1.jpg
    },
}
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap");
.h5,
.h6,
h5,
h6 {
  font-family: "Josefin Sans", "Poppins", sans-serif;
  font-weight: 700;
}

.h5,
h5 {
  font-size: 16px;
  line-height: 20px;
}
.shadow-box {
  /* box-shadow: 0 0 20px rgb(219 224 234); */
  -webkit-box-shadow: 0px 6px 15px 0px rgb(0 0 0 / 10%);
  -moz-box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 6px 15px 0px rgb(0 0 0 / 10%);
}
.recipe-item {
  transition: all ease 0.2s;
}

.recipe-item:hover {
  transform: translateY(-5px);
}

a {
  text-decoration: none;
}
.text-black {
  color: #212121;
  transition: all ease 0.3s;
}
a.text-black:hover {
  color: #ff4136;
}

@media screen and (max-width: 576px) {
  .card-img-top img {
    max-height: 270px;
  }
}

@media screen and (min-width: 576px) {
  .card-img-top img {
    max-height: 230px!important;
  }
}
</style>