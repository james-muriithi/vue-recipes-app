<template>
  <div class="container">
    <div class="title text-center">
      <h2 class="font-weight-700 mb-3 text-main-color">Latest Recipes</h2>
      <!-- <div class="dropdown-divider mb-3">
      </div> -->
    </div>
    <div class="row">
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
import { mapActions } from 'vuex'
import RecipeItem from "../../components/recipes/RecipeItem.vue";

export default {
  name: "App",
  components: {
    RecipeItem,
  },
  computed: {
    recipes() {
      return this.$store.getters.recipes;
    },
  },
  methods: {
    ...mapActions(['loadLatestRecipes'])
  },
  created(){
    this.loadLatestRecipes({forceReload: false})
  }
};
</script>