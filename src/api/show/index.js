/**
 * 好评返现模块接口列表
 */

import base from '../base' // 导入接口域名列表
import axios from '@/common/utils/http' // 导入http中创建的axios实例
// import qs from 'qs' // 根据需求是否导入qs模块

const show = {
  // 提交评论
  /**
   * @param {Object} params - {order_num, image}
   * */
  showCreate (params) {
    return axios.post(`${base.scrm}/marketing/show/`, params)
  },
  // 获取 activity 和活动个各种详情信息
  /**
   * @param {Object} params - {activity, claim}
   * */
  activityDetail (params) {
    return axios.get(`${base.scrm}/marketing/activity/`, params)
  }
}

export default show
