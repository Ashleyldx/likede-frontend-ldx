// 该模块路由规则
import Layout from '@/layout'
export default {
  path: '/goodsManage', 
  meta: { title: '商品管理' },
  component: Layout, 
  children: [
    {
      path: 'goodsType', 
      name: 'goodsType', 
      component: () => import('@/views/goodsManage/goodsType'),
      meta: { title: '商品类型' },
    },
    {
      path: 'goodsManagement', 
      name: 'goodsManagement', 
      component: () => import('@/views/goodsManage/goodsManagement'),
      meta: { title: '商品管理' },
    },
  ]
}
