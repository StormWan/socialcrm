<template>
    <div>
        <van-nav-bar
                title="红包返现教程"
                lef-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <h1>{{ title }}</h1>
        <h3>{{ title1 }}</h3>
        <van-row type="flex" gutter="20">
            <van-col sapn="10" class="fontLocal">
                <img src="@/assets/image/number1.png" class="pictureNumber">
                <span>{{ title2 }}</span>
                <p>{{ content }}</p>
                <img src="@/assets/image/arrowLeft.png" class="pictureArrow">
            </van-col>
            <van-col sapn="6">
                <img src="@/assets/image/taobao_1.png" class="pictureTabo">
            </van-col>
        </van-row>
        <van-row type="flex">
            <van-col sapn="6">
                <img src="@/assets/image/taobao_2.png" class="pictureTabo">
            </van-col>
            <van-col sapn="6" class="fontLocal">
                <img src="@/assets/image/number2.png" class="pictureNumber">
                <span>{{ title3 }}</span>
                <p>{{ content1 }}</p>
                <img src="@/assets/image/arrowRight.png" class="pictureArrow">
            </van-col>
        </van-row>
        <van-row type="flex">
            <van-col sapn="6" class="fontLocal">
                <img src="@/assets/image/number3.png" class="pictureNumber">
                <span>{{ title4 }}</span>
                <p>{{ content2 }}</p>
                <img src="@/assets/image/arrowLeft.png" class="pictureArrow">
            </van-col>
            <van-col sapn="6">
                <img src="@/assets/image/taobao_3.png" class="pictureTabo">
            </van-col>
        </van-row>
        <van-row type="flex">
            <van-col sapn="6">
                <img src="@/assets/image/taobao_4.png" class="pictureTabo">
            </van-col>
            <van-col sapn="6" class="fontLocal">
                <img src="@/assets/image/number4.png" class="pictureNumber">
                <span>{{ titlt5 }}</span>
                <p>{{ content3 }}</p>
            </van-col>
        </van-row>
    </div>
</template>

<script>
import { Button, Toast, NavBar, Row, Col } from 'vant'
export default {
  components: {
    [Button.name]: Button,
    [Toast.name]: Toast,
    [NavBar.name]: NavBar,
    [Row.name]: Row,
    [Col.name]: Col
  },
  data () {
    return ({
      title: '操作指南',
      title1: '如何复制单号',
      title2: '我的淘宝',
      title3: '我的订单',
      title4: '订单详情',
      titlt5: '评价示例',
      content: '打开手机淘宝，进入我的淘宝页面，点击我的订单。',
      content1: '找到在我们店铺购物的订单，点击进入',
      content2: '下拉页面，可以看到一个 复制 的按钮,点击复制订单号。在活动页面输入订单号。',
      content3: '淘宝全五星评分 + 15 字以上正面评价，并且截图保存。在活动页面上传图片。'
    })
  },
  methods: {
    onClickLeft () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>
    .pictureTabo{
        width: 180px;
        height: 150px;
    }
    .pictureNumber{
        width: 30px;
        height: 30px;
    }
    .pictureArrow{
        padding-left: 40px;
        width: 70px;
        height: 70px;
    }
    h1{
        color: orange;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    h3{
        color: orangered;
        border-bottom: 1px dashed orange;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    p{
        font-size: small;
        color: orangered;
    }
    span{
        padding-left: 10px;
        color: orangered;
        font-size: large;
        font-family: "微软雅黑";
    }
    .fontLocal{
        padding: 10px;
    }
</style>
