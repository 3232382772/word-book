<template>
  <div id="preview">
    <preview-nav></preview-nav>
    <scroll class="content" ref="scroll">
      <preview-display></preview-display>
    </scroll>
  </div>
</template>

<script>
import PreviewNav from './childComps/PreviewNav'
import PreviewDisplay from './childComps/PreviewDisplay'
import Scroll from 'components/common/scroll/Scroll'

export default {
  name: 'Preview',
  components: {
    PreviewNav,
    PreviewDisplay,
    Scroll
  }
}
</script>

<style scoped>
  .preview {
    background: #fff;
  }
  .content {
    height: calc(100vh - 93px);
    overflow: hidden;
  }
</style>