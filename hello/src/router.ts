import Vue from "vue";
import Router from "vue-router";
import Project from "./views/project/Project.vue";
import Home from "./views/home/Home.vue";
import Recipe from "./views/recipe/Recipe.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/project",
      name: "project",
      component: Project,
      children: [
        {
          path: "dataset",
          name: "dataset",
          component: () => import("./views/dataset/Dataset.vue")
        },
        {
          path: "recipe",
          name: "recipe",
          component: Recipe
        }
      ]
    }
  ],
});
