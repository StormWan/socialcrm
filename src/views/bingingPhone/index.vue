<template>
    <div >
        <div id="Top">
            <span><strong>{{tilte1}}</strong></span>
            <h1>{{title}}</h1>
            <h4>{{title2}}</h4>
        </div>
        <van-row type="flex" justify="center" id="container">
            <van-col ><img src="../../assets/image/redArrowL.png" id="imgCenterL"></van-col>
            <van-col span="9"><van-button type="default" to="../setting" size="large">立即注册</van-button></van-col>
            <van-col ><img src="../../assets/image/redarrowR.png" id="imgCenterR"></van-col>
        </van-row>
        <div id="buttom">
        <h3>活动规则</h3>
        <p><strong>获奖限制：</strong>每个微信号、手机号限领一次</p>
        <p><strong>活动规则：</strong>2019 年 04 月 12 日 —— 2021 年 05 月 29 日</p>
        </div>
    </div>
</template>

<script>
import { Button, Row, Col, Icon } from 'vant'
export default {
  name: 'bingingPhone',
  components: {
    [Button.name]: Button,
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon
  },
  data () {
    return ({
      title: '首 绑 有 礼',
      tilte1: '恭喜您获得',
      title2: '首次注册即可领首绑有礼'
    })
  }
}
</script>

<style scoped lang="less">
    #Top {
        background-image: url("../../assets/image/phoneBackground.png"); /*记得换图*/
        width: 100%;
        height:220px;
        background-size: 100% 100%;
        /*字体居中*/
        display: flex;
        flex-direction: column;
        text-align: center;
        span{
            padding-left: 70px;
            margin-top: 70px;
            font-size: smaller;
            color: white;
        }
        h1{
            margin-top: 0px;
            margin-bottom: 0px;
            color: white;
            font-family: "微软雅黑 Light";
        }
        h4{
            color: #da4636;
            margin-top: 10px;
        }
    }
    #container {
        margin-top: 10px;
        padding-left: 5px;
        #imgCenterL{
            width: 80px;
            height: 30px;
            padding-top: 10px;
            padding-right: 10px;
        }
        #imgCenterR{
            width: 80px;
            height: 30px;
            padding-top: 10px;
            padding-left: 10px;
        }
        .van-button {
            color: #da4636;
            font-size: larger;
            background-color: #f2e27b;
            span{
                font-weight: bold;
                font-size: larger;
            }
        }
    }
    #buttom {
        h3{
            color: #da5441;
            text-align:center;//水平居中
            margin: 0px;
            height: auto;
            padding-top: 20px;
            padding-bottom: 10px;
        }
        p{
            padding-left: 15px;
            padding-right: 15px;
            strong {color: #ff9644;}
        }
    }
</style>
