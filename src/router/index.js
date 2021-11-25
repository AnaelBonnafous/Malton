import { createWebHistory, createRouter } from "vue-router";
import Accueil from "@/views/Accueil.vue";
import Enigmes from "@/views/Enigmes.vue";
import EnigmesChoixDifficulte from "@/views/EnigmesChoixDifficulte.vue";

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
  {
    path: '/difficultes',
    name: 'difficultes',
    component: EnigmesChoixDifficulte
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
