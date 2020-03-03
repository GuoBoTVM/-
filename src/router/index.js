import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/components/indexPage'
import club from '@/components/club'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: indexPage
    },{
      path:"/club",
      name:"club",
      component:club
    }
  ]
})
