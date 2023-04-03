import moment from 'moment'
moment.locale('zh-cn', {
  week: {
    dow: 1
  }
})
/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

export function getRandom() {
  const value = Math.floor(Math.random() * 63)
  if (value >= 10) {
    let str
    if (value === 10) return 'a'
    else str = Math.floor((value + 9) / 2).toString(36)
    return Math.random() > 0.5 ? str.toUpperCase() : str
  }
  return value
}
export const get32_bitRandom = () => {
  const arr = []
  while (arr.length !== 32) {
    arr.push(getRandom())
  }
  return arr.join('')
}
// 全局确认框配置
export const confirmConfig = (title) => {
  return {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    center: true,
    title,
    iconClass: 'el-icon-warning',
    showClose: false
  }
}

export const getRequestTimeBySecond = () => ({ start: moment().format('YYYY-MM-01 00:00:00'), end: moment().format('YYYY-MM-DD 23:59:59') })
export const getRequestTime = () => [moment().format('YYYY-MM-01'), moment().format('YYYY-MM-DD')]
export const getWeek = () => {
  const afterWeek = moment(moment(moment().add(1, 'days')).add(-1, 'W')).format('YYYY-MM-DD')
  const today = moment().format('YYYY-MM-DD')
  return [afterWeek, today]
}
export const getWithin = (type) => {
  const today = moment().format('YYYY.MM.DD')
  if (type === 'week') {
    const afterWeek = moment(moment(moment().add(1, 'days')).add(-1, 'W')).format('YYYY.MM.DD')
    return afterWeek + ' ～ ' + today
  } else if (type === 'month') {
    const startMonth = moment().startOf('month').format('YYYY.MM.DD')
    return startMonth + ' ～ ' + today
  } else if (type === 'year') {
    const startYear = moment().startOf('year').format('YYYY.MM.DD')
    return startYear + ' ～ ' + today
  }
}

export const getWeekday = (date) => { // 参数时间戳
  const week = moment(date).day()
  switch (week) {
    case 1:
      return '星期一'
    case 2:
      return '星期二'
    case 3:
      return '星期三'
    case 4:
      return '星期四'
    case 5:
      return '星期五'
    case 6:
      return '星期六'
    case 0:
      return '星期天'
  }
}
export const getYear = () => {
  const end = moment().format('YYYY-MM-DD')
  const start = moment().startOf('year').format('YYYY-MM-DD')
  return [start, end]
}
export const getDate = (date) => {
  return moment(date).format('M月D日')
}
export const getYearFormat = (year) => {
  return moment(year).format('YYYY年M月')
}
export const getStartDay = () => {
  const start = moment().startOf('day').format('YYYY-MM-DD HH:mm:ss')
  const end = moment().endOf('day').format('YYYY-MM-DD HH:mm:ss')
  return [start, end]
}
export const getStartWeek = () => {
  const start = moment().startOf('week').format('YYYY-MM-DD')
  const end = moment().format('YYYY-MM-DD')
  return [start, end]
}
export const getStartMonth = () => {
  const start = moment().startOf('month').format('YYYY-MM-DD')
  const end = moment().format('YYYY-MM-DD')
  return [start, end]
}

export const formatTimeList = (timeList) => {
  return timeList.map(time => moment(time).format('YYYY-MM-DD'))
}
export const formatTimeBySecond = (timeList) => {
  const timeArr = timeList.map(time => moment(time).format('YYYY-MM-DD HH:mm:ss'))
  return { start: timeArr[0], end: timeArr[1] }
}
export const formatTimeByDay = (timeList) => {
  const timeArr = timeList.map(time => moment(time).format('YYYY-MM-DD'))
  return { start: timeArr[0], end: timeArr[1] }
}
export const getStartDayBySecond = () => {
  const start = moment().startOf('day').format('YYYY-MM-DD HH:mm:ss')
  const end = moment().endOf('day').format('YYYY-MM-DD HH:mm:ss')
  return { start, end }
}
export const getStartWeekBySecond = () => {
  const start = moment().startOf('week').format('YYYY-MM-DD HH:mm:ss')
  const end = moment().endOf('day').format('YYYY-MM-DD HH:mm:ss')
  return { start, end }
}
export const getStartMonthBySecond = () => {
  const start = moment().startOf('month').format('YYYY-MM-DD HH:mm:ss')
  const end = moment().endOf('day').format('YYYY-MM-DD HH:mm:ss')
  return { start, end }
}
export const getStartYearBySecond = () => {
  const start = moment().startOf('year').format('YYYY-MM-DD HH:mm:ss')
  const end = moment().endOf('day').format('YYYY-MM-DD HH:mm:ss')
  return { start, end }
}
