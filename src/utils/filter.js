/*
 * @Author: your name
 * @Date: 2021-12-06 12:40:19
 * @LastEditTime: 2022-07-06 14:24:13
 * @LastEditors: yuanhao
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vueTemplate\src\utils\filter.js
 */
import Vue from 'vue'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

Vue.filter('NumberFormat', function (value) {
    if (!value) {
        return '0'
    }
    const intPartFormat = value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
    return intPartFormat
})
Vue.filter('FloatFormat', function (value) {
    if (!value) {
        return '0'
    }
    const intPartFormat = value.toFixed(2)
    return intPartFormat
})
Vue.filter('date', function (value) {
    if (!value) {
        return '无数据'
    }
    const intPartFormat = value.substring(0, 10)
    return intPartFormat
})
Vue.filter('emptyData', function (value) {
    if (value) {
        return value
    } else {
        return '无数据'
    }
})
Vue.filter('dateTime', function (value) {
    if (!value) {
        return '无数据'
    }
    const intPartFormat = value.replace('T', ' ')
    return intPartFormat
})
Vue.filter('moment', function (dataStr, formatStr) {
    return moment(dataStr).format(formatStr)
})

Vue.filter('toLocaleString', function (value) {
    if (!value) {
        return '0'
    }
    return value.toLocaleString()
})
