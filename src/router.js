import { createRouter, createWebHistory } from "vue-router";

import RecipeList from "./pages/recipes/RecipeList.vue";
import NotFound from "./pages/NotFound.vue";

const RecipeDetails = () => import("./pages/recipes/RecipeDetails.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: RecipeList },
    { path: "/recipes/:id", component: RecipeDetails, props: true },
    { path: "/:notFound(.*)", component: NotFound }
  ]
});

export default router;
