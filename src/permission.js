import router from './router'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'
NProgress.configure({
    showSpinner: false
}) // NProgress Configuration

const whiteList = ['login'] // 白名单
const defaultRoutePath = '/index'
router.beforeEach((to, from, next) => {
    NProgress.start() // start progress bar
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    //判断缓存是否有user_token
    if (to.meta.isLogin == false) {
        //如果根据菜单配置的数据没有权限
        next({ path: defaultRoutePath, query: { redirect: to.fullPath } })
    } else {
        next()
    }
})

router.afterEach(() => {
    NProgress.done() // finish progress bar
})
