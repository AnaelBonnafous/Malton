import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

import router from "@/router";
app.use(router);

import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
app.use(Quasar, {
  plugins: {},
});

app.mount("#app");
