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
  {
    //实现路由重定向，当进入网页时，路由自动跳转到/student路由
    redirect:'/login',
    path:'/'
}

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
