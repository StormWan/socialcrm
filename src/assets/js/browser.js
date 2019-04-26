// 判断是否是微信环境
// 请关注附录：总结了判断 ios设备 QQ环境  Android环境 的js
export let isWeChat = function () {
  const ua = navigator.userAgent.toLowerCase()
  return /MicroMessenger/i.test(ua)
}

// 判断是否是iOS设备
export let isIos = () => {
  const ua = navigator.userAgent.toLowerCase()
  return /(iPhone|iPad|iPod|iOS)/i.test(ua)
}

// 判断是否是QQ环境
export let isQQ = function () {
  const ua = navigator.userAgent.toLowerCase()
  return ua.match(/\sQQ/i) !== null
}

// 判断是否是Android环境
export let isAndroid = function () {
  var ua = navigator.userAgent.toLowerCase()
  return /Android/i.test(ua)
}
// let arr=[] {}
// export default arr;
// module.exports=arr;
