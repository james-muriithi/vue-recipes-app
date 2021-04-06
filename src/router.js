import { createRouter, createWebHistory } from "vue-router";

import RecipeList from "./pages/recipes/RecipeList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: RecipeList }]
});

export default router;
