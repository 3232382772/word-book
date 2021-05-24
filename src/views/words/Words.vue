<template>
  <div id="words">
    <words-nav @showPreview="switchState"/>
    <words-display />
    <preview v-show="isPreview" class="preview"/>
    <router-view></router-view>
  </div>
</template>

<script>
import WordsNav from './childComps/WordsNav'
import WordsDisplay from './childComps/WordsDisplay'

import Preview from 'views/preview/Preview'

export default {
  name: 'Words',
  components: {
    WordsNav,
    Preview,
    WordsDisplay,
  },
  data () {
    return {
      isPreview: false,
      
    }
  },
  mounted () {
    //切换单词预览与单词
    this.$eventBus.$on('toRead', this.switchState)
  },
  methods: {
    switchState() {
      this.isPreview = !this.isPreview
    },
    hh() {
      console.log('hello')
    }
  }
}
</script>

<style scoped>
  .preview {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
</style>