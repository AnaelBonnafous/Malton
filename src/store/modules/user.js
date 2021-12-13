export default {
  namespaced: true,
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")),
    authenticated: JSON.parse(localStorage.getItem("authenticated")),
  }),

  actions: {
    login({ commit }, user) {
      delete user.password;
      commit("SET_USER", user);
      commit("SET_AUTHENTICATED", true);
    },

    logout({ commit }) {
      commit("SET_USER", null);
      commit("SET_AUTHENTICATED", false);
    },
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(state.user));
    },

    SET_AUTHENTICATED(state, authenticated) {
      state.authenticated = authenticated;
      localStorage.setItem("authenticated", JSON.stringify(state.authenticated));
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
