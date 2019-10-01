import Vue from 'vue'
import App from './App.vue'
import store from '@/store/store'
import router from '@/router/router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.use(Element)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
