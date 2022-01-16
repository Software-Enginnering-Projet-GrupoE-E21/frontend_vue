import { registerService } from "../services/register.service";

export default {
  state: {
    states: [],
    cities: []
  },
  mutations: {
    SET_REGISTER_FORM_STATES(state, { states }) {
      state.states = states;
    },
    SET_REGISTER_FORM_CITIES(state, { cities }) {
      state.cities = cities;
    },
  },
  actions: {
    async getRegisterFormStates({ commit }) {
      const states = await registerService.getStates();
      commit("SET_REGISTER_FORM_STATES", { states });
      return states;
    },
    async getRegisterFormCities({ commit }, state) {
      const cities = await registerService.getCities(state);
      commit("SET_REGISTER_FORM_CITIES", { cities });
      return cities;
    },
    // async login({ commit }, { email, password }) {
    // 	const data = await authService.login(email, password);
    // 	const token = data.token;
    // 	if (window.localStorage) window.localStorage.setItem('userToken', token);
    // 	commit('SET_USER_TOKEN', { token });
    // 	const user = await authService.validate();
    // 	commit('SET_USER', { user });
    // 	return user;
    // },
    // async logout({ commit }) {
    // 	if (window.localStorage) window.localStorage.removeItem('userToken');
    // 	commit('SET_USER_TOKEN', '');
    // 	commit('SET_USER', {});
    // 	return true;
    // },
    // async sendConfirmationEmail({}) {
    // 	await authService.sendConfirmationEmail();
    // 	return;
    // },
    // async confirmEmailToken({ commit }, token) {
    // 	const user = await authService.confirmEmailToken(token);
    // 	commit('SET_USER', { user });
    // 	return;
    // },
    // async getUser({ commit }, { token }) {
    // 	if (window.localStorage) window.localStorage.setItem('userToken', token);
    // 	commit('SET_USER_TOKEN', { token });
    // 	try {
    // 		const user = await authService.validate();
    // 		commit('SET_USER', { user });
    // 		return user;
    // 	} catch (err) {
    // 		window.localStorage.removeItem('userToken');
    // 	}
    // },
    // async updateUser({ commit }, userData) {
    // 	const user = await authService.updateUser(userData);
    // 	commit('SET_USER', { user });
    // 	return user;
    // },
    // async deleteUserTrustedCertification({ commit }, { trustedCertificationId }) {
    // 	const deleted = await authService.deleteUserTrustedCertification(trustedCertificationId);
    // 	if (deleted) commit('DELETE_TRUSTED_CERTIFICATION', { trustedCertificationId });

    // 	return;
    // },
    // async deleteUser({ commit }, userData) {
    // 	const user = await authService.deleteUser(userData);
    // 	commit('SET_USER', { user });
    // 	return user;
    // },
    // async getCnpjInfo({}, cnpj) {
    // 	const cnpjNumber = cnpj.replace(/\D/g, '');
    // 	const cnpjInfo = (await api.get(`/profile/cnpj/${cnpjNumber}`)).data;

    // 	return cnpjInfo;
    // },
    // async getNotificationsCount({ commit, state }) {
    // 	try {
    // 		const { totalUserNotifications, totalNotViewedNotifications } = (
    // 			await api.get(`/notifications/mine/all`)
    // 		).data;

    // 		commit('SET_NOTIFICATIONS', {
    // 			...state.notifications,
    // 			total: totalUserNotifications,
    // 			notViewed: totalNotViewedNotifications
    // 		});
    // 	} catch (err) {
    // 		commit('SET_NOTIFICATIONS', { ...state.notifications, total: 0, notViewed: 0 });
    // 	}
    // },
    // async getNotifications({ commit, state }, page = 0) {
    // 	try {
    // 		const data = (await api.get(`/notifications/mine/${page}`)).data;
    // 		const { totalUserNotifications, totalNotViewedNotifications } = (
    // 			await api.get(`/notifications/mine/all`)
    // 		).data;

    // 		commit('SET_NOTIFICATIONS', {
    // 			total: totalUserNotifications,
    // 			notViewed: totalNotViewedNotifications,
    // 			data: page === 0 ? data : [...state.notifications.data, ...data]
    // 		});

    // 		// seta visualized = true apos 4 seg
    // 		setTimeout(() => {
    // 			commit('SET_NOTIFICATIONS', {
    // 				...state.notifications,
    // 				data: state.notifications.data.map(n => ({ ...n, visualized: true }))
    // 			});
    // 		}, 4000);
    // 	} catch (err) {
    // 		commit('SET_NOTIFICATIONS', { total: 0, notViewed: 0, data: [] });
    // 	}
    // },
    // async setNotificationRead({}, notification) {
    // 	await api.post(`/notifications/mine`, { notification: notification._id });
    // }
  },
};
