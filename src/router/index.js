import { createWebHistory, createRouter } from "vue-router";
import Accueil from "@/views/Accueil.vue";
import Enigmes from "@/views/Enigmes.vue";

const routes = [
  {
    path: "/",
    name: "accueil",
    component: Accueil,
  },
  {
    path: "/enigmes",
    name: "enigmes",
    component: Enigmes,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
