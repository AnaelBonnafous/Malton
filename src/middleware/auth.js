import store from "../store/index";
import { Notify } from "quasar";

export default ({ to, from, next }) => {
  if (!store.getters["userStore/authenticated"]) {
    Notify.create({
      message:
        "Veuillez vous connecter ou créer un compte pour accéder à cette page.",
      color: "red",
    });

    next("/login");
    return false;
  }

  next();
};
