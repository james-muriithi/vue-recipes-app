<template>
  <recipe-item-header title=""></recipe-item-header>
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <div class="margin-bottom-40px card border-0 box-shadow">
          <div v-if="recipe">
            <div class="card-img-top">
              <img class="img-fluid w-100" v-lazy="lazyLoadOptions" />
            </div>
            <div class="padding-lr-30px padding-tb-20px">
              <div class="margin-bottom-20px margin-top-10px">
                <h4 class="text-dark" href="#">
                  {{ recipe.title }}
                </h4>
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
                  <a href="#" class="text-red"
                    ><i class="far fa-heart"></i> Save</a
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
    </div>
  </div>
</template>

<script>
import RecipeItemHeader from "../../components/recipes/RecipeItemHeader.vue";
import RecipeIngredients from "../../components/recipes/RecipeIngredients.vue";
import RecipeInstructions from "../../components/recipes/RecipeInstructions.vue";
export default {
  props: ["id"],
  components: {
    RecipeItemHeader,
    RecipeIngredients,
    RecipeInstructions
  },
  data() {
    return {
      isLoading: false
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
    }
  },
  created() {
    this.loadRecipe();
  }
};
</script>

<style scoped></style>
