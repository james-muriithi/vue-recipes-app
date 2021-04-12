<template>
  <recipe-item-header title=""></recipe-item-header>
  <transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
    <div class="container">
      <div v-if="isLoading" class="row justify-content-center mt-5">
        <base-spinner></base-spinner>
      </div>
      <div v-else>
        <div class="row" v-if="recipe">
          <div class="col-lg-8">
            <div class="margin-bottom-40px card border-0 box-shadow">
              <div v-if="recipe">
                <div class="card-img-top">
                  <img
                    class="img-fluid w-100"
                    v-lazy="lazyLoadOptions"
                    :alt="recipe.title"
                  />
                </div>
                <div class="padding-lr-30px padding-tb-20px">
                  <div class="margin-bottom-20px margin-top-10px">
                    <h1 class="text-dark h4" href="#">
                      {{ recipe.title }}
                    </h1>
                  </div>
                  <recipe-ingredients
                    :ingredients="recipe.extendedIngredients"
                  ></recipe-ingredients>

                  <recipe-instructions
                    :instructions="instructions"
                  ></recipe-instructions>

                  <hr />
                  <div class="row no-gutters">
                    <div class="col-4 text-left">
                      <a
                        href="#"
                        :class="favourite ? 'text-red' : 'text-grey'"
                        @click.prevent="saveRecipeAsFavourite(parseInt(id))"
                        ><i
                          :class="favourite ? 'fas fa-heart' : 'far fa-heart'"
                        ></i>
                        Save</a
                      >
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
          </div>
          <div class="col-lg-4">
            <div class="p-4 shadow" v-if="recipe.summary">
              <h2 class="h5">Summary</h2>
              <hr />
              <div class="text-left">
                <p v-html="recipe.summary"></p>
              </div>
            </div>
          </div>
        </div>
        <not-found
          v-else
          headerTitle=""
          description="The recipe you are looking for is not available!"
        ></not-found>
      </div>
    </div>
  </transition>
</template>

<script>
import RecipeItemHeader from "../../components/recipes/RecipeItemHeader.vue";
import RecipeIngredients from "../../components/recipes/RecipeIngredients.vue";
import RecipeInstructions from "../../components/recipes/RecipeInstructions.vue";
import NotFound from "../NotFound.vue";
export default {
  props: ["id"],
  components: {
    RecipeItemHeader,
    RecipeIngredients,
    RecipeInstructions,
    NotFound
  },
  data() {
    return {
      isLoading: false,
      error: null
    };
  },
  methods: {
    async loadRecipe() {
      const recipeId = this.id;
      this.isLoading = true;
      try {
        await this.$store.dispatch("loadRecipe", { id: recipeId });
      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;
    },
    saveRecipeAsFavourite(id) {
      this.$store.dispatch("saveRecipeAsFavourite", { id });
    },
    shareRecipe() {
      this.$store.dispatch("shareRecipe", {
        url: `${window.location.href}`,
        title: this.recipe.title,
        text: this.recipe.description
      });
    }
  },
  computed: {
    recipe() {
      return this.$store.getters.selectedRecipe;
    },
    lazyLoadOptions() {
      return {
        src: this.recipe.image,
        loading: require("../../assets/fast-food.svg"),
        error: require("../../assets/fast-food.svg")
      };
    },
    instructions() {
      let instructions = [];
      if (
        this.recipe.analyzedInstructions &&
        this.recipe.analyzedInstructions.length > 0
      ) {
        instructions = this.recipe.analyzedInstructions[0].steps;
      }
      return instructions;
    },
    favourite() {
      return this.$store.getters.favouriteRecipes.includes(parseInt(this.id));
    }
  },
  created() {
    this.loadRecipe();
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.text-grey {
  color: rgb(106, 115, 124);
}
@media screen and (max-width: 476px) {
  .padding-lr-30px {
    padding-left: 8px;
    padding-right: 8px;
  }
}
</style>
