import { createStore } from "vuex";
import recipesModule from "./modules/recipes";

const store = createStore({
  modules: {
    recipes: recipesModule
  }
});

export default store;
