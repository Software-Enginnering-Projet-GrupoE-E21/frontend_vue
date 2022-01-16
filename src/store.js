import Vue from 'vue'
import Vuex from 'vuex'
import registerStore from './store/register.store.js';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
       registerStore 
    },
    state: {
        ...registerStore.state
    },
    actions: {
        ...registerStore.actions
    },
    mutations: {
        ...registerStore.mutations
    },
    getters: {
        ...registerStore.getters
    }
})