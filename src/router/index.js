import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/components/indexPage'
import detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: indexPage
    },{
      path:"/detail",
      name:"detail",
      component:detail
    }
  ]
})
