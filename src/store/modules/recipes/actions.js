import {
  fetchRecipes,
  saveRecipes,
  getLocalRecipes,
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
};
