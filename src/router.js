import Vue from "vue";
import Router from "vue-router";
import IACR from "./views/IACR.vue";
import Settings from "./views/Settings.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "iacr",
      component: IACR
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings
    },
    {
      path: "*",
      beforeEnter: (to, from, next) => {
        next("/");
      }
    }
  ]
});
