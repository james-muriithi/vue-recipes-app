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
  addLoadedRecipes(state, recipes) {
    state.loadedRecipes.push(...recipes);
  },
  addFavouriteRecipe(state, recipeId){
    state.favouriteRecipes.unshift(recipeId)
  },
  removeFavouriteRecipe(state, recipeId){
    state.favouriteRecipes = state.favouriteRecipes.filter(id => id != recipeId)
  },
  setFavouriteRecipes(state, recipes) {
    state.favouriteRecipes = recipes;
  },
};
