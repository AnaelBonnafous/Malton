import { createWebHistory, createRouter } from "vue-router";
import Accueil from "@/views/Accueil.vue";
import Enigmes from "@/views/Enigmes.vue";
<<<<<<< HEAD
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
=======
import EnigmesChoixDifficulte from "@/views/EnigmesChoixDifficulte.vue";
>>>>>>> master

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
<<<<<<< HEAD
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
=======
    path: '/enigmes-difficultes',
    name: 'enigmes-difficultes',
    component: EnigmesChoixDifficulte
  }
>>>>>>> master
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
