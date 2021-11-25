import { createWebHistory, createRouter } from "vue-router";
import Accueil from "@/views/Accueil.vue";
import Enigmes from "@/views/ListeEnigmesParDifficulte.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import EnigmesChoixDifficulte from "@/views/EnigmesChoixDifficulte.vue";
import EnigmeSolutionUnique from "@/views/EnigmeSolutionUnique.vue";

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
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: '/difficultes',
    name: 'difficultes',
    component: EnigmesChoixDifficulte
  },
  {
    path: '/enigme',
    name: 'enigme-solution-unique',
    component: EnigmeSolutionUnique,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
