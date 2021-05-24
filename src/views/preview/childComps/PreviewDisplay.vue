<template>
  <div class="preview-display">
    <h1>{{bookName}}</h1>
    <div class="content">
      <div class="word" 
        v-for="(item ,index) in words" 
        :key="index"
        :style="{color: statusColor[item.status]}">{{item.word}}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PreviewDisplay',
  data () {
    return {
      statusColor: ['#909399','#409EFF','#F56C6C'],
    }
  },
  computed: {
    ...mapState({
      words: 'currentBook',
      bookName: 'currentBookName'
    })
  },
  mounted () {
  }
}
</script>

<style scoped>
  .preview-display {
    width: 100%;
  }

  h1 {
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    text-align: center;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  .word {
    height: 30px;
    line-height: 30px;
    width: 33.3%;
    text-align: center;
    font-size: 16px;
  }
</style>