import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import fastClick from 'fastclick'

Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
