// 该模块路由规则
import Layout from '@/layout'
export default {
  path: '/pointManage', // 路径
  name: 'pointManage', 
  component: Layout, 
  children: [
    {
      path: 'point', 
      name: 'point', 
      component: () => import('@/views/pointManage/point'),
      meta: {
        title: '点位管理' 
      }
    },
    {
      path: 'region', 
      name: 'region', 
      component: () => import('@/views/pointManage/region'),
      meta: {
        title: '区域管理' 
      }
    },
    {
      path: 'cooperator', 
      name: 'cooperator', 
      component: () => import('@/views/pointManage/cooperator'),
      meta: {
        title: '合作商管理' 
      }
    }
  ]
}
