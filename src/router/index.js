import { createWebHistory, createRouter } from "vue-router";
import HomeVue from "../components/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
