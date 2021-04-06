import { fetchRecipes, saveRecipes, getLocalRecipes } from '../../../helpers/Recipes.js'
export default {
  async loadLatestRecipes(context, payload) {
    if (!payload.forceReload) {
        if(!context.recipes || context.recipes.length == 0){
            const recipes = getLocalRecipes() || [];
            context.commit('setRecipes', recipes)
        }
      return;
    }

    const recipes = await fetchRecipes();

    saveRecipes(recipes.recipes);

    context.commit('setRecipes', recipes.recipes)
  },
};
