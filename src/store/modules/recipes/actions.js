import {
  fetchRecipes,
  saveRecipes,
  getLocalRecipes,
  getLocalRecipe,
  saveRecipe,
  fetchRecipe,
} from "../../../helpers/Recipes.js";
export default {
  async loadLatestRecipes(context, payload) {
    if (!context.getters.recipes || context.getters.recipes.length == 0) {
      const recipes = JSON.parse(getLocalRecipes()) || [];
      context.commit("setRecipes", recipes);
    }

    if (!payload.forceReload && context.getters.recipes.length > 0) {
      return;
    }

    const recipes = await fetchRecipes();

    saveRecipes(JSON.stringify(recipes.recipes));

    context.commit("setRecipes", recipes.recipes);
  },
  async loadRecipe(context, payload) {
    const savedRecipe = JSON.parse(getLocalRecipe(payload.id));
    if (savedRecipe) {
      return context.commit("setSelectedRecipe", savedRecipe);
    }

    const recipe = await fetchRecipe(payload.id);

    saveRecipe(JSON.stringify(recipe), payload.id);

    context.commit("setSelectedRecipe", recipe);
  },
};
