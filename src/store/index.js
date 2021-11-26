import { createStore } from "vuex";
import user from "@/store/modules/user";
import enigme from "@/store/modules/enigme";

export default createStore({
  modules: {
    user,
    enigme,
  },
});
