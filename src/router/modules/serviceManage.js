// 该模块路由规则
import Layout from '@/layout'
export default {
  path: '/serviceManage', 
  component: Layout, 
  meta: { title: '设备管理' },
  children: [
    {
      path: 'service', 
      name:'service',
      component: () => import('@/views/serviceManage/service'),
      meta: { title: '设备管理' },
    },
    {
      path: 'serviceStatus', 
      name:'serviceStatus',
      component: () => import('@/views/serviceManage/serviceStatus'),
      meta: { title: '设备状态' },
    },
    {
      path: 'serviceType', 
      name:'serviceType',
      component: () => import('@/views/serviceManage/serviceType'),
      meta: { title: '设备类型管理' },
    },
  ]
}
