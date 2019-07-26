import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import indexDetail from './views/indexDetail.vue'
import designflower from './views/designflower.vue'
import cartitem2 from './views/cartitem2.vue'
import Secdetail from './views/secdetail.vue'
import Detail from "./components/detail.vue"
import Search from "./components/search.vue"
import CityFlower from "./views/cityflower.vue"
import FlowerGift from "./views/flowergift.vue"
const Car = () => import('./views/car.vue')
const Fenlei = () => import('./views/fenlei.vue')
const Index = () => import('./views/index.vue')
const My = () => import('./views/my.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:{name:'home'}
    },
    {
      path: '/indexDetail',
      name: 'indexDetail',
      component: indexDetail
    },
    {
      path: '/search/:text',
      name: 'search',
      component: Search
    },
    {
      path:'/designflower',
      name:'designflower',
      component:designflower
    },
    {
      path:'/flowergift',
      name:'flowergift',
      component:FlowerGift
    },
    {
      path:'/cityflower',
      name:'CityFlower',
      component:CityFlower
    },
    {
      path: '/secdetail/:id',
      name: 'secdetail',
      component: Secdetail
    },
    {
      path: '/detail/:id/:num',
      name: 'detail',
      component:Detail
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect:{name:'index'},
      children:[
        {
          path: '/home/index',
          name: 'index',
          component: Index
        },
        {
          path: '/home/fenlei/:type?',
          name: 'fenlei',
          component: Fenlei
        },
        {
          path: '/home/car',
          name: 'car',
          component: Car,
        },
        {
          path: '/home/my',
          name: 'my',
          component: My
        }
      ]
    }
  ]
})
