import Vue from 'vue'
import Vuex from 'vuex'
import authStore from './store/auth.store.js';
import coursesStore from './store/courses.store.js';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
       authStore,
       coursesStore
    },
    state: {
        ...authStore.state,
        ...coursesStore.state,
    },
    actions: {
        ...authStore.actions,
        ...coursesStore.actions
    },
    mutations: {
        ...authStore.mutations,
        ...coursesStore.mutations
    },
    getters: {
        ...authStore.getters,
        ...coursesStore.getters

    }
})