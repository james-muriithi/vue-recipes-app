<template>
  <recipe-item-header title=""></recipe-item-header>
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <div class="margin-bottom-40px card border-0 box-shadow">
          <div class="card-img-top">
            <img src="../../assets/fast-food.svg" alt="" />
          </div>
          <div class="padding-lr-30px padding-tb-20px">
            <div class="margin-bottom-20px margin-top-10px">
              <h4 class="text-dark" href="#">
                Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
              </h4>
            </div>
            <recipe-ingredients></recipe-ingredients>

            <recipe-instructions></recipe-instructions>

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
</template>

<script>
import RecipeItemHeader from "../../components/recipes/RecipeItemHeader.vue";
import RecipeIngredients from "../../components/recipes/RecipeIngredients.vue";
import RecipeInstructions from "../../components/recipes/RecipeInstructions.vue";
export default {
    props: ['id'],
  components: {
    RecipeItemHeader,
    RecipeIngredients,
    RecipeInstructions,
  },
  data(){
      return {
          isLoading: false
      }
  },
  methods: {
    async loadRecipe() {
        const recipeId = this.id;
        this.isLoading = true;
        try {
            await this.$store.dispatch('loadRecipe', {id: recipeId})
        } catch (error) {
            console.log(error);
        }
        this.isLoading = false;
    },
  },
  created() {
      this.loadRecipe()
  },
};
</script>

<style scoped>
</style>