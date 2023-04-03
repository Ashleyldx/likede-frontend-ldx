// import * as filters from '@/filters'
// import * as directives from '@/directives'
// import index from '@/mixin'
// export default (Vue) => {
//   // 导入注册所有全局组件
//   const files = require.context('@/components', true, /\.vue$/)
//   files.keys().forEach(key => {
//     const name = /^\.\/(.*)\/index.\w+$/.exec(key)[1]
//     const file = files(key).default || files(key)
//     Vue.component(file.name || name, file)
//   })
//   //   导入注册所有全局过滤器
//   Object.keys(filters).forEach(key => { Vue.filter(key, filters[key]) })
//   //  导入注册所有自定义指令
//   Vue.mixin(index)
//   Object.keys(directives).forEach(directive => Vue.directive(directive, directives[directive]))
// }