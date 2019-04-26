import Vue from 'vue'
import Router from 'vue-router'
import api from '@/api/'

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
        default: () => import('./views/home/index.vue'),
        tabbar: () => import('./components/tabbar/index.vue')
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
export default router
// 全局前置守卫
// router.beforeEach(async (to, from, next) => {
//   // 如果 meta.noAuth 是 true 就直接跳转，如果是 false ,就需要登录之后再跳转
//   if (to.matched.some(recode => recode.meta.noAuth)) {
//     next()
//   } else {
//     // localStorage 存储数据存在，就直接获取信息，然后跳转到相对应的页面
//     if (localStorage.getItem('userInfo') && localStorage.getItem('userInfo') !== 'undefined') {
//       next() // 进入 home 页面
//       return
//     }
//     // localStorage 没有保存的信息就跳转到微信申请页面，redirectUrl 是返回当前页面，也就是好评返现的页面
//     let redirectUrl = 'http://newsh5.cn'
//     const appid = 'wx6a75c84b50b0939f'
//     const code = getUrl(window.location.href).code
//     console.log(code)
//     if (code === undefined) {
//       console.log('wechat login')
//       window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`
//     }
//     if (code !== undefined) {
//       const userInfo = localStorage.getItem('userInfo')
//       const token = (userInfo !== undefined && userInfo !== null) ? userInfo.token : ''
//       console.log(token)
//       let { data } = await api.apply.auth({ code: code, appid: appid, redirect_uri: redirectUrl, token: token }) // 获取用户信息,后端可首先通过cookie,session等判断,没有信息则通过code获取
//       if (data.code === 200) {
//         localStorage.setItem('userInfo', data)
//         localStorage.setItem('token', token)
//         next()
//       } else {
//         console.log(data)
//         console.log('wechat login 2')
//         window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`
//       }
//     }
//   }
//   // }
// })

// 截取url上的code ,可能没有,则返回''空字符串,截取的是"?"后面的字串
// function getUrl () {
//   let url = location.search
//   let theRequest = {}
//   if (url.indexOf('?') !== -1) {
//     let str = url.substr(1)
//     let strs = str.split('&')
//     for (let i = 0; i < strs.length; i++) {
//       theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
//     }
//   }
//   return theRequest
// }
