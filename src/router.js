import Vue from 'vue'
import Router from 'vue-router'
import api from '@/api/'
import { getUrlKey } from './common/utils/regexp'
import base from './api/base'

Vue.use(Router)

const router = new Router({
// export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        noAuth: false// 处理需要登录的页面
      },
      components: {
        default: () => import('./views/home/index.vue')
        // tabbar: () => import('./components/tabbar/index.vue')
      }
    },
    {
      path: '/task',
      name: 'task',
      meta: {
        keepAlive: true,
        noAuth: true// 处理不需要登录的页面
      },
      components: {
        default: () => import('./views/task/index.vue'),
        tabbar: () => import('./components/tabbar/index.vue')
      }
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        keepAlive: true,
        noAuth: true// 处理不需要登录的页面
      },
      components: {
        default: () => import('./views/about/index.vue'),
        tabbar: () => import('./components/tabbar/index.vue')
      }
    },
    {
      path: '/teach',
      name: 'teach',
      meta: {
        keepAlive: true,
        noAuth: true// 处理不需要登录的页面
      },
      components: {
        default: () => import('./views/teach/index.vue')
      }
    },
    {
      path: '/setting',
      name: 'settiing',
      meta: {
        keepAlive: true,
        noAuth: true// 处理不需要登录的页面
      },
      components: {
        default: () => import('./views/setting/index.vue')
      }
    },
    {
      path: '/rebate',
      name: 'rebate',
      meta: {
        keepAlive: true,
        noAuth: true// 处理不需要登录的页面
      },
      components: {
        default: () => import('./views/rebate/index.vue')
      }
    },
    {
      path: '/bingingPhone',
      name: 'bingingPhone',
      meta: {
        keepAlive: true,
        noAuth: true// 处理不需要登录的页面
      },
      components: {
        default: () => import('./views/bingingPhone/index.vue')
      }
    },
    {
      path: '/shareMoments',
      name: 'shareMoments',
      meta: {
        keepAlive: true,
        noAuth: false// 处理需要登录的页面
      },
      components: {
        default: () => import('./views/shareMoments/index.vue')
      }
    }
  ]

})
/**
 * beforeEach（to,from,next）
 * 1.先查看当前的 localStorage 是否已存在用户的信息，已存在就直接跳转好评返现页面
 * 2.若不存在就跳转到微信授权页面进行授权。手动输入 redirectUrl (就是重定向页面，就是好评返现页面),appid (公众号的 appid)
 * 3.通过 getUrl 截取 code，通过 localStorage 查看 token(可以获取的话就获取）
 * 4.code = 200 就直接跳转。
 * 5.code 若不为 200 就不允许跳转，再次进行微信授权页面
 * */

router.beforeEach(async (to, from, next) => {
  // 如果 meta.noAuth 是 true 就直接跳转，如果是 false ,就需要登录之后再跳转
  if (to.matched.some(recode => recode.meta.noAuth)) {
    next()
  } else {
    // localStorage 存储数据的token和merchant_openid存在，就直接获取信息，然后跳转到相对应的页面
    const token = localStorage.getItem('token')
    const merchantOpenid = localStorage.getItem('merchant_openid')
    console.log('token=' + token)
    console.log('merchantOpenid= ' + merchantOpenid)
    if (token !== null && merchantOpenid !== null) {
      console.log('获得token, 和merchantOpenid进入页面: token=' + token + ' merchantOpenid=' + merchantOpenid)
      next() // 进入 home 页面
      return
    }
    // localStorage 没有保存的信息就跳转到微信申请页面，redirectUrl 是返回当前页面，也就是好评返现的页面
    const activity = getUrlKey('activity')
    const appid = getUrlKey('appid')
    const redirectUrl = base.base + '/?appid=' + appid + '&activity=' + activity
    const encodedRedirectUrl = encodeURIComponent(redirectUrl)
    console.log('redirectUrl=' + redirectUrl)
    // 摇摇啦认证
    if (token === null) {
      // 摇摇啦返回链接中的用户参数
      const openid = getUrlKey('openid')
      const userinfoEencoded = getUrlKey('userinfo')
      if (openid === undefined || openid === null || openid === '') {
        console.log('yaoyaola auth redirect')
        next()
        // window.location.href = `http://www.yaoyaola.cn/index.php/exapi/checkuser?uid=30716&url=${encodedRedirectUrl}&flag=1`
      } else {
        let { data } = await api.apply.yaoAuth({ openid: openid, userinfo: userinfoEencoded, token: token, appid: appid }) // 获取用户信息,后端可首先通过cookie,session等判断,没有信息则通过code获取
        if (data.code === 200) {
          console.log(data)
          localStorage.setItem('token', data.data.token)
          if (data.data.merchant_openid === 'null' || data.data.merchant_openid === null || data.data.merchant_openid === '') {
            // 微信跳转，使用商户的appid获取用户的openid信息: merchant_openid
            console.log(data.data.merchant_openid)
            localStorage.removeItem('merchant_openid')
            next()
            // window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodedRedirectUrl}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`
            return
          }
          console.log(data.data)
          localStorage.setItem('merchant_openid', data.data.merchant_openid)
          localStorage.setItem('userInfo', data.data)
          next()
          return
        } else {
          console.log(data)
          next()
          // window.location.href = `http://www.yaoyaola.cn/index.php/exapi/checkuser?uid=30716&url=${encodedRedirectUrl}&flag=1`
        }
      }
    }
    // 摇摇啦认证成功，进行商户微信认证
    if (token !== null && merchantOpenid === null) {
      const code = getUrlKey('code')
      console.log('code=' + code)
      console.log('appid=' + appid)
      if (code === null || code === undefined || code === '') {
        console.log('in code is null and redirect to wechat auth code=' + code)
        next()
        // window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodedRedirectUrl}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`
      } else {
        let { data } = await api.apply.merchantAuth({ code: code, token: token, redirect_uri: redirectUrl })
        if (data.code === 200) {
          console.log('merchant login success')
          console.log(data)
          localStorage.setItem('merchant_openid', data.data.merchant_openid)
          localStorage.setItem('userInfo', data.data)
          next()
          return
        } else {
          console.log(data)
          next()
          // window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodedRedirectUrl}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`
        }
      }
    }
  }
})

export default router
