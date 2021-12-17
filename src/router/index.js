import { createWebHistory, createRouter } from "vue-router";
import Accueil from "@/views/Accueil.vue";
import ListeEnigmesParDifficulte from "@/views/ListeEnigmesParDifficulte.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import EnigmesChoixDifficulte from "@/views/EnigmesChoixDifficulte.vue";
import ProposerEnigme from "@/views/ProposerEnigme.vue";
import MonProfil from "@/views/MonProfil.vue";
import EnigmeSolutionUnique from "@/views/Enigme.vue";
import ListeEnigmesFavorite from "@/views/ListeEnigmesFavorite.vue";

import auth from "@/middleware/auth.js";

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
    meta: {
      middleware: [auth],
    },
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
    path: "/difficultes",
    name: "difficultes",
    component: EnigmesChoixDifficulte,
    meta: {
      middleware: [auth],
    },
  },
  {
    path: "/proposer",
    name: "proposer",
    component: ProposerEnigme,
    meta: {
      middleware: [auth],
    },
  },
  {
    path: "/profil",
    name: "profil",
    component: MonProfil,
    meta: {
      middleware: [auth],
    },
  },
  {
    path: "/enigme",
    name: "enigme-solution-unique",
    component: EnigmeSolutionUnique,
    meta: {
      middleware: [auth],
    },
  },
  {
    path: "/favorites",
    name: "my_puzzles",
    component: ListeEnigmesFavorite,
    meta: {
      middleware: [auth],
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
