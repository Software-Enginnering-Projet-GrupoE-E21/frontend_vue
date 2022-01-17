import { authService } from "../services/auth.service";

export default {
  state: {
    userToken: "",
    user: {},
  },
  mutations: {
    SET_USER_TOKEN(state, { token }) {
      state.userToken = token;
    }
  },
  actions: {
    async register(_, user) {
      return await authService.register(user);
    },
    async login({ commit }, { username, password }) {
      const { token } = await authService.login(username, password);

			if (window.localStorage) window.localStorage.setItem('userToken', token);
			commit('SET_USER_TOKEN', { token });
    },
    async logout({ commit }) {
			if (window.localStorage) window.localStorage.removeItem('userToken');
			commit('SET_USER_TOKEN', '');

			return true;
		},

  },
};
