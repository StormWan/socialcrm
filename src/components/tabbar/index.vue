<template>
  <van-tabbar v-model="activeTab" style="z-index: 1999">
    <van-tabbar-item
      v-for="(tab, index) in tabbar"
      :icon="tab.icon"
      :to="tab.path"
      :dot="tab.dot"
      :info="tab.info"
      :key="index">
      {{tab.name}}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'

export default {
  data () {
    return {
      tabbar: [
        {
          name: '任务',
          path: '/task',
          pathName: 'task',
          icon: 'home-o',
          dot: false
          // info: ''
        },
        {
          name: '我的',
          path: '/about',
          pathName: 'about',
          icon: 'friends-o',
          dot: false
          // info: ''
        }
      ]
    }
  },
  computed: {
    activeTab: {
      get () {
        return this.$store.state.tabbar.activeTab
      },
      set (value) {
        this.$store.commit('tabbar/setActiveTab', value)
      }
    }
  },
  methods: {
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
}
</script>
