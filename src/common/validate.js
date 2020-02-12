import Vue from 'vue'
// import VeeValidate, { Validator } from 'vee-validate'
import VeeValidate from 'vee-validate'
import VueI18n from 'vue-i18n'
import zhMessages from 'vee-validate/dist/locale/zh_CN'
import enMessages from 'vee-validate/dist/locale/en'

Vue.use(VueI18n)

// 配置中文
const i18n = new VueI18n()
i18n.locale = 'zh_CN'

// 订单编号规则：
// 1、总共18位
// 2、前14位为序号
// 3、15-16位买家ID的倒数1-2位
// 4、17-18位买家ID的倒数3-4位

// const validator = {
//   getMessage{
//         zh_CN: field => field + '必须是18位的订单编号'
//   },
//   validate(value, args) {
//         return value.length === 18 && /^[0-9]*$/.test(value)
//   }
// }
//
// Validator.extend('digits', {
//   getMessage: {
//     zh_CN: field => field + '必须是18位的订单编号'
//   },
//   validate: value => {
//     return value.length === 18 && /^[0-9]*$/.test(value)
//   }
// })

const config = {
  i18nRootKey: 'validations', // customize the root path for validation messages.
  i18n,
  dictionary: {
    zh_CN: zhMessages,
    en: enMessages
  }
}

Vue.use(VeeValidate, config)
