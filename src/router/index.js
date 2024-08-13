import { createRouter, createWebHistory } from "vue-router";

import Header from "../components/Header.vue";
import Login from "../components/Login.vue";
import index from "../components/index.vue"

const routes = [
  {
    path: "/login",
    component:()=>import('../components/Login.vue'),
  },
  {
    path: "/index",
    component:()=>import('../components/index.vue'),
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
