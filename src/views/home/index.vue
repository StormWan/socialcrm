<template>
  <div id="home">
    <div id="container">
        <van-field v-model="orderNum" placeholder="订单号" name="订单号" class="field"/>
              <van-row type="flex">
            <van-col span="4.5" id="buttonGutter">
              <van-button plain @click="show = true" size="mini" class="rules">{{button}}</van-button >
              <van-dialog v-model="show" title="截图展示" show-cancel-button>
                <img src="../../assets/image/evaluation.png" class="picture">
              </van-dialog>
          </van-col>
          <van-col span="4.5">
            <van-button plain @click="onClickAlertRules" size="mini" class="rules">{{button1}}</van-button>
          </van-col>
      </van-row>
      <div class="uploader">
      <van-uploader :after-read="onRead" name="截图" accept="image/jpg, image/jpeg, image/png" multiple >
          <van-row type="flex">
              <van-col>
                  <div v-for="(item,index) in img " :key="item">
                      <img :src="item"  ref="goodsImg" class="Photograph" >
                      <van-icon name="clear" @click="imgclose(index)"></van-icon>
                  </div>
              </van-col>
              <van-col><img src="@/assets/image/photograph.png" name="photograph" class="Photograph"></van-col>
          </van-row>
      </van-uploader>
      </div>
      <van-button v-on:click="submitComment" type="primary" size="large" style="border-radius:5px;">{{button2}}</van-button>
      <!--  右下角 + 的跳转  -->
      <div class="routerLink" v-show="showService">
        <van-row>
          <van-icon name="service-o" class="iconService"  @click="customer = true"/>
            <van-dialog
                    v-model="customer"
                    title="联系客服"
                    show-cancel-button
            >
              <img src="../../assets/image/customer.png" class="picture">
            </van-dialog>
        </van-row>
        <van-row>
          <img
                  src="../../assets/image/addSign.png"
                  class="AddMin"
                  @click="changeMin"
          >
        </van-row>
      </div>
      <!--  右下角 - 跳转  -->
      <div class="routerLink" v-show="noshowService" >
        <van-row>
            <div>
          <van-icon name="service-o" class="iconService" @click="customer = true"/>
            <van-dialog
                        v-model="customer"
                        title="联系客服"
                        show-cancel-button
            >
              <img src="../../assets/image/customer.png" class="picture">
            </van-dialog>
            </div>
          <router-link :to="{path:'../teach'}" >
            <van-icon name="question-o" class="iconTeach"/>
          </router-link>
          <router-link :to="{path:'../task'}" >
            <van-icon name="point-gift-o" id="iconTask"/>
          </router-link>
          <img
                  src="../../assets/image/minusSign.png"
                  class="AddMin"
                  @click="changeAdd"
          >
        </van-row>
          <div class="span">
              <p class="spanRemind">
                <router-link :to="{path:'../task'}" style="color: white">
                  {{button3}}
                </router-link>
              </p>
              <p class="spanRemind">
                <router-link :to="{path:'../teach'}" style="color: white">
                {{button4}}
                </router-link>
              </p>
              <p class="spanRemind">
                {{button5}}
                <van-dialog
                        v-model="customer"
                        title="联系客服"
                        show-cancel-button
                >
                  <img src="../../assets/image/customer.png" class="picture">
                </van-dialog>
              </p>
          </div>
      </div>
    </div>
  </div>
</template>
<!--defer需要等待页面完成后执行-->
<script>
import { Button, Toast, CellGroup, Cell, Field, Uploader, Row, Col, Icon, Popup } from 'vant'
import api from '@/api/'
import { mapMutations } from 'vuex'

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
      orderNum: null,
      image: null,
      formData: null,
      img: [], // 用于显示图片
      show: false,
      customer: false,
      showResult: false,
      show1: false,
      showService: true,
      noshowService: false,
      button: '截图示例',
      button1: '活动规则',
      button2: '确定',
      button3: '我的任务',
      button4: '我的教程',
      button5: '联系客服'
    })
  },
  mounted () {
    this.formData = new FormData()
    // this.formData.append('activity', api.show.activityDetail(this.activityDetail)) // <--- 从服务器 get activity
  },
  methods: {
    // 删除预览图片
    imgclose (e) {
      this.img.splice(e, 1)
    },
    // 活动规则的弹窗信息
    ...mapMutations({
      setActiveTab: 'tabbar/setActiveTab' // 将 `this.setActiveTab()` 映射为 `this.$store.commit('setActiveTab')`
    }),
    // async validate () {
    //   const result = await this.$validator.validate()
    //   if (!result) {
    //     const errMsg = this.errors.items[0].msg
    //     throw new Error(errMsg)
    //   }
    // },
    onRead (file) {
      if (this.img.length >= 1) { // <------限定只能上传一张截图
        Toast('只需上传一张图喲！')
      } else {
        this.formData.append('screen_shot', file.file)
        this.img.push(file.content)
      }
    },
    async submitComment () {
      this.formData.append('order_id', this.orderNum)
      // // activity这个参数从url中获得
      const activity = this.$route.query.activity
      this.formData.append('activity', activity) // <---- activity
      try {
        if (this.formData.get('order_id') === undefined || this.formData.get('order_id') === null) {
          Toast('订单号不能为空')
        } else if (isNaN(this.formData.get('order_id')) && this.formData.get('order_id').length !== 18) {
          Toast('请输入正确的订单号格式') // <---isNaN() 函数用于检查其参数是否是非数字值。非数值就是 ture
        } else if (this.formData.get('screen_shot') === undefined || this.formData.get('screen_shot') === null) {
          Toast('晒单截图不能为空')
        } else if (this.formData.get('activity') === undefined || this.formData.get('activity') === null) {
          Toast('参数错误')
        } else {
          const { data } = await api.show.showCreate(this.formData)
          if (data.code !== 200) {
            Toast(data.code)
          } else {
            Toast(data.desc)
          }
        }
      } catch (e) {
        Toast(e.message)
      }
    },
    onClickAlertRules () {
      this.$dialog.alert({
        title: '活动规则',
        message: '1.按照要求完成评价截图上传，订单号上传。 2.人工审核后发放红包。'
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
      background-image: url("../../assets/image/homeBackground.jpg");
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
      position: fixed;
      display: block;

      #container {
          position: relative;
          padding-left: 10px;
          padding-right: 10px;
          /*输入框的样式*/

          .field {
             /*margin-top: 50%;*/
              margin-top: 160px;
              margin-bottom: 10px;
              background-color: white; /*设置输入框浅灰色*/
              padding: 10px;
              border-radius: 5px
          }

          /*截图示例 + 活动规则的按钮间距*/

          #buttonGutter {
              padding-right: 10px
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
                font-size: large;
                left: 55px;
                margin-top: 0px;
              }
          }

          /* 绿色加号,橙色减号 图片的大小 */

          .AddMin {
              width: 2.7rem;
              height: 2.7rem;
          }

          /*客服icon，继承 icon 的样式*/

          .iconService{
              top: 235px;
              /*animation: myService 200ms;*/
          }

          /*任务icon*/

          #iconTask{
              top: 165px;
              animation: myTask 200ms;
          }

          /*教程icon*/

          .iconTeach{
              top: 200px;
              animation: myTeach 200ms;
          }

          /*右下角总的样式*/
          .routerLink {
              float: right;
              right: 0px;
              margin-top: 45px;
              z-index: 999;
            router-link {
              color: white;
            }
          }

          /*span*/

          .span {
              position: absolute;
              z-index: 900;
              top: 150px;
              right: 50px;
              padding: 5px;
              color: white;
              width: 70px;
              animation: mySpan 300ms;

              .spanRemind {
                  margin-top: 20px;
                  padding-left: 5px;
                  background-color: rgba(0, 0, 0, 0.5);
                  border-radius: 2px;
                .font {
                  color: white;
                }
              }
          }

          @keyframes myTeach {
              0% {
                  top: 255px;
              }
              25% {
                  top: 240px;
              }
              50% {
                  top: 225px;
              }
              100% {
                  top: 215px;
              }
          }
          @keyframes myTask {
              0% {
                  top: 255px;
              }
              25% {
                  top: 209px;
              }
              50% {
                  top: 193px;
              }
              100% {
                  top: 175px;
              }
          }
          @keyframes mySpan {
              0% {
                  opacity: 0.01
              }
              25% {
                  opacity: 0.3
              }
              50% {
                  opacity: 0.75
              }
              100% {
                  opacity: 1
              }
          }
      }
  }
  .van-icon {
      font-size: 2em;
      margin: 5px;
      background-color: white;
      border-radius: 20px;
      position: absolute;
      z-index: 999;
      /*（申请icon）到.iconService类的任何地方.iconService类出现。*/
  }
</style>
