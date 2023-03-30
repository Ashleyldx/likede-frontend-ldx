// 该模块路由规则
import Layout from '@/layout'
export default {
  path: '/exhibition', // 路径
  name: 'exhibition', 
  component: Layout, 
  children: [{
    path: '', 
    component: () => import('@/views/exhibition'),
    meta: {
      title: '员工管理' 
    }
  }]
}
