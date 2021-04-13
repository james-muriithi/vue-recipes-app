import {
  fetchRecipes,
  saveRecipes,
  getLocalRecipes,
  getLocalRecipe,
  saveRecipe,
  fetchRecipe,
  saveFavouriteRecipes,
  getFavouriteRecipes,
  searchRecipes
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
    // console.log(context.state.recipes);
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

      context.commit(
        "addLoadedRecipes",
        allRecipes.slice(loadedRecipes.length, newLoadedRecipes)
      );
    }
  },
  saveRecipeAsFavourite(context, payload) {
    if (!context.state.favouriteRecipes.find(id => id == payload.id)) {
      context.commit("addFavouriteRecipe", payload.id);
    } else {
      context.commit("removeFavouriteRecipe", payload.id);
    }

    saveFavouriteRecipes(context.state.favouriteRecipes);
  },
  loadFavouriteRecipes(context) {
    const recipes = getFavouriteRecipes();
    context.commit("setFavouriteRecipes", recipes);
  },
  shareRecipe(_, payload) {
    const title = payload.title,
      url = payload.url,
      text = `${url}\n\n${title}\n${payload.text.substr(0, 250) || ""}`;

    if (navigator.share) {
      navigator
        .share({
          url,
          title,
          text
        })
        .then(() => console.log("Successful share"))
        .catch(error => console.log("Error sharing", error));
    } else {
      console.log("share not supported");
    }
  },
  async searchRecipe(context, payload) {
    if (payload.query) {
      let response = await searchRecipes(payload.query);

      const recipes = response.results;

      // console.log(recipes);

      await context.commit("setRecipes", recipes);
      await context.commit(
        "setLoadedRecipes",
        recipes.slice(
          context.state.loadedRecipes.length,
          context.state.pagination
        )
      );
    } else {
      context.dispatch("loadLatestRecipes", { forceReload: true });
    }
  }
};
