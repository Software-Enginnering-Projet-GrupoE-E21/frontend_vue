import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import Pt from 'vuetify/es5/locale/pt'

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { Pt },
    current: 'pt'
  },
  theme: {
    themes: {
      light: {
        primary: '#feda00',
        secondary: '#4a1e75',
        accent: '#CFD403',
        error: '#8f2c11'
      }
    }
  },
  icons: {
    iconfont: 'fa',
  },
});
