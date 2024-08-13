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
    children:[
      {
          path:'/index/Main1',
          component:()=>import('../components/Main1.vue')
      },
      {
          path:'/index/Main2',
          component:()=>import('../components/Main2.vue')
      },
      {
          path:'/index/Main3',
          component:()=>import('../components/Main3.vue')
      }, 
    ]
  },
  {
    redirect:'/login',
    path:'/login'
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
