import { createRouter, createWebHistory } from "vue-router";

import RecipeList from "./pages/recipes/RecipeList.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: RecipeList },
    { path: "/:notFound(.*)", component: NotFound }
  ]
});

export default router;
