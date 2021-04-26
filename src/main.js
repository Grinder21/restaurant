import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router'
import VueBus from 'vue-bus'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
export const eventBus = new Vue()

Vue.use(VueBus)
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')
