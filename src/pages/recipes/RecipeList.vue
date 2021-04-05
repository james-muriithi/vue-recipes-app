<template>
  <div class="container">
    <div class="title text-center">
      <h2 class="font-weight-700 mb-3 text-main-color">Latest Recipes</h2>
      <!-- <div class="dropdown-divider mb-3">
      </div> -->
    </div>
    <div class="row">
      <recipe-item></recipe-item>
    </div>
  </div>
</template>

<script>
import RecipeItem from "../../components/recipes/RecipeItem.vue";

export default {
  name: "App",
  components: {
    RecipeItem,
  },
};
</script>