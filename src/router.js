import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/index.vue'
import Fenlei from './views/fenlei.vue'
import Car from './views/car.vue'
import My from './views/my.vue'
import indexDetail from './views/indexDetail.vue'
import designflower from './views/designflower.vue'
import Secdetail from './views/secdetail.vue'
 
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
      path:'/designflower',
      name:'designflower',
      component:designflower
    },
    {
      path: '/secdetail/:id',
      name: 'secdetail',
      component: Secdetail
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
          component: Car
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
