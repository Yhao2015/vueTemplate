/*
 * @Author: your name
 * @Date: 2021-12-06 12:40:19
 * @LastEditTime: 2022-07-06 14:22:54
 * @LastEditors: yuanhao
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vueTemplate\src\utils\axios.js
 */
import axios from 'axios'
import Router from '../router'
import message from 'ant-design-vue/es/message'
// 添加请求拦截器
axios.interceptors.request.use(
    (req) => {
        //统一设置传header
        let token = localStorage.getItem('token')
        if (!!token) {
            req.headers.token = token
        }
        return req
    },
    (error) => {
        return Promise.reject(error)
    }
)

axios.defaults.timeout = 36000000 //设置超时时间
axios.interceptors.response.use(
    (response) => {
        if (!response.data.success) {
            if (response.data.code === '401') {
                message.error(response.data.msg)
                Router.push({
                    name: 'login'
                })
            } else if (response.data.code && response.data.code != '200') {
                message.error(response.data.msg)
            }
        }
        return response
    },
    (error) => {
        if (error.response.status == '502') {
            message.error('后台服务重启中，请稍后')
            Router.push({
                name: 'login'
            })
        } else {
            message.error(error.response.data.msg)
        }
        return Promise.resolve(error.response)
    }
)
export default axios
