import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './routers/router'
import VueTheMask from 'vue-the-mask'
import VideoPlayer from 'vue-videojs7'

Vue.use(VueTheMask)
Vue.use(VideoPlayer)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
