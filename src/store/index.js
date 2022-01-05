import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import userStore from "@/store/modules/user";
import enigmeStore from "@/store/modules/enigme";
import categoryStore from "@/store/modules/category";
import difficultyStore from "@/store/modules/difficulty";

export default createStore({
  modules: {
    userStore,
    enigmeStore,
    categoryStore,
    difficultyStore,
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => JSON.parse(localStorage.getItem(key)),
        setItem: (key, value) => JSON.stringify(localStorage.setItem(key, value)),
        removeItem: (key) => localStorage.removeItem(key),
      },
    }),
  ],
});
