<template>
  <nav-bar class="nav-bar">
    <div slot="center">记单词</div>
    <div slot="right" @click="itemClick"><img src="~assets/img/preview.svg" alt=""></div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'

export default {
  name: 'WordsNav',
  components: {
    NavBar
  },
  methods: {
    itemClick() {
      this.$emit('showPreview')
    }
  }
}
</script>

<style scoped>
  .nav-bar img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
</style>