import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("@/components/HelloWorld.vue"),
    },
    {
      path: "/about",
      component: () => import("@/components/About.vue"),
    },
    {
      path: "/bigcake",
      component: () => import("@/components/BigCake.vue"),
    },
    {
      path: "/line",
      component: () => import("@/components/Line.vue"),
    },
    {
      path: "/scatter",
      component: () => import("@/components/Scatter.vue"),
    },
    {
      path: "/candlistick",
      component: () => import("@/components/Candlistick.vue"),
    },
    {
      path: "/leida",
      component: () => import("@/components/Leida.vue"),
    },
  ],
});
