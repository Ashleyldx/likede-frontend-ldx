// 该模块路由规则
import Layout from '@/layout'
export default {
  path: '/goodsManage', // 路径
  name: 'goodsManage', 
  meta: { title: '商品管理' },
  component: Layout, 
  children: [{
    path: '', 
    name: 'goodsType', 
    component: () => import('@/views/goodsManage'),
    
  }]
}
