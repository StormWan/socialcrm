/**
 * article模块接口列表
 * post方法：原理同get基本一样，但是要注意的是，post方法必须要使用对提交从参数对象进行序列化的操作
 * 所以这里我们通过node的qs模块来序列化我们的参数。这个很重要，如果没有序列化操作，后台是拿不到你提交的数据的
 */

import base from '../base' // 导入接口域名列表
import axios from '@/common/utils/http' // 导入http中创建的axios实例
import qs from 'qs' // 根据需求是否导入qs模块
// import request from '@/utils/reuqest'

const apply = {
  /**
   * 获取微信授权： code,openid,token
   * */
  auth (params) {
    return axios.post(`${base.scrm}/account/auth/`, qs.stringify(params))
  }
}

export default apply
