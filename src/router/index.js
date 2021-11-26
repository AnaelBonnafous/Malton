import { createWebHistory, createRouter } from "vue-router";
import Accueil from "@/views/Accueil.vue";
import ListeEnigmesParDifficulte from "@/views/ListeEnigmesParDifficulte.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import EnigmesChoixDifficulte from "@/views/EnigmesChoixDifficulte.vue";
import ProposerEnigme from "@/views/ProposerEnigme.vue";
import MonProfil from "@/views/MonProfil.vue";
import EnigmeSolutionUnique from "@/views/EnigmeSolutionUnique.vue";
import ListeEnigmesFavorite from "@/views/ListeEnigmesFavorite.vue";

const routes = [
  {
    path: "/",
    name: "accueil",
    component: Accueil,
  },
  {
    path: "/enigmes",
    name: "enigmes",
    component: ListeEnigmesParDifficulte,
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
    path: '/proposer',
    name: 'proposer',
    component: ProposerEnigme
  },
  {
    path: '/profil',
    name: 'profil',
    component: MonProfil
  },
  {
    path: '/enigme',
    name: 'enigme-solution-unique',
    component: EnigmeSolutionUnique,
  },
  {
    path: '/favorites',
    name: 'my_puzzles',
    component: ListeEnigmesFavorite,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
