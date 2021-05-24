<template>
  <tab-bar class="tab-bar">
    <tab-bar-item path='/words'>
      <img src="~assets/img/danci.svg" alt="" slot="icon">
      <img src="~assets/img/danci-active.svg" alt="" slot="icon-active">
      <p slot="text">记单词</p>
    </tab-bar-item>
    <tab-bar-item path='/sections'>
      <img src="~assets/img/fenlei.svg" alt="" slot="icon">
      <img src="~assets/img/fenlei-active.svg" alt="" slot="icon-active">
      <p slot="text">单词本</p>
    </tab-bar-item>
    <tab-bar-item path='/profile'>
      <img src="~assets/img/wode.svg" alt="" slot="icon">
      <img src="~assets/img/wode-active.svg" alt="" slot="icon-active">
      <div slot="text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import {TabBarItem, TabBar} from 'components/common/tabBar'

export default {
  name: 'MainTabBar',
  components: {
    TabBarItem,
    TabBar
  }
}
</script>

<style scoped>
  .tab-bar{
    background-color: #F2F6FC;
  }
</style>