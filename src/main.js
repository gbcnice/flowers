import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/flexble.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/index.css'
import { Indicator } from 'mint-ui';
import VueTouch from "vue-touch"
Vue.use(VueTouch,{name:'v-touch'})
import '../public/iconfont/iconfont.css'
Vue.config.productionTip = false
Vue.use(MintUI)
axios.interceptors.request.use((config)=>{
  Indicator.open();
  return config;
})
axios.interceptors.response.use((res)=>{
  Indicator.close();
  return res;
})
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
