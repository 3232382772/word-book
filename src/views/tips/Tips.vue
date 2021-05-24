<template>
  <div class="tips">
    <tips-nav class="nav" @navClick="navClick"  ref="nav" />
    <scroll class="content" ref="scroll" :probeType='3' @scroll="contentScroll">
      <methods class="methods" ref="methods" />
      <reason class="reason" ref="reason" />
    </scroll>    
  </div>
</template>

<script>
import TipsNav from './childComps/TipsNav'
import Methods from './childComps/Methods'
import Reason from './childComps/Reason'
import Scroll from 'components/common/scroll/Scroll'
export default {
  name: 'Tips',
  components: {
    TipsNav,
    Methods,
    Reason,
    Scroll
  },
  data () {
    return {
      boxTops: [],
      currentIndex: 0
    }
  },
  methods: {
    //点击nav滚动到对应位置
    navClick(index) {
      this.currentIndex = index
      this.$refs.scroll.scrollTo(0, -this.boxTops[index], 300)
    },
    //实现滚动与nav的联动
    contentScroll(position) {
      let topY = -position.y
      const length = this.boxTops.length
      for(let i = 0; i < length; i++) {
        if((this.currentIndex != i) && ((i < length-1 && topY >= this.boxTops[i] && topY <= this.boxTops[i+1]) || (i === length-1 && topY >= this.boxTops[i]))) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
    }
  },
  mounted () {
    this.boxTops.push(this.$refs.methods.$el.offsetTop)
    this.boxTops.push(this.$refs.reason.$el.offsetTop)
  }
}
</script>

<style scoped>
  .tips {
    background-color: rgba(248,248,248);
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 99;
  }
  .content {
    position: absolute;
    top: 47px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }

  .reason {
    margin-top: 10px;
  }
</style>