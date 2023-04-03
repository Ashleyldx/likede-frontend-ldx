import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
// 引入全局注册组件 全局过滤器 全局指令
import VueConfiguration from '@/plugins'
// import '@/icons' // icon
import '@/permission' // permission control
// import '@/assets/iconfont/iconfont.css'
Vue.use(ElementUI)
Vue.use(VueConfiguration)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
