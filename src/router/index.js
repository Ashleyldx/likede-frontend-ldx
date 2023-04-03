import Vue from 'vue'
import Router from 'vue-router'
import asyncRouter from './modules'
Vue.use(Router)
import layout from '@/layout'

// 导出路由
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/exhibition',
    component: () => import('@/views/exhibition'),
    hidden: true
  },
  {
    path: '/',
    component: layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '帝可得', icon: 'dashboard' }
      },
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }), //管理滚动行为
  routes: [...constantRoutes, ...asyncRouter] // 临时合并所有路由
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter() 
  router.matcher = newRouter.matcher // reset router
}

export default router
