<template>
  <div class="collect-words">
    <div v-for="(item, index) in words" :key="index" class="word">
      <div class="show-word">{{item.word}}</div>
      <div @click="removeWord(item)" class="control">移除</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'CollectWords',
  data () {
    return {
      
    }
  },
  computed: {
    ...mapState({
      words: 'collectedWords'
    })
  },
  methods: {
    ...mapMutations({
      remove: 'collectWord'
    }),
    removeWord(item) {
      this.remove(item)
    }
  },
}
</script>

<style scoped>
  .collect-words {
    padding-top: 20px;
  }
  .word {
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    box-shadow: 0 1px 20px #eee;
    line-height: 30px;
    padding: 5px 20px;
    margin-bottom: 10px;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .word:nth-child(odd) {
    border-left: solid 10px #409EFF;
  }

  .word:nth-child(even) {
    border-left: solid 10px #aaa;
  }

  .control {
    color: red;
    font-size: 14px;
  }
</style>