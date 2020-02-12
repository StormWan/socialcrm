<template>
    <div>
        <van-nav-bar
                title="任务"
                lef-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <van-collapse v-model="activeName">
            <van-collapse-item title="已完成任务" name="1">
            </van-collapse-item>
            <van-collapse-item title="未完成任务" name="2">
                <router-link :to="{path:'/'}" >
                    <p>{{task}}</p>
                </router-link>
            </van-collapse-item>
        </van-collapse>
    </div>
</template>

<script>
import { Button, NavBar, Row, Col, Collapse, CollapseItem } from 'vant'
export default {
  components: {
    [Button.name]: Button,
    [NavBar.name]: NavBar,
    [Row.name]: Row,
    [Col.name]: Col,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem
  },
  data () {
    return ({
      activeName: ['1'],
      unfinishedTask: '未完成任务',
      completedTask: '已完成任务',
      task: '红包返现'
    })
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  },
  mounted () {
    console.log('in mounted')
    this.$store.commit('tabbar/setActiveTab', 0)
  }
}
</script>

<style type="less">
</style>
