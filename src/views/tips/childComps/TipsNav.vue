<template>
  <nav-bar class="nav-bar">
    <div slot="left" @click="back"><img src="~assets/img/back.svg" alt=""></div>
    <div slot="center" class="titles">
      <div v-for="(item, index) in titles" :key="index" @click="itemClick(index)" class="title" :class="{active: index === currentIndex}">{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'

export default {
  name: 'TipsNav',
  components: {
    NavBar,
  },
  data () {
    return {
      titles: ['使用方法', '项目初衷'],
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('navClick', index)
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .nav-bar {
    background: #fff;
    z-index: 1000000;
  }

  .nav-bar img{
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }

  .nav-bar .titles {
    display: flex;
    color: #000;
    text-align: center;
  }

  .title {
    flex: 1;
    color: #C0C4CC;
    font-weight: bold;
  }

  .active {
    color: #409EFF;
    border-bottom: solid 2px #409EFF;
  }
</style>