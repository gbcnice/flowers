import Vue from 'vue'
import Vuex from 'vuex'
import cart from './components/cart'
import products from './components/product'
Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		cart,products
	}
  	
})
