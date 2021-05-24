<template>
  <nav-bar class="nav-bar">
    <div slot="center">单词预览</div>
    <div slot="right" @click="toRead"><img src="~assets/img/switch.svg" alt=""></div>
  </nav-bar>  
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
export default {
  name: 'PreviewNav',
  components: {
    NavBar
  },
  methods: {
    toRead() {
      this.$eventBus.$emit('toRead')
    }
  }
}
</script>

<style scoped>
  .nav-bar img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
</style>