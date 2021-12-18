import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

// Quasar
import { Quasar, Notify } from "quasar";
import "@quasar/extras/fontawesome-v5/fontawesome-v5.css";
import "quasar/src/css/index.sass";
app.use(Quasar, {
  plugins: {
    Notify,
  },
});

// Axios
import axios from "axios";
axios.defaults.baseURL =
  import.meta.env.VITE_API_URL || "https://localhost:8000/api/";
app.config.globalProperties.$axios = axios;

// VueRouter
import router from "@/router";
import middleware from "@grafikri/vue-middleware"
router.beforeEach(middleware())
app.use(router);

// Vuex
import store from "@/store";
app.use(store);

// Fichiers CSS supplémentaires
import "@/assets/styles/global.css";

// Global methods
app.config.globalProperties.$decodeHtml = function (str) {
  if (!str) {
    return '';
  }
  return str.replace(/(\\r|\\n)/g, '<br>');
}

app.mount("#app");
