/**
 * 好评返现模块接口列表
 */

import base from '../base' // 导入接口域名列表
import axios from '../../common/utils/http' // 导入http中创建的axios实例
// import qs from 'qs' // 根据需求是否导入qs模块
// import axios from '@/common/utils/http' // 导入http中创建的axios实例

const share = {
  // 提交评论
  /**
   * @param {Object} params - {image}
   * */
  shareCreate (params) {
    return axios.post(`${base.scrm}/marketing/show/`, params)
  },
  // 获取 activity 和活动个各种详情信息
  activityDetail (id, params) {
    return axios.get(`${base.scrm}/marketing/activity/${id}/`, {
      params: params
    })
  }
}

export default share
