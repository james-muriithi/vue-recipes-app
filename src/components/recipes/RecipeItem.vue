<template>
  <div class="col-xl-3 col-lg-4 col-sm-6 p-0">
    <div
      data-aos="fade"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-offset="0"
      data-aos-easing="ease-in-out"
    >
      <div class="recipe-item margin-bottom-40px shadow-box mx-2">
        <div class="card border-0">
          <div class="card-img-top">
            <a :href="`recipes/${id}`" :aria-label="title">
              <img
                class="img-fluid w-100"
                v-lazy="lazyLoadOptions"
                :alt="title"
              />
            </a>
          </div>
          <div class="padding-lr-20px padding-tb-20px">
            <h5 class="margin-bottom-20px margin-top-10px">
              <a class="text-black" :href="`recipes/${id}`">{{ title }}</a>
            </h5>
            <hr />
            <div class="row no-gutters">
              <div class="col-4 text-left">
                <a
                  href="#"
                  :class="favourite ? 'text-red' : 'text-grey'"
                  @click.prevent="saveRecipeAsFavourite(id)"
                  ><i :class="favourite ? 'fas fa-heart' : 'far fa-heart'"></i>
                  Save</a
                >
              </div>
              <div class="col-8 text-right">
                <a href="#" class="text-grey-2" @click.prevent="shareRecipe()"
                  ><i class="fas fa-share"></i> share</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: require("../../assets/fast-food.svg")
    },
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      default: ""
    }
  },
  computed: {
    lazyLoadOptions() {
      return {
        src: this.imgSrc,
        loading: require("../../assets/fast-food.svg"),
        error: require("../../assets/fast-food.svg")
      };
    },
    favourite() {
      return this.$store.getters.favouriteRecipes.includes(this.id);
    }
  },
  methods: {
    saveRecipeAsFavourite(id) {
      this.$store.dispatch("saveRecipeAsFavourite", { id });
    },
    shareRecipe() {
      this.$store.dispatch("shareRecipe", {
        url: `${window.location.href}recipes/${this.id}`,
        title: this.title,
        text: this.description
      });
    }
  }
};
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

h5 {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
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

.text-grey {
  color: rgb(106, 115, 124);
}

@media screen and (max-width: 576px) {
  .card-img-top img {
    max-height: 260px;
  }
}

@media screen and (min-width: 576px) {
  .card-img-top img {
    height: 230px !important;
  }
}
</style>
