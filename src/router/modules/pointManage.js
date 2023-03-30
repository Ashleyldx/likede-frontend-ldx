// 该模块路由规则
import Layout from '@/layout'
export default {
  path: '/pointManage', // 路径
  name: 'pointManage', 
  component: Layout, 
  children: [{
    path: '', 
    component: () => import('@/views/pointManage'),
    meta: {
      title: '员工管理' 
    }
  }]
}
