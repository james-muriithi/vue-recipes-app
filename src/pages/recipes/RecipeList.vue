<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col-12 text-right px-0">
        <the-search-bar></the-search-bar>
      </div>
    </div>
    <div class="title text-center">
      <!-- <h2 class="font-weight-700 mb-4 text-main-color">Latest Recipes</h2> -->
      <!-- <div class="dropdown-divider mb-3">
      </div> -->
    </div>
    <div class="row" v-if="isLoading">
      <recipe-item-shimmer
        v-for="i in loadingDivs"
        :key="i"
      ></recipe-item-shimmer>
    </div>
    <div v-else>
      <div v-if="recipes" class="row">
        <transition-group
          enter-active-class="animate__animated animate__fadeIn"
          leave-active-class="animate__animated animate__fadeOut"
        >
          <recipe-item
            v-for="recipe in recipes"
            :key="recipe.id"
            :title="recipe.title"
            :id="recipe.id"
            :imgSrc="recipe.image"
            :description="recipe.summary"
          ></recipe-item>
        </transition-group>
      </div>
      <div class="text-center" v-else>
        <p>No recipes found</p>
      </div>
    </div>
    <div class="text-center mb-4" v-if="shouldLoadMore">
      <button @click="loadMore" class="btn btn-primary py-2 px-4 rounded-pill">
        Load more
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import RecipeItem from "../../components/recipes/RecipeItem.vue";
import TheSearchBar from "../../components/layout/TheSearchBar.vue";
import RecipeItemShimmer from "../../components/recipes/RecipeItemShimmer.vue";

export default {
  name: "App",
  components: {
    RecipeItem,
    RecipeItemShimmer,
    TheSearchBar
  },
  data() {
    return {
      isLoading: false,
      loadingDivs: new Array(15).fill(0),
      error: null
    };
  },
  computed: {
    recipes() {
      console.log(this.$store.getters.loadedRecipes.length);
      return this.$store.getters.loadedRecipes;
    },
    ...mapGetters(["shouldLoadMore", "favouriteRecipes"])
  },
  methods: {
    async loadLatestRecipes(options) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("loadLatestRecipes", options);
      } catch (error) {
        this.error = error.message;
        console.log(error);
      }

      this.isLoading = false;
    },
    ...mapActions(["loadMore"])
  },
  created() {
    this.loadLatestRecipes({ forceReload: false });
  }
};
</script>

<style scoped>
button:focus,
button:active {
  border: none;
  box-shadow: none;
  outline: none;
}
</style>
