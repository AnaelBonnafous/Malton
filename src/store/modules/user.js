import axios from 'axios'

export default {
  namespaced: true,
  state: () => ({
    user: null,
    authenticated: false,
    message: null,
    userIri: null,
  }),

  actions: {
    async login({ commit }, user) {
      console.log(user)
      try {
        const response = await axios.post('login', user)
        const userIri = response.data.substr(4);
        commit('SET_USER_IRI', userIri);
        const userConnected = await axios.get(response.data.substr(4));
        commit("SET_USER", userConnected);
        commit("SET_AUTHENTICATED", true);
      } catch (err) {
        console.log(err)
        if (err.response.status === 401) {
          commit('SET_MESSAGE', 'Erreur lors de la connexion : email ou mot de passe incorrect !');
        }

        throw err
      }
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

    SET_USER_IRI(state, userIri) {
      state.userIri = userIri;
    },

    SET_MESSAGE(state, message) {
      state.message = message;
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
