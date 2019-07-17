import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/flexble.js'
import './assets/index.css'
import '../public/iconfont/iconfont.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
