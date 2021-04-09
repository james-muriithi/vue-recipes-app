export default {
  recipes(state) {
    return state.recipes;
  },
  selectedRecipe(state) {
    return state.selectedRecipe;
  },
  loadedRecipes(state) {
    return state.loadedRecipes;
  },
  shouldLoadMore(state) {
    return state.recipes.length > state.loadedRecipes.length;
  }
};
