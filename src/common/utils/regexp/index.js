export const idCard = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/

export const mobileReg = /^1[0-9]{10}$/

export const address = val => {
  const value = val.trim()
  return value.length >= 5 && value.length <= 100
}

export const userName = /^[a-zA-Z0-9_\u4e00-\u9fa5]{3,20}$/

export const emailReg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/

export function getQueryString (url, name) {
  let reg = `(^|&)${name}=([^&]*)(&|$)`
  let r = url.search.substr(1).match(reg)
  if (r != null) return unescape(r[2]); return null
}

export function getUrlKey (name) {
  return decodeURIComponent(
      (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
}

// 截取url上的code ,可能没有,则返回''空字符串,截取的是"?"后面的字串
export function getUrlQueryParams (url) {
  let theRequest = {}
  if (url.indexOf('?') !== -1) {
    let str = url.substr(1)
    let strs = str.split('&')
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
    }
  }
  return theRequest
}
