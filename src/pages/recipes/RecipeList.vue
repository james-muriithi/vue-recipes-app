<template>
  <div class="container">
    <div class="title text-center">
      <h2 class="font-weight-700 mb-3 text-main-color">Latest Recipes</h2>
      <!-- <div class="dropdown-divider mb-3">
      </div> -->
    </div>
    <div class="row" v-if="isLoading">
      <recipe-item-shimmer
        v-for="i in loadingDivs"
        :key="i"
      ></recipe-item-shimmer>
    </div>
    <div class="row" v-else>
      <recipe-item
        v-for="recipe in recipes"
        :key="recipe.id"
        :title="recipe.title"
        :id="recipe.id"
        :imgSrc="recipe.image"
      ></recipe-item>
    </div>
  </div>
</template>

<script>
import RecipeItem from "../../components/recipes/RecipeItem.vue";
import RecipeItemShimmer from "../../components/recipes/RecipeItemShimmer.vue";

export default {
  name: "App",
  components: {
    RecipeItem,
    RecipeItemShimmer,
  },
  data() {
    return { isLoading: false, loadingDivs: new Array(15).fill(0) };
  },
  computed: {
    recipes() {
      return this.$store.getters.recipes;
    },
  },
  methods: {
    async loadLatestRecipes(options) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("loadLatestRecipes", options);
      } catch (error) {
        console.log(error);
      }

      this.isLoading = false;
    },
  },
  created() {
    this.loadLatestRecipes({ forceReload: false });
  },
};
</script>
