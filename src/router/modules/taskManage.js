// 该模块路由规则
import Layout from '@/layout'
export default {
  path: '/taskManage', 
  component: Layout, 
  meta: { title: '工单管理' },
  children: [
    {
      path: 'operation', 
      name:'operation',
      component: () => import('@/views/taskManage/operation'),
      meta: { title: '运营工单' },
    },
    {
      path: 'operator', 
      name:'operator',
      component: () => import('@/views/taskManage/operator'),
      meta: { title: '运维工单' },
    },
  ]
}