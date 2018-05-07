import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/Index'
import Lifecycle from '@/views/Lifecycle/Lifecycle'
import LifecycleSingle from '@/views/Lifecycle/LifecycleSingle'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/lifecycle',
    component: Lifecycle,
    redirect: '/lifecycle/single',
    name: 'lifecycle',
    children: [
      {
        path: '/lifecycle/single',
        name: 'single lifecycle',
        component: LifecycleSingle
      }
    ]
  }
]

export default new Router({
  routes: constantRouterMap
})
