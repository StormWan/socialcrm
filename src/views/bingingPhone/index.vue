<template>
    <div >
        <div id="Top"/>
        <van-row type="flex" justify="center" id="container">
            <van-col><img src="../../assets/image/arrowLeft.png" class="imgCenter"></van-col>
            <van-col><van-button type="default" to="../setting">立即注册</van-button></van-col>
            <van-col><img src="../../assets/image/arrowRight.png" class="imgCenter"></van-col>
        </van-row>
        <div id="buttom">
        <h2>活动规则</h2>
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
    return ({})
  }
}
</script>

<style scoped lang="less">
    #Top {
        background-image: url("../../assets/image/phoneBackground.png"); /*记得换图*/
        width: 100%;
        height:200px;
        background-size: 100% 100%;
    }
    #container {
        margin-top: 10px;
        .imgCenter{
            width: 100px;
            height: 50px;
        }
        .van-button {
            color: #da4636;
            font-size: larger;
            background-color: #f2e27b;
        }
    }
    #buttom {
        h2{
            color: #da4636;
            text-align:center;//水平居中
            margin: 0px;
            height: auto;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        p{
            padding-left: 10px;
            strong {color: #ff9644;}
        }
    }
</style>
