import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "../components/Login/Login.vue";
import Signup from "../components/Signup/Signup.vue";
import Home from "../components/Home/Home.vue";
import Projects from "../components/Projects/Projects.vue";
import Activities from "../components/Activities/Activities.vue";
import Reports from "../components/Reports/Reports.vue";

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
        path: "/activities",
        name: "activities",
        component: Activities
      },
        {
        path: "/reports",
        name: "reports",
        component: Reports
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
