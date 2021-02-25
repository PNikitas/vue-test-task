import Vue from 'vue'
import App from './App.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import VueLazyload from 'vue-lazyload'

import store from '@/store';

import router from '@/plugins/router';
import vuetify from '@/plugins/vuetify';
import i18n from '@/plugins/i18n';

Vue.use(VueMaterial);
Vue.use(VueLazyload);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')
