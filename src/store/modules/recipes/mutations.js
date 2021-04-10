export default {
  setRecipes(state, recipes) {
    state.recipes = recipes;
  },
  setLoadedRecipes(state, recipes) {
    state.loadedRecipes = recipes;
  },
  setSelectedRecipe(state, recipe) {
    state.selectedRecipe = recipe;
  },
  addLoadedRecipes(state, recipes){
    state.loadedRecipes.push(...recipes)
  },
};
