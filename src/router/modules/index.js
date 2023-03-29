
// 从modules获取所有除index.js外的所有js文件路径
const requireModules = require.context('@/router/modules', false, /^(?!\.\/index).*\.js$/)
// 通过路径导出module数组
export default requireModules.keys().map((path) => requireModules(path).default || requireModules(path))
