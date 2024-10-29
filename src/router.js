import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Rick from "./pages/Rick.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/rick",
      name: "Rick",
      component: Rick,
    },
  ],
});
export { router };
