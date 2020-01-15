import Vue from 'vue'
import App from './App.vue'
import Routes from './routes'
import VuePageTransition from 'vue-page-transition'

Vue.use(VuePageTransition)
new Vue({
  render: h => h(App),
  router: Routes,
}).$mount('#app')
