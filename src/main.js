import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Icon, Lazyload, Dialog } from 'vant'
import api from './api' // 导入api接口
// import './common/validate'

Vue.prototype.$api = api // 将api挂载到vue的原型上
Vue.config.productionTip = false
Vue.use(Icon)
Vue.use(Lazyload)
Vue.use(Dialog)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
