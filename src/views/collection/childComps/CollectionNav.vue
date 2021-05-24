<template>
  <nav-bar class="nav-bar">
    <div slot="left" @click="back">
      <img src="~assets/img/back.svg" alt="">
    </div>
    <div slot="center">我的收藏</div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'

export default {
  name: 'CollectionNav',
  components: {
    NavBar,
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .nav-bar {
    background: #fff;
    box-shadow: none;
    color: #000;
  }

  .nav-bar img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }
</style>