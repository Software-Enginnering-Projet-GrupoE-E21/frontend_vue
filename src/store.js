import Vue from 'vue'
import Vuex from 'vuex'
import authStore from './store/auth.store.js';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
       authStore,
    },
    state: {
        ...authStore.state
    },
    actions: {
        ...authStore.actions
    },
    mutations: {
        ...authStore.mutations
    },
    getters: {
        ...authStore.getters
    }
})