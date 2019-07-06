import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import vWow from 'v-wow'
import router from './router'

Vue.use(Vuetify)
Vue.use(vWow)

Vue.config.productionTip = false

import 'vuetify/dist/vuetify.min.css'
require('@/assets/css/style.css')

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
