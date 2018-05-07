import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/Index'
import Lifecycle from '@/views/Lifecycle/Lifecycle'
import LifecycleSingle from '@/views/Lifecycle/LifecycleSingle'
import LifecycleNest from '@/views/Lifecycle/LifecycleNest'
import LifecycleSibling from '@/views/Lifecycle/LifecycleSibling'
import LifecycleMixin from '@/views/Lifecycle/LifecycleMixin'

import Comp from '@/views/Comp/Comp'
import CompMix from '@/views/Comp/CompMix/CompMix'

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
    descr: '生命周期（lifecycle）',
    children: [
      {
        path: '/lifecycle/single',
        name: 'single lifecycle',
        descr: '单组件生命周期（single lifecycle）',
        component: LifecycleSingle
      },
      {
        path: '/lifecycle/nest',
        name: 'nest lifecycle',
        descr: '父子组件生命周期（nest lifecycle）',
        component: LifecycleNest
      },
      {
        path: '/lifecycle/sibling',
        name: 'sibling lifecycle',
        descr: '兄弟组件生命周期（sibling lifecycle）',
        component: LifecycleSibling
      },
      {
        path: '/lifecycle/mixin',
        name: 'mixin lifecycle',
        descr: '宏mixin生命周期（mixin lifecycle）',
        component: LifecycleMixin
      }
    ]
  },
  {
    path: '/comp',
    component: Comp,
    redirect: '/comp/mix',
    name: 'comp',
    descr: '组件及数据传递',
    children: [
      {
        path: '/comp/mix',
        component: CompMix,
        name: 'compMix',
        descr: '组件的基本组合'
      }
    ]
  }
]

export default new Router({
  routes: constantRouterMap
})
