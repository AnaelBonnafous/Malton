import { createWebHistory, createRouter } from "vue-router";
import Accueil from "@/views/Accueil.vue";
import Enigmes from "@/views/Enigmes.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
