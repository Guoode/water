import { createRouter, createWebHistory } from "vue-router";

import Header from "../components/Header.vue";
import Login from "../components/Login.vue";
import index from "../components/index.vue"

const routes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/index",
    component: index
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
