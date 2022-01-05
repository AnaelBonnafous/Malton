import axios from "axios";

export default {
  namespaced: true,
  state: () => ({
    difficulties: [],
  }),

  actions: {
    getDifficulties({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("difficultes")
          .then((response) => {
            const difficulties = response.data['hydra:member'];
            commit("SET_DIFFICULTIES", difficulties);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
  },

  mutations: {
    SET_DIFFICULTIES(state, difficulties) {
      state.difficulties = difficulties;
    },
  },

  getters: {
    difficulties(state) {
      return state.difficulties;
    },
  },
};
