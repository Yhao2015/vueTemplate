/*
 * @Author: your name
 * @Date: 2021-12-06 12:40:19
 * @LastEditTime: 2022-05-05 09:19:10
 * @LastEditors: yuanhao
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vueTemplate\src\api\index.js
 */
const basePath = 'api'
const path = 'resources'
const api = {
    login: {
        // 登录
        login: basePath + '/sys/login',
        // 退出
        logout: basePath + '/sys/logout',
    },
}
export default api
