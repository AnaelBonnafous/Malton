import axios from "axios";

export default {
  namespaced: true,
  state: () => ({
    user: null,
    authenticated: false,
  }),

  actions: {
    login({ commit }, form) {
      return new Promise((resolve, reject) => {
        axios
          .post("login", form)
          .then((response) => {
            const userIri = response.data.replace("/api/", "");

            axios
              .get(userIri)
              .then((response) => {
                const user = response.data;
                commit("SET_USER", user);
                commit("SET_AUTHENTICATED", true);

                resolve(response);
              })
              .catch((error) => {
                reject(error);
              });
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },

    register({ dispatch }, form) {
      return new Promise((resolve, reject) => {
        axios
          .post("users", form)
          .then((response) => {
            resolve(dispatch("login", form));
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },

    logout({ commit }) {
      commit("SET_USER", null);
      commit("SET_AUTHENTICATED", false);
    },
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },

    SET_AUTHENTICATED(state, authenticated) {
      state.authenticated = authenticated;
    },
  },

  getters: {
    user(state) {
      return state.user;
    },

    authenticated(state) {
      return state.authenticated;
    },
  },
};
