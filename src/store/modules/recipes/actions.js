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
      context.commit(
        "setLoadedRecipes",
        recipes.slice(
          context.state.loadedRecipes.length,
          context.state.pagination
        )
      );
    }

    if (!payload.forceReload && context.getters.recipes.length > 0) {
      return;
    }

    let recipes = await fetchRecipes();

    recipes = recipes.recipes;

    saveRecipes(JSON.stringify(recipes));

    context.commit("setRecipes", recipes);
    context.commit(
      "setLoadedRecipes",
      recipes.slice(
        context.state.loadedRecipes.length,
        context.state.pagination
      )
    );
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

  loadMore(context) {
    const loadedRecipes = context.state.loadedRecipes;
    const allRecipes = context.state.recipes;

    if (allRecipes.length > loadedRecipes.length) {
      const newLoadedRecipes =
        loadedRecipes.length + parseInt(context.state.pagination) >
        allRecipes.length
          ? allRecipes.length
          : loadedRecipes.length + parseInt(context.state.pagination);

          context.commit('setLoadedRecipes', allRecipes.slice(0, newLoadedRecipes));
    }
  },
};
