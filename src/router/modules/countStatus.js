// 该模块路由规则
import Layout from '@/layout'
export default {
  path: '/countStatus', 
  name: 'countStatus', 
  component: Layout,
  children: [{
    path: '', 
    component: () => import('@/views/countStatus'),
    meta: {
      title: '对账模式' 
    }
  }]
}
