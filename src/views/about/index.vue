<template>
  <div>
    <van-nav-bar
            title="个人中心"
            lef-text="返回"
            left-arrow
            @click-left="onClickLeft"
    />
    <div id ="personSetting">
<!--   个人名片 -->
    <van-row type="flex" justify="space-between">
      <van-col>
        <router-link :to="{path:'../setting'}" >
          <van-icon name="setting-o" class="iconStyle"/>
        </router-link>
      </van-col>
      <van-col>
        <van-icon name="service-o" class="iconStyle" @click="customer = true"/>
        <van-dialog
                v-model="customer"
                title="联系客服"
                show-cancel-button
        >
          <img src="../../assets/image/customer.png" id="cusPicture">
        </van-dialog>
      </van-col>
    </van-row>
    <van-row type="flex">
      <van-col span="6">
        <img src="@/assets/image/person.png" id="personPicture">
      </van-col>
      <van-col span="15">
        <h3>{{personName}}</h3>
        <span>{{personId}}</span>
      </van-col>
    </van-row>
    </div>
<!--    我的资产 -->
    <van-row type="flex" justify="space-between" class="hairline">
      <van-col span="6">
        <h4>{{myAssets}}</h4>
      </van-col>
      <van-col span="12" id="routerArrow">
        <router-link :to="{path:'../task'}">
          <span>{{activate}}</span>
          <van-icon name="arrow"/>
        </router-link>
      </van-col>
    </van-row>
<!--    任务中心 + 我的反馈-->
    <van-row type="flex" justify="center" class="hairline">
      <van-col span="6"></van-col>
      <van-col span="6">
        <router-link :to="{path:'../task'}">
          <van-icon name="column" class="iconStyle"/>
          <p>{{taskCenter}}</p>
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link :to="{path:'../rebate'}">
          <van-icon name="gold-coin" class="iconStyle"/>
          <p>{{rebate}}</p>
        </router-link>
      </van-col>
      <van-col span="6"></van-col>
    </van-row>
<!--    个人会员卡片-->
    <van-row tyle="flex" justify="center" class="points">
      <van-col class="hairline">
        <h3>{{integral}}</h3>
      </van-col>
      <van-col>
        <h1>{{grade}}</h1>
      </van-col>
      <van-col>
        <h3>{{grade1}}</h3>
      </van-col>
      <van-col>
        <span>{{grade2}}</span>
      </van-col>
    </van-row>
    </div>
</template>

<script>
import { Button, NavBar, Row, Col, Icon, Dialog } from 'vant'
export default {
  components: {
    [Button.name]: Button,
    [NavBar.name]: NavBar,
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Dialog.name]: Dialog
  },
  // async mounted () {
  //
  // },
  data () {
    return ({
      customer: false,
      personName: '老王上田',
      personId: '会员 ID ：1233435',
      myAssets: '我的资产',
      activate: '去参加活动赢得好礼',
      taskCenter: '任务中心',
      rebate: '我的返款',
      integral: '我的积分',
      grade: '0',
      grade1: '我的会员 等级： LV 0',
      grade2: '目前是第一等级哦'
    })
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  },
  mounted () {
    console.log('in mounted')
    this.$store.commit('tabbar/setActiveTab', 1)
  }
}
</script>

<style scoped lang="less">
  #personSetting {
    background-color: #ececec;
    /*  background-image*/
    .iconStyle{
      font-size: 20px;
      color: black;
    }
    #cusPicture {
      /*显示客服二维码例子大小*/
      width: 280px;
      height: 280px;
    }
    #personPicture {
      width: 60px;
      height: 60px;
      padding: 10px;
    }
  }
  .iconStyle{
    padding-left: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 10px;
  }
  .hairline{
    border-bottom: 1px solid #dbd7d4;/*连续橙色的线*/
    #routerArrow{
      padding-top: 20px;
      font-size: 16px;
    }
    .iconStyle{
      font-size: 25px;
      padding-left: 20px;
    }
    h4{
      padding-left: 10px;
      font-family: "微软雅黑";
      /*font-size: large;*/
      font-weight: normal;
    }
    p{
      margin: 0px;
    }
  }
  .points{
    display: flex;
    flex-direction: column;
    text-align: center;
  }
</style>
