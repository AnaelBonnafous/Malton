export default {
  namespaced: true,
  state: () => ({
    user: {},
    authenticated: false,
  }),

  actions: {
    login({ commit, state }, user) {
      commit("SET_USER", user);
      commit("SET_AUTHENTICATED", true);
    },
  },

  mutations: {
    SET_USER(user) {
      state.user = user;
    },

    SET_AUTHENTICATED(authenticated) {
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
