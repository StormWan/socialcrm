<template>
  <div id="home">
    <div id="head">
        <img src="../../assets/image/homeBackground.jpg" id="imgbackGround">
        <h3>快来抢<span>{{price}}</span>元红包吧</h3>
    </div>
    <div id="container">
        <van-field v-model="orderNum" placeholder="请输入长度为18的订单号" name="订单号" class="field"/>
              <van-row type="flex">
            <van-col span="4" >
              <van-button plain @click="showThumb" size="mini" class="rules">截图示例</van-button >
              <van-dialog v-model="show" title="截图展示" show-cancel-button>
                <img src="../../assets/image/evaluation.png" class="picture">
              </van-dialog>
          </van-col>
          <van-col span="4">
            <van-button plain @click="onClickAlertRules" size="mini" class="rules">活动规则</van-button>
          </van-col>
      </van-row>
      <div class="uploader">
      <van-uploader :after-read="onRead" name="截图" :max-size="maxSize" @oversize="oversize" accept="image/jpg, image/jpeg, image/png">
          <van-row type="flex">
              <van-col>
                  <div v-for="(item, index) in img " :key=index>
                      <img :src="item"  ref="goodsImg" class="Photograph" >
                      <van-icon name="clear" @click.native.stop="imgclose(index)"></van-icon>
                  </div>
              </van-col>
              <van-col><img src="@/assets/image/photograph.png" name="photograph" class="Photograph"></van-col>
          </van-row>
      </van-uploader>
      </div>
      <van-dialog v-model="serviceQrCodeShow" title="长按关注客服二维码" show-cancel-button>
        <img :src="serviceQrCodeImage" class="picture">
      </van-dialog>
      <van-button v-on:click="submitComment" type="primary" size="large" style="border-radius:5px;">确定</van-button>
    </div>
  </div>
</template>
<!--defer需要等待页面完成后执行-->
<script>
import { Button, Toast, CellGroup, Cell, Field, Uploader, Row, Col, Icon, Popup } from 'vant'
import api from '@/api/'
import { mapMutations } from 'vuex'
import { getUrlKey } from '../../common/utils/regexp'
import base from '../../api/base'

export default {
  name: 'home',
  components: {
    [Button.name]: Button,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Field.name]: Field,
    [Uploader.name]: Uploader,
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Popup.name]: Popup
  },
  data () {
    return ({
      activityDetail: null,
      orderNum: '',
      file: '',
      img: [], // 用于显示图片
      show: false,
      customer: false,
      showResult: false,
      show1: false,
      showService: true,
      noshowService: false,
      maxSize: 1024 * 1024 * 2,
      serviceQrCodeShow: false,
      price: '',
      pack_type: 0,
      pack_min_price: 0,
      pack_max_price: 0
    })
  },
  async mounted () {
    const { data } = await this.$api.show.activityDetail(getUrlKey('activity'))
    if (data.code === 200) {
      this.activityDetail = data.data
      // 当 pack_type 为 0，就是两个价格一杠，为 1 就是不一样
      if (this.activityDetail.pack_type === 0) {
        this.price = this.activityDetail.pack_min_price
      }
      if (this.activityDetail.pack_type === 1) {
        this.price = this.activityDetail.pack_min_price + '-' + this.activityDetail.pack_max_price
      }
    } else {
      console.log(data.data)
    }
  },
  computed: {
    serviceQrCodeImage () {
      const defaultQrCode = '/media/marketing/activity/default_service_qr_code.jpg'
      return this.activityDetail !== null && this.activityDetail.customer_service_qrcode !== null ? base.base + this.activityDetail.customer_service_qrcode : defaultQrCode
    }
  },
  methods: {
    // 删除预览图片
    showThumb () {
      this.show = true
    },
    // 点击删除的按钮
    imgclose (e) {
      console.log(e)
      this.img.splice(e, 1)
    },
    // 活动规则的弹窗信息
    ...mapMutations({
      setActiveTab: 'tabbar/setActiveTab' // 将 `this.setActiveTab()` 映射为 `this.$store.commit('setActiveTab')`
    }),
    onRead (file) {
      if (this.img.length >= 1) { // <------限定只能上传一张截图
        Toast('只需上传一张图喲！')
      } else {
        this.file = file.file
        this.img.push(file.content)
      }
    },
    oversize (file) {
      Toast('上传的文件不能超过2M!')
    },
    async submitComment () {
      let formData = new FormData()
      formData.append('screen_shot', this.file)
      formData.append('order_id', this.orderNum)
      const activity = getUrlKey('activity')
      formData.append('activity', activity) // <---- activity
      if (this.orderNum === undefined || this.orderNum === null || this.orderNum.length === 0) {
        Toast('订单号不能为空')
      } else if (this.orderNum.length < 2) {
        Toast('订单号长度太短') // <---isNaN() 函数用于检查其参数是否是非数字值。非数值就是 ture
      } else if (this.file === undefined || this.file === null || this.file === '') {
        Toast('晒单截图不能为空')
      } else if (activity === undefined || activity === null) {
        Toast('参数错误')
      } else {
        const { data } = await api.show.showCreate(formData)
        if (data.code !== 200) {
          Toast(JSON.stringify(data.desc) + ' activity=' + formData.get('activity'))
          console.log(data)
        } else {
          Toast('提交成功')
          this.orderNum = ''
          this.img = []
          this.file = ''
          this.serviceQrCodeShow = true
          // const activity = getUrlKey('activity')
          // this.$router.replace({ name: 'home', query: { activity: activity } })
        }
      }
    },
    onClickAlertRules () {
      const defaultRules = '1.按照要求完成评价并截图上传。\n 2.系统审核后发放红包。'
      const rules = this.activityDetail.rules === null || this.activityDetail.rules === undefined ? defaultRules : this.activityDetail.rules
      this.$dialog.alert({
        title: '活动规则',
        message: rules
      })
    },
    // 点击加号，替换减号列表
    changeMin () {
      this.showService = false
      this.noshowService = true
      console.log('showService：' + this.showService)
      console.log('noshowService：' + this.noshowService)
    },
    // 点击减号，替换加号列表
    changeAdd () {
      this.showService = true
      this.noshowService = false
      console.log('showService：' + this.showService)
      console.log('noshowService：' + this.noshowService)
    }
  }
}
</script>

<style scoped lang="less">
  #home {
      background-color: #d54c42;
      width: 100%;
      max-width: 700px;
      height: 100%;
      background-size: 100% 100%;
      position: fixed;
      display: block;

      #head{
          display: flex;
          justify-content: center;
          #imgbackGround {
              width: 100%;
              height: 200px;
          }
          h3{
              position: absolute;
              top: 125px;
              color: #ececec;
              span{
                  padding-right: 10px;
                  padding-left: 10px;
                  font-size: 20px;
                  color: #f2e27b;
              }
          }
      }
      #container {
          position: relative;
          padding-left: 10px;
          padding-right: 10px;
          /*输入框的样式*/
          .field {
             /*margin-top: 50%;*/
             /* margin-top: 160px;*/
              margin-bottom: 10px;
              background-color: white; /*设置输入框浅灰色*/
              padding: 10px;
              border-radius: 5px
          }
          /*rules 截图示例，活动规则 外围边框*/
          .rules {
              border: 1px dashed white; /*断续的白色的框*/
              background-color: #da4636;
              color: white;
              opacity: 0.9; /*背景色透明度*/
          }

          /*photograph 大小和周围的边框*/
          .Photograph {
              width: 60px;
              height: 60px;
              margin-left: 10px;
              color: #ff9644;
              border: 1px solid #ff9644; /*连续橙色的线*/
          }

          /* 显示好评例子 + 客服二维码 图片的大小 */
          .picture {
              width: 280px;
              height: 280px;
              position: relative;
              z-index:9999;
          }

          /*uploader 的输入框大小*/
          .uploader {
              background-color: white; /*设置输入框浅灰色*/
              margin-bottom: 10px;
              margin-top: 10px;
              padding-top: 10px;
              padding-bottom: 8px;
              border-radius: 5px;
            .van-icon {
              /*点击删除的图片样式*/
                position: absolute;
                color: red;
                font-size: 25px;
                left: 55px;
                margin-top: 0px;
                z-index:999;
              }
          }
      }
  }
</style>
