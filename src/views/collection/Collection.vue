<template>
  <div class="collection">
    <collection-nav/>
    <scroll class="content" ref="scroll">
      <collect-words/>
    </scroll>
  </div>  
</template>

<script>
import CollectionNav from './childComps/CollectionNav'
import CollectWords from './childComps/CollectWords'
import Scroll from 'components/common/scroll/Scroll'

export default {
  name: 'Collection',
  components: {
    CollectionNav,
    CollectWords,
    Scroll
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  },
  mounted () {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .collection {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(248,248,248);
    z-index: 99;
  }

  .content {
    position: absolute;
    top: 47px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    overflow: hidden;
  }
</style>