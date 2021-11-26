export default {
  namespaced: true,
  state: () => ({
    user: null,
    authenticated: false,
  }),

  actions: {
    login({ commit }, user) {
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
