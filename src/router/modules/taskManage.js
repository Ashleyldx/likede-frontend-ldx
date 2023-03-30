// 该模块路由规则
import Layout from '@/layout'
export default {
  path: '/taskManage', 
  name: 'taskManage', 
  component: Layout, 
  children: [{
    path: '',
    component: () => import('@/views/taskManage'),
    meta: {
      title: '员工管理' 
    }
  }]
}
