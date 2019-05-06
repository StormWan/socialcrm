<template>
    <div id="home">
        <div id="Top">
            <img src="../../assets/image/shareBackground.jpg" style="width: 100%;height: 300px"/>
            <h3>活动流程</h3>
            <div id="rule">
            <p>1. 生成分享海报</p>
            <p>2. 保存海报分享至朋友圈</p>
            <p>3. 在此活动页上传任务截图</p>
            <p>4. 审核通过后发奖</p>
            </div>
        </div>
        <div id="buttom">
            <van-button size="large" type="primary" @click="showThumb" >点击生成分享海报</van-button>
            <van-dialog v-model="showPoster" title="截图展示" show-cancel-button>
                <img src="../../assets/image/evaluation.png" class="picture">
            </van-dialog>
            <!--  截图示例 + 活动规则      -->
            <van-row type="flex">
                <van-col span="4" >
                    <van-button plain @click="showThumb_1" size="mini" class="rules">截图示例</van-button >
                    <van-dialog v-model="show" title="截图展示" show-cancel-button>
                        <img src="../../assets/image/evaluation.png" class="picture">
                    </van-dialog>
                </van-col>
<!--                <van-col span="1"/>-->
                <van-col span="4">
                    <van-button plain @click="onClickAlertRules" size="mini" class="rules">活动规则</van-button>
                </van-col>
            </van-row>
            <!--    上传图片        -->
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
                <van-button size="large" type="primary" @click="submitComment" id="submitButton">提交审核领奖励</van-button>
        </div>
    </div>
</template>

<script >
import { Button, Row, Col, Icon, Uploader, Toast } from 'vant'
import { getUrlKey } from '../../common/utils/regexp'
import api from '@/api/'
import base from '../../api/base'

export default {
  name: 'shareMoments',
  components: {
    [Button.name]: Button,
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Uploader.name]: Uploader,
    [Toast.name]: Toast
  },
  data () {
    return ({
      img: [], // 用于显示图片
      show: false,
      showPoster: false,
      maxSize: 1024 * 1024 * 2,
      serviceQrCodeShow: false,
      activityDetail: null
    })
  },
  async mounted () {
    const { data } = await this.$api.show.activityDetail(getUrlKey('activity'))
    if (data.code === 200) {
      this.activityDetail = data.data
    }
  },
  computed: { // <---获取客服的二维码
    serviceQrCodeImage () {
      const defaultQrCode = '/media/marketing/activity/default_service_qr_code.jpg'
      return this.activityDetail !== null && this.activityDetail.customer_service_qrcode !== null ? base.base + this.activityDetail.customer_service_qrcode : defaultQrCode
    }
  },
  methods: {
    showThumb () {
      this.showPoster = true
    },
    showThumb_1 () {
      this.show = true
    },
    onClickAlertRules () {
      const defaultRules = '1. 活动有效时间: XXXXXXX \n 2.领取方式: 提交订单信息 - 等待审核 - 奖励发放' +
          ' \n 3. 奖励发放时间：1 - 3 个工作日内发放 \n 4. 关注公众号的会员方可参加本活动 \n 5.若由于微信原因无法领取红包，请及时与 VIP 客服联系' +
          '\n 6. 最终解释权归本公众号所有'
      const rules = this.activityDetail.rules === null || this.activityDetail.rules === undefined ? defaultRules : this.activityDetail.rules
      // console.log(defaultRules)
      this.$dialog.alert({
        title: '活动规则',
        message: rules
      })
    },
    onRead (file) {
      console.log(this.img.length)
      if (this.img.length >= 1) { // <------限定只能上传一张截图
        Toast('只需上传一张图喲！')
      } else {
        this.file = file.file
        this.img.push(file.content)
      }
    },
    oversize () { // <-----超出 2 M 就发出警告
      Toast('上传的文件不能超过2M!')
    },
    imgclose (e) { // <----删除图片，将 img 数组清空
      console.log(e)
      this.img.splice(e, 1)
    },
    async submitComment () { // <---提交截图到服务器
      let formData = new FormData()
      formData.append('screen_shot', this.file)
      const activity = getUrlKey('activity')
      formData.append('activity', activity) // <---- activity
      if (this.file === undefined || this.file === null || this.file === '') {
        Toast('晒单截图不能为空')
      } else if (activity === undefined || activity === null) {
        Toast('参数错误')
      } else {
        const { data } = await api.share.shareCreate(formData)
        if (data.code !== 200) {
          Toast(JSON.stringify(data.desc) + ' activity=' + formData.get('activity'))
          console.log(data)
        } else {
          Toast('提交成功')
          this.img = []
          this.file = ''
          this.serviceQrCodeShow = true
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
    #home {
        position: absolute;
        right: 0px;
        left: 0px;
        background-color: #ec4205;
        #Top {
            margin-bottom: 20px;
            h3 {
                text-align: center; //水平居中
                border: 2px dashed yellow; /*断续的白色的框*/
                margin-top: 10px;
                margin-left: 90px;
                margin-right: 90px;
                border-radius: 10px;
                color: white;
            }

            #rule {
                padding-left: 35px;
                padding-top: 1px;
                padding-bottom: 1px;
                /*background-color: yellow;*/
                background-image: url("../../assets/image/boxRules.png");
                background-size: 100% 100%;
                margin-left: 40px;
                margin-right: 40px;
            }
        }
        #buttom {
            padding-left: 10px;
            padding-right: 10px;
            .van-button {
                border-radius:5px;
            }
            /*rules 截图示例，活动规则 外围边框*/
            .rules {
                border: 1px dashed white; /*断续的白色的框*/
                background-color: #ec4205;
                border-radius:0px;
                color: white;
                opacity: 0.9; /*背景色透明度*/
                margin-top: 10px;
                margin-bottom: 10px;
            }

            /* 显示好评例子图片的大小 */

            .picture {
                width: 100%;
                height: 300px;
                position: relative;
                z-index: 99999;
            }

            .uploader{
                background-color: white;
                margin-bottom: 10px;
                /*photograph 大小和周围的边框*/

                .Photograph {
                    margin-top: 10px;
                    margin-bottom: 5px;
                    width: 60px;
                    height: 60px;
                    margin-left: 10px;
                    color: #ff9644;
                    border: 1px solid #ff9644; /*连续橙色的线*/
                }
            }

            /*截图示例 + 活动规则的按钮间距*/

            #buttonGutter {
                /*padding-right: 10px*/
                margin-left: 10px;
            }
            #submitButton{
                margin-bottom: 50px;
            }
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

</style>
