<template>
    <div>
        <van-nav-bar
                title="我的返款"
                lef-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <p>{{rebateTilte}}</p>
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
      rebateTilte: '我的返款'
    })
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
</style>
