import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "../views/login/Login.vue";
import Signup from "../views/Signup.vue";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: {
      name: "login"
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    redirect: {
      name: "dashboard"
    },
    children:[
      {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "/projects",
        name: "projects",
        component: Projects
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
