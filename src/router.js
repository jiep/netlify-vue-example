import Vue from "vue";
import Router from "vue-router";
import IACR from "./views/IACR.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "iacr",
      component: IACR
    }
  ]
});
