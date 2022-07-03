// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: () =>
      import(/* webpackChunkName: "HelloWorld" */ "../views/HelloWorld.vue"),
  },
  {
    path: "/brewery/:id",
    name: "BreweryDetail",
    component: () =>
      import(
        /* webpackChunkName: "BreweryDetail" */ "../views/BreweryDetail.vue"
      ),
  },
  {
    path: "/breweries",
    name: "AllBreweries",
    component: () =>
      import(
        /* webpackChunkName: "BreweryDetail" */ "../views/AllBreweries.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
