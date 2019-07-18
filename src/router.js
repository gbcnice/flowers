import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/index.vue'
import Fenlei from './views/fenlei.vue'
import Car from './views/car.vue'
import My from './views/my.vue'
import IndexDetail from './views/indexDetail.vue'
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
      component: IndexDetail,
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
          //    children:[
          //       {
          //         path: '/home/index/indexDetail',
          //         name: 'indexDetail',
          //         component: IndexDetail,
          //       }
          // ]
        },
        {
          path: '/home/fenlei',
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
