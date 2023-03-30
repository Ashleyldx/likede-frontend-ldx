// 该模块路由规则
import Layout from '@/layout'
export default {
  path: '/categoryManage', 
  name: 'categoryManage', // 给路由规则加一个name
  component: Layout, 
  children: [{
    path: '', 
    component: () => import('@/views/categoryManage'),
    meta: {
      title: '策略管理' 
    }
  }]
}
