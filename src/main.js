import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

import router from "@/router";
import '@/assets/styles/global.css';

app.use(router);

import { Quasar } from "quasar";
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import "quasar/src/css/index.sass";
app.use(Quasar, {
  plugins: {},
});

app.mount("#app");
