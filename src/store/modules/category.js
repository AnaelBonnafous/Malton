export default {
  namespaced: true,
  state: () => ({
    categories: [],
  }),
  actions: {
    saveCategories({ commit }, categories) {
      commit('SET_CATEGORIES', categories)
    }
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories
    }
  },
  getters: {
    categories(state) {
      return state.categories
    }
  },
};
